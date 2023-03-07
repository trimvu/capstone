
import actionTypes from './actionTypes';
import axios from 'axios'

export const signUp = (formData, cb) => async dispatch=>{

    try{

        let response = await axios.post('/register', formData)

        // console.log(response);

        dispatch({
            type: actionTypes.AUTH_USER,
            data: response.data.token
        })

        cb()

        localStorage.setItem('token', response.data.token)

    }
    catch(error){

        console.log(error);

        dispatch({
            type: actionTypes.ERROR,
            data: error
        })
    }

    
}

export const signIn = (formData, cb) => async dispatch => {

    try{

        let response = await axios.post('/login', formData)

        // console.log("action user login", response)

        dispatch({
            type: actionTypes.AUTH_USER,
            data: response.data.token, 
            userID: response.data.userID,
            email: response.data.email
        })

        cb()

        localStorage.setItem('token', response.data.token)
    }
    catch(error){

        dispatch({
            type: actionTypes.ERROR,
            data: error
        })
    }
}


export const signOut = (cb) => dispatch => {

    dispatch({
        type: actionTypes.AUTH_USER,
        data: ""
    })

    localStorage.removeItem('token')

    cb(); 

}



export const checkToken = () => async dispatch => {

    if(localStorage.token){

        try{

            let response = await axios.get('/protected', {

                headers: {
                    'authorization': localStorage.token
                }
            })

            if(response.data.isValid){
                dispatch({
                    type: actionTypes.AUTH_USER,
                    data: localStorage.token
                })
            }
        }
        catch(error){
            dispatch({
                type: actionTypes.ERROR,
                data: error
            })
        }
    }

}

