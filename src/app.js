import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense( { description: "water bill", amount: 9500} ));
store.dispatch(addExpense( { description: "power bill", amount: 5500} ));
store.dispatch(addExpense( { description: "rent", amount: 105500, createdAt: 2002} ));
store.dispatch(addExpense( { description: "phone", amount: 7500, createdAt: 4400} ));
store.dispatch(addExpense( { description: "dark lord payoff", amount: 35500, createdAt: 1000} ));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(store.getState()); 
//console.log(visibleExpenses); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));