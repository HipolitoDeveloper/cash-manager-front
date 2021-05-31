import {toast} from "react-toastify";

export const storage = transactions => {
    localStorage.setItem('transactions', JSON.stringify(transactions.length > 0 ? transactions : []));

}

export const TransactionReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":

            if (!state.transactions.find(transaction => transaction.id === action.payload.id)) {
                state.transactions.push({
                    ...action.payload,
                })
                storage(state.transactions)
            }
            toast.success("Transação adicionada com sucesso!");
            return {
                ...state,
                transactions: [...state.transactions]
            }
        case "REMOVE_TRANSACTION":
            state.transactions.splice(state.transactions.indexOf(action.payload), 1);
            storage(state.transactions)
            toast.success("Transação removida com sucesso!");

            return {
                ...state,
                transactions: [...state.transactions]
            }
        case "SEARCH_TRANSACTION":
            let searchedTransactions = state.transactions
            const regex = new RegExp(`${action.payload.trim()}`, 'i');
            searchedTransactions = state.transactions.filter((transaction) => transaction.title.search(regex) >= 0);

            storage(state.transactions)
            return {
                ...state,
                transactions: [searchedTransactions]
            }
        case "EDIT_TRANSACTION":
            let updatedTransaction = action.payload
            let transactions = state.transactions;

            transactions.forEach((transaction, index) => {
                if (transaction.id === updatedTransaction.id) {
                    transactions.splice(index, 1)
                    transactions.push(updatedTransaction)
                }
            })
            toast.success("Transação atualizada com sucesso!");
            storage(transactions)

            return {
                ...state,
                transactions: [...transactions]
            }
        case "CLEAR_ALL":
            return {
                transactions: [],
                ...storage([]),
            }
        default:
            return state

    }
}