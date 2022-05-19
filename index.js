const store = require ("./store"); 


// adding a bug to the store
store.dispatch({
    action: "ADD_BUG",
    payload :{
        description: "Bug1"
    }
});

// removing the first bug
store.dispatch({
    action: "REMOVE_BUG",
    payload: {
        id: 2
    }
})

// subscribe gets executed everytime the state of the store gets updated
store.subscribe(()=>{
    console.log("state changed"+ store.getState() );
})
 