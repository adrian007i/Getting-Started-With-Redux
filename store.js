const {createStore} =  require('redux');
const reducer = require ("./reducer"); 
const store = createStore (reducer);

export default store;
