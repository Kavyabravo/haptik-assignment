import axios from 'axios'
import * as actions from '../actions/index'

export function getUsers(){
return(dispatch)=>{
    dispatch(actions.fetchingData())
    return axios.get("https://677e3dd09c78b64fb4f96470e151fb65.m.pipedream.net").then((response)=>{
        dispatch(actions.loadUserSuccess(response.data))
    }).catch(error=>dispatch(actions.loadingError(error)))
}
}

export function getFriendList(){
    return(dispatch)=>{
        dispatch(actions.fetchingData())
        return axios.get("https://a2719c61d8f79ebe34dbe0b3f77ee856.m.pipedream.net").then((response)=>{
            dispatch(actions.loadFriendListSuccess(response.data)).then(dispatch(actions.sortMyFriendList()))
        }).catch(error=>dispatch(actions.loadingError(error)))
    }
    }