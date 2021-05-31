import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: hidden;
  background: linear-gradient(360deg, rgba(225, 229, 242, 1) 0%, rgba(30, 127, 100, 1) 52%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const EmptyMessage = styled.h1`
  color: var(--color-dark-green);
`

export const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ListContent = styled.div`
  overflow-y: scroll;
  -webkit-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  height: 90%;
  width: 50%;
  background: var(--color-grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  ::-webkit-scrollbar {
    height: 0;
    width: 0;
    background: #f4f4f4;
  }

  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }


`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-green);
  border-radius: 100px;
  height: 35px;
  width: 35px;
  position: relative;
  left: -5px;
  top: -5px;
  z-index: 5;


  :hover {
    -webkit-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    transition: box-shadow 1s;

  }
`

export const Item = styled.div`
  -webkit-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  box-shadow: -1px 14px 36px -20px rgba(0, 0, 0, 0.65);
  background-color: var(--color-light-green);
  border-radius: 50px;
  margin: 20px 0 15px 0;
  color: var(--color-white);
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  
`

export const ItemContent = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  justify-items: flex-start;
  grid-template-columns: 5% 50% 45%;
`


export const ItemInformation = styled.div` 
  margin-left: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
`

export const ItemTitle = styled.span`
  z-index: 5;
  width: 100%;
  word-wrap: break-word;
  margin: 5px 0 5px 0;
  font-size: 16px;
  text-transform: capitalize;
  color: var(--color-white);

  @media(max-width: 600px) {
    font-size: 12px;

  }
  
`

export const ItemCategory = styled.span`
  color: var(--color-white);
  opacity: 0.8;
  letter-spacing: 1px;
  font-weight: bold;

  @media(max-width: 600px) {
    font-size: 10px;
    letter-spacing: 0;

  }
`

export const ItemDate = styled.span`
  z-index: 5;
  font-size: 10px;
  font-weight: bold;
  color: var(--color-grey);

  @media(max-width: 600px) {
    font-size: 8px;

  }
`

export const ItemDetails = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
`
export const ItemDetailsContent = styled.div`
  margin-right: -10px;
  width: 90%; 
  padding-left: 10px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  height: 30px;  
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-dark-green);

  @media(max-width: 900px) {
    width: 100%;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px;
  }

  @media(max-width: 600px) {    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`


export const ItemType = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 20%;
  color: var(--color-light-green);
  font-weight: bold;
  width: 40%;

  @media(max-width: 900px) {
    font-size: 8px;
  }


`

export const ItemValue = styled.span`
  width: 60%;
  font-size: 12px;
  color: var(--color-light-green);

  @media(max-width: 900px) {
    font-size: 8px;
  }

`

export const EditButton = styled.button`
  float: right; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  background-color: var(--color-dark-green);

  :hover {
    -webkit-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    transition: box-shadow 1s;
  }
  
  .edit-icon{
    font-size: 30px;
    color: var(--color-light-green);
  }

  @media(max-width: 900px) {
    height: 30px;
    width: 0;
    
    .edit-icon {
      font-size: 20px;
    }
  }
`

export const FilterContainer = styled.div`
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  width: 20%;
  height: 300px;
  background-color: var(--color-grey);

  @media(max-width: 900px) {     
    label {
      font-size: 14px;
    }
  } 

  @media(max-width: 700px) {       
    label {
      font-size: 10px;
    }
  }

  @media(max-width: 500px) {
    label {
      font-size: 14px;
    }
  }
`

export const FilterContent = styled.div`
  padding-left: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width: 500px) {
    padding-left: 20px;
  }

  @media(max-width: 500px) {
    padding-left: 10px;
  }

`

export const OrderButton = styled.button`
  background-color: transparent;

  :hover {
    -webkit-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -1px 14px 36px -8px rgba(0, 0, 0, 0.65);
    transition: box-shadow 1s;
  }
`

export const CategoryContent = styled.div`
  margin: 20px 0 20px 0;
  width: 90%;

`

export const CategoryLabel = styled.label`
  font-size: 16px;
  color: var(--color-green);
  font-weight: bold;
`

export const TypeContent = styled.div`
  margin: 20px 0 20px 0;
  width: 90%;

`

export const TypeLabel = styled.label`
  font-size: 16px;
  color: var(--color-green);
  font-weight: bold;
`

export const TotalTransactionsContainer = styled.div`
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  width: 15%;
  height: 200px;
  background-color: var(--color-grey);  
`

export const TotalTransactionsContent = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width: 900px) {
    padding-left: 10px;
    span {
      font-size: 14px;
    }
    
    label {
      font-size: 14px;
    }
  }

  @media(max-width: 700px) {
    padding-left: 5px;
    span {
      font-size: 10px;
    }

    label {
      font-size: 10px;
    }
  }
`

export const ValueLabel = styled.label`
  margin-top: 10px;
  color: var(--color-green);
  font-size: 20px;
`

export const InboundValue = styled.span`
  color: var(--color-light-green);
  font-weight: bold;
`

export const OutboundValue = styled.span`
  color: var(--color-red);
  font-weight: bold;
`

export const TotalLabel = styled.label`
  margin-top: 10px;
  color: var(--color-green);
  font-size: 20px;
  font-weight: bold;
`

export const TotalValue = styled.span`
  color: var(--color-dark-green);
  font-weight: bold;
`


export const FloatButtonContent = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`


