import styled from 'styled-components';


export const Container = styled.div`

  height: 100px;
  width: 100%;
  background: var(--color-green);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-green);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  margin-left: 20px;
  cursor: pointer;
`

export const InputContent = styled.div`

  display: flex;
  width: 30%;
  border-bottom: 2px solid var(--color-dark-green);
  margin-right: 200px;
  height: 40px;

  :hover {
    border-bottom: 5px solid var(--color-dark-green);
    transition: all 0.5s;
  }
`

export const SearchInput = styled.input`
  height: 50px;
  width: 100%;
  background-color: transparent;
  padding-left: 10px;


  ::placeholder {
    color: var(--color-dark-green);
  }

`