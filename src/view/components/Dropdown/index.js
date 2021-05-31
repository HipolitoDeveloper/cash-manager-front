import * as S from './style'
import PropTypes from "prop-types";

const Dropdown = ({options, onChange, name, value}) => {

    const renderItem = options.map(option => (
        <S.Item value={option.value}>
            {option.name}
        </S.Item>
    ));

    return (
        <S.Container
            name={name}
            onChange={onChange}
            required
            value={value}
        >
            {renderItem}
        </S.Container>
    )
}

export default Dropdown;

Dropdown.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string

};

Dropdown.defaultProps = {
    options: [],
    onChange: () => {},
    name: "",
    value: ""


};