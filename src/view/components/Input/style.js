import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
`
export const Input = styled.input`
  height: 20px;
  width: 100%;
  border-bottom: 1px solid var(--color-green);
  color: var(--color-green);
  background-color: transparent;

  ::placeholder {
    color: var(--color-green)
  }

  :hover {
    border-bottom: 2px solid var(--color-dark-green);

  }
`

export const Label = styled.label`
  font-size: 16px;
  color: var(--color-dark);
  font-weight: bold;
`