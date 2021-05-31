import * as S from "./style"
import {useContext, useEffect, useState} from "react";
import {TransactionContext} from "../../../contexts/TransactionContext";
import {FloatButton} from "../../components/FloatButton";
import GlobalStyle from "../../../global";
import * as Icon from '@material-ui/icons';
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import * as Values from "../../../utils/dropdown_values";
import Toast from "../../components/Toast";
import {useHistory} from "react-router-dom";
import Moment from 'moment';
import {FilterTitle, ItemDetails, OrderContent} from "./style";

const Home = () => {
    const history = useHistory();
    const {transactions, removeProduct} = useContext(TransactionContext);
    const [filteredTransactions, setFilteredTransactions] = useState(transactions)
    const [values, setValues] = useState({
        total: 0,
        outbound: 0,
        inbound: 0
    })
    const [orderType, setOrderType] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedType, setSelectedType] = useState("")


    useEffect(() => {
        orderTransactions();
        calculateTransactionTotal();
        setCategoryName();
    }, [])

    const searchTransaction = (searcher) => {
        const regex = new RegExp(`${searcher.trim()}`, 'i');
        const filtered = transactions.filter((transaction) => transaction.title.search(regex) >= 0);
        setFilteredTransactions(filtered);
    }

    const filterTransactions = (input, origin) => {
        const {value} = input.target;
        if (origin === "CAT") {
            const regex = new RegExp(`${value.trim()}`, 'i');
            const filtered = transactions.filter((transaction) => transaction.category.search(regex) >= 0);
            setFilteredTransactions(filtered);
            setSelectedCategory(value)
        } else {
            const regex = new RegExp(`${value}`, 'i');
            const filtered = transactions.filter((transaction) => transaction.type.search(regex) >= 0);
            setFilteredTransactions(filtered);
            setSelectedType(value)
        }
    }

    const calculateTransactionTotal = () => {
        let calculatedValues = {
            total: 0,
            outbound: 0,
            inbound: 0
        }
        transactions.forEach((transactions) => {
            if (transactions.type === "SAI") {
                calculatedValues.total += Math.abs(transactions.value) * -1
                calculatedValues.outbound += transactions.value
            } else {
                calculatedValues.total += transactions.value
                calculatedValues.inbound += transactions.value
            }
        })
        calculatedValues.total = parseFloat(calculatedValues.total.toFixed(2))
        calculatedValues.inbound = parseFloat(calculatedValues.inbound.toFixed(2))
        calculatedValues.outbound = parseFloat(calculatedValues.outbound.toFixed(2))
        setValues({...calculatedValues});
    }

    const orderTransactions = () => {
        let filtered = [];
        if (orderType == 0) {
            filtered = filteredTransactions.sort((a, b) => {
                if (a.value > b.value) return 1
                else if (a.value < b.value) return -1
                else return 0
            })
        } else {
            filtered = filteredTransactions.sort((a, b) => {
                if (a.value > b.value) return -1
                else if (a.value < b.value) return 1
                else return 0
            })
        }
        setFilteredTransactions(filtered);
        if (orderType == 1) {
            setOrderType(0);
        } else {
            setOrderType(orderType + 1);
        }

    }

    const orderButton = () => {
        if (orderType === 0) {
            return (
                <Icon.KeyboardArrowUp
                    style={{fontSize: 30, color: "var(--color-light-green)"}}/>
            )
        } else if (orderType === 1) {
            return (
                <Icon.KeyboardArrowDown
                    style={{fontSize: 30, color: "var(--color-light-green)"}}/>
            )
        } else {
            return (
                <Icon.FormatAlignJustify
                    style={{fontSize: 30, color: "var(--color-light-green)"}}/>
            )
        }
    }

    const setCategoryName = () => {
        Values.categoryOptions.forEach(category => {
            transactions.forEach(transaction => {
                if (category.value == transaction.category) {
                    transaction.categoryName = category.name;
                }
            })
        })
    }

    const renderItems = filteredTransactions.map(transaction => (
        <S.Item>
            <S.ItemContent>
                <S.DeleteButton type="button" onClick={() => {
                    removeProduct(transaction);
                    setFilteredTransactions(transactions);
                    calculateTransactionTotal();
                }}><Icon.Delete style={{fontSize: 30, color: "var(--color-dark-green)"}}/></S.DeleteButton>
                <S.ItemInformation>
                    <S.ItemDate>
                        {Moment(transaction.date).format('DD/MM/YYYY - HH:MM')}
                    </S.ItemDate>
                    <S.ItemTitle>
                        {transaction.title}
                    </S.ItemTitle>
                    <S.ItemCategory>
                        {transaction.categoryName}
                    </S.ItemCategory>
                </S.ItemInformation>
                <S.ItemDetails>
                    <S.ItemDetailsContent>
                        {(transaction.type == "ENT") ? (
                            <S.ItemType>
                                Entrada
                            </S.ItemType>
                        ) : (
                            <S.ItemType>
                                Saída
                            </S.ItemType>
                        )}
                        <S.ItemValue>
                            R${transaction.value}
                        </S.ItemValue>
                    </S.ItemDetailsContent>

                    <S.EditButton type="button" onClick={() => {
                        history.push(`/editar/${transaction.id}`)
                    }}><Icon.Edit className={"edit-icon"}
                    /></S.EditButton>

                </S.ItemDetails>
            </S.ItemContent>
        </S.Item>
    ));

    return (
        <S.Container>
            <GlobalStyle/>
            <Header onSearch={searchTransaction}/>
            <S.Content>
                <S.FilterContainer>
                    <S.FilterContent>
                        <S.FilterTitle>
                            Filtros
                        </S.FilterTitle>

                        <S.OrderContent>
                            Ordenar por valor:
                            <S.OrderButton type="button" onClick={orderTransactions}>
                                {orderButton()}
                            </S.OrderButton>
                        </S.OrderContent>

                        <S.CategoryContent>
                            <S.CategoryLabel>Categoria</S.CategoryLabel>
                            <Dropdown
                                options={Values.filterCategoryOptions}
                                onChange={(input) => filterTransactions(input, "CAT")}
                                name={"category"}
                                value={selectedCategory}
                            />
                        </S.CategoryContent>
                        <S.TypeContent>
                            <S.TypeLabel>Tipo</S.TypeLabel>
                            <Dropdown
                                options={Values.filterTypeOptions}
                                onChange={(input) => filterTransactions(input, "TYP")}
                                name={"type"}
                                value={selectedType}
                            />
                        </S.TypeContent>
                    </S.FilterContent>
                </S.FilterContainer>
                <S.ListContent>
                    {renderItems}
                    {filteredTransactions.length === 0 && <S.EmptyMessage>
                        Você não possui transações nessa categoria!
                        Para adicionar uma transação, clique no botão abaixo.
                    </S.EmptyMessage>}
                </S.ListContent>
                <S.TotalTransactionsContainer>
                    <S.TotalTransactionsContent>
                        <S.ValueLabel>ENTRADA</S.ValueLabel>
                        <S.InboundValue>R${values.inbound}</S.InboundValue>
                        <S.ValueLabel>SAÍDA</S.ValueLabel>
                        <S.OutboundValue>R${values.outbound}</S.OutboundValue>
                        <S.TotalLabel>TOTAL</S.TotalLabel>
                        <S.TotalValue>R${values.total}</S.TotalValue>
                    </S.TotalTransactionsContent>
                </S.TotalTransactionsContainer>
            </S.Content>
            <Toast/>
            <S.FloatButtonContent>
                <FloatButton/>
            </S.FloatButtonContent>
        </S.Container>

    )
}

export default Home;