import actionTypes from '../actions/actionTypes';

const initialState = {
   auth: "",
   error: "",
   userID: ""
}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.AUTH_USER:
            return {
                ...state,
                auth: action.data,
                userID: action.userID
            }
        case actionTypes.ERROR:
            return {
                ...state,
                error: action.data
            }
            
        default:
            return state;
    } 
}


export default reducerTemplate