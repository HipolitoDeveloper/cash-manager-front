import * as S from "./style";
import PropTypes from 'prop-types';


const Input = ({label, name, placeholder, type, value, onChange, required}) => {
    return (
        <S.Container>
            <S.Label htmlFor='input'>{label}</S.Label>
            <S.Input
                id='input'
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </S.Container>
    )
}

export default Input;

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    // value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool
};

Input.defaultProps = {
    label: '',
    name: '',
    placeholder: '',
    type: '',
    value: '',
    onChange: () => {
    },
    required: true
};