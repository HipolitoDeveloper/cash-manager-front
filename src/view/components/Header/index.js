import GlobalStyle from "../../../global";
import * as S from "./style"
import Logo from '../../../img/logo_sensedata.png'
import {useState} from "react";
import * as Icon from "@material-ui/icons";
import PropTypes from "prop-types";

const Header = ({onSearch}) => {
    const [transaction, setTransaction] = useState("")

    const handleChange = (input) => {
        const {value} = input.target;
        setTransaction(value)
        onSearch(value);
    }

    return (
        <S.Container>
            <GlobalStyle/>
            <S.LogoImg src={Logo}/>
            <S.Content>
                <S.InputContent>
                    <S.SearchInput
                        value={transaction}
                        placeholder={"Digite aqui o título da sua transação"}
                        onChange={handleChange}/>
                    <Icon.Search style={{fontSize: 30, color: "var(--color-dark-green)"}}/>
                </S.InputContent>
            </S.Content>
        </S.Container>
    )
}

export default Header;

Header.propTypes = {
    onSearch: PropTypes.func,
};

Header.defaultProps = {
    onSearch: () => {
    },
};