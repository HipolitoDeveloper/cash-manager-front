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
  width: 30%;
  height: 30%;
  margin-left: 30px;
  cursor: pointer;

  @media(max-width: 600px) {
    font-size: 10px;
    letter-spacing: 0;

  }

  @media(max-width: 450px) {  
    width: 20%;
    height: 20%;

  }
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

  @media(max-width: 600px) {
    width: 200px;
    margin-right: 150px;
  }

  @media(max-width: 400px) {
    width: 100px;
    margin-right: 120px;


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