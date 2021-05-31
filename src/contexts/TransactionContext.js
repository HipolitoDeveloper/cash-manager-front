import React, {createContext, useReducer} from 'react';
import {TransactionReducer} from './TransactionReducer';
import * as Values from "../utils/dropdown_values";

export const TransactionContext = createContext();

const storage = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : [

];
const initialState = { transactions : storage, };

const TransactionContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialState)

    const addTransaction = (payload, event) => {
        event.preventDefault();
        payload.date = new Date();
        payload.id = Math.random();
        payload.value = parseFloat(payload.value);
        if(payload.category === "") {
            payload.category = Values.categoryOptions[0].value
        }
        if(payload.type === "") {
            payload.type = Values.typeOptions[0].value
        }

        dispatch({type: 'ADD_TRANSACTION', payload})
    }

    const searchTransaction = payload => {
        dispatch({type: 'SEARCH_TRANSACTION', payload})
    }

    const editTransaction = (payload, event) => {
        event.preventDefault();
        payload.date = new Date();
        payload.value = parseFloat(payload.value);
        dispatch({type: 'EDIT_TRANSACTION', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_TRANSACTION', payload})
    }

    const clearTransaction= () => {
        dispatch({type: 'CLEAR_ALL'})
    }


    const contextValues = {
        addTransaction,
        searchTransaction,
        removeProduct,
        clearTransaction,
        editTransaction,
        ...state
    }

    return (
        <TransactionContext.Provider value={contextValues} >
            { children }
        </TransactionContext.Provider>
    );
}

export default TransactionContextProvider;
