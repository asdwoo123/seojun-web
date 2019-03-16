import { combineReducers, createStore } from 'redux';
import company from './company';
import contact from './contact';
import main from './main';
import product from './product';
import partner from './partner';
import market from './market';


const reducer = combineReducers({
    company,
    contact,
    main,
    product,
    partner,
    market
});

export default createStore(
    reducer
);