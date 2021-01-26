const initialState = {
    "loading":false,
    "userList":[{}],
    "friendList":[{}],
    "error": ""
}

const userReducer=(state=initialState, action)=>{
    switch (action.type) {
        case "FETCHING_DATA":
            return{
                ...state,
                "loading":true
            }

        case "LOAD_USERS_SUCCESS":       
        return{
            ...state,
            "loading":false,
            userList:action.userList
        }

        case "LOADING_ERROR":       
        return{
            ...state,
            "loading":false,
            error:action.error
        }

        case "LOAD_FRIEND_LIST_SUCCESS":       
        return{
            ...state,
            "loading":false,
            friendList:action.friendList
        }
    
        default:
            return state;
    }
}

export default userReducer