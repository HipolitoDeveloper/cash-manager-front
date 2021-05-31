import Routes from './routes/routes';
import TransactionContextProvider from "./contexts/TransactionContext";

function App() {
    return (
        <TransactionContextProvider>
            <Routes/>
        </TransactionContextProvider>
    )
}

export default App;
