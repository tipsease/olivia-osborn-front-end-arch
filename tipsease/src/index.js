import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import SearchEmployeeView from './views/PatronLogin/SearchEmployeeView';
import EmployeePageView from "./views/PatronLogin/EmployeePageView";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {

    render() {
        return (
            <div className="App">
            <Route 
                path="/login"
                component={Login}
            />
            <Route 
                path="/register"
                component={Registration}
            />
            <Route
                exact path="/"
                component={SearchEmployeeView}
            />
            <Route 
                path="/server:id" 
                component={EmployeePageView}
            />
          </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router> 
    </Provider>,
    document.getElementById('root'));

 