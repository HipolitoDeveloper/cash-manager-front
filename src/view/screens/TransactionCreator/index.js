import * as S from "./style"
import {useContext, useEffect, useState} from "react";
import {TransactionContext} from "../../../contexts/TransactionContext";
import {FloatButton} from "../../components/FloatButton";
import GlobalStyle from "../../../global";
import * as Icon from '@material-ui/icons';
import Dropdown from "../../components/Dropdown";
import * as Values from "../../../utils/dropdown_values"
import Input from "../../components/Input";
import Toast from "../../components/Toast";
import {useParams} from 'react-router-dom';


const TransactionCreator = () => {
    const {id} = useParams();
    const {addTransaction, editTransaction, transactions} = useContext(TransactionContext);
    const [transaction, setTransaction] = useState({
        title: '',
        value: '',
        category: "",
        type: ""
    });

    useEffect(() => {
        if (id) {
            const transactionToEdit = transactions.find(transaction => transaction.id == id);
            setTransaction({...transactionToEdit})

        }
    }, [id, transactions])

    const handleChange = (input) => {
        const {value} = input.target;
        setTransaction({
            ...transaction,
            [input.target.name]: value
        })
    }

    const cleanForm = () => {
        setTransaction({
            title: '',
            value: '',
            category: "",
            type: ""
        })
    }

    const identifySaveMethod = (event) => {
        if (id == null) {
            addTransaction(transaction, event);
            cleanForm();
        } else {
            editTransaction(transaction, event)
        }

    }

    return (
        <S.Container>
            <GlobalStyle/>
            <S.FormTitle>
                Adicione sua última transação
            </S.FormTitle>
            <S.FormContainer onSubmit={identifySaveMethod}
                             autocomplete="off">
                <Input
                    label={"Título"}
                    name={"title"}
                    type={"text"}
                    placeholder={"Qual o título da sua transação?"}
                    value={transaction.title}
                    onChange={handleChange}
                    required={true}
                />

                <S.DropdownContent>
                    <S.CategoryContent>
                        <S.CategoryLabel>Categoria</S.CategoryLabel>
                        <Dropdown
                            options={Values.categoryOptions}
                            onChange={handleChange}
                            name={"category"}
                            value={transaction.category}

                        />
                    </S.CategoryContent>
                    <S.TypeContent>
                        <S.TypeLabel>Tipo</S.TypeLabel>
                        <Dropdown
                            options={Values.typeOptions}
                            onChange={handleChange}
                            name={"type"}
                            value={transaction.type}
                        />
                    </S.TypeContent>
                </S.DropdownContent>
                <Input
                    label={"Valor"}
                    name={"value"}
                    type={"number"}
                    placeholder={"Qual o valor da sua transação?"}
                    value={transaction.value}
                    onChange={handleChange}
                    required={true}
                />

                <S.ButtonContent>
                    <S.SubmitButton type="submit">Salvar transação<Icon.Edit style={{fontSize: 20}}/></S.SubmitButton>
                </S.ButtonContent>
            </S.FormContainer>
            <Toast/>
            <S.FloatButtonContent>
                <FloatButton/>
            </S.FloatButtonContent>
        </S.Container>

    )
}

export default TransactionCreator;