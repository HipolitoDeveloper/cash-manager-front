import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(360deg, rgba(225, 229, 242, 1) 0%, rgba(30, 127, 100, 1) 52%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FormTitle = styled.h1`
  margin-bottom: 20px;
  color: var(--color-grey);
  font-weight: bold;
  text-transform: uppercase;
`

export const FormContainer = styled.form`
  background: var(--color-grey);
  -webkit-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 200px;
  width: 50%;
  display: flex;
  flex-direction: column
`

export const DropdownContent = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const CategoryContent = styled.div`
  margin: 20px 0 20px 0;
  width: 100px;

`

export const CategoryLabel = styled.label`
  font-size: 16px;
  color: var(--color-dark-green);
  font-weight: bold;
`

export const TypeContent = styled.div`
  margin: 20px 0 20px 0;
  width: 100px;

`

export const TypeLabel = styled.label`
  font-size: 16px;
  color: var(--color-dark-green);
  font-weight: bold;
`

export const ButtonContent = styled.div`
  margin: 0 auto;

`

export const SubmitButton = styled.button`
  margin-top: 30px;
  height: 60px;
  width: 110%;
  background-color: var(--color-grey);
  color: var(--color-green);
  border: 3px solid var(--color-green);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;

  :hover {
    background-color: var(--color-green);
    color: var(--color-white);
    border: 3px solid var(--color-grey);
    transition: all 0.5s;
  }
`

export const FloatButtonContent = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`


