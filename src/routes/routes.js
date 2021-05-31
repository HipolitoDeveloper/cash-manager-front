import Home from '../view/screens/Home'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TransactionCreator from "../view/screens/TransactionCreator";


const Routes = () => {


    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/criador" component={TransactionCreator}/>
                <Route exact path="/editar/:id" component={TransactionCreator}/>
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;
