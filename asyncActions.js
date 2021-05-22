import redux from 'redux';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = ReduxThunk.default;
const initialState = {
  loading: true,
  users: [],
  error: ''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading : true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading : false,
        users:action.payload
      }
      
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading : false,
        error:action.payload
      }
    default: return state;
  }
}

// fetchUsers - actionCreator
// Thunk allows to return a function instead of an action object
// Return function should have to be pure, it can have axios call 
// This function takes dispatch as an argument

const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUserRequest);
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const users = response.data.map(user => user.id);
      dispatch(fetchUsersSuccess(users));
    })
    .catch(error =>{
      dispatch(fetchUsersFailure(error));
    })
  }
}
const store = createStore(reducer, applyMiddleware(reduxThunk));
store.subscribe(()=> {console.log(store.getState())});

store.dispatch(fetchUsers());