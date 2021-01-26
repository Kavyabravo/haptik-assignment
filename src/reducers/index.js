const initialState = {
    "loading":false,
    "userList":[],
    "friendList":[],
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
        case "SORT_MY_FRIEND_LIST":
            let friendList = []
            let unFavList = []
            state.friendList.map(friend=>{
                if(friend.isFav)
                {
                    friendList.push(friend)
                }
                else{
                    unFavList.push(friend)
                }
            })
            friendList= friendList.concat(unFavList)
            return{
                ...state,
                "loading":false,
                friendList:friendList
            }
        case "LOAD_FRIEND_LIST_SUCCESS":
            return{
                ...state,
                "loading":false,
                friendList:action.friendList
            }
        case "UPDATE_MY_FRIEND_LIST":
            return{
                ...state,
                "loading":false,
                friendList:action.newFriendList
            }
        case "REMOVE_FROM_MY_FRIEND_LIST":
            let newFriendList = state.friendList.filter(friend =>{
                return (friend.id!==action.id)?true:false
            })
            return{
                ...state,
                "loading":false,
                friendList:newFriendList
            }
        case "ADD_TO_MY_FRIEND_LIST":
            let isFriendAdded = false
            let newMyFriendList = state.friendList
            newMyFriendList.map(friend =>{
                if(friend.id===action.newFriend.id)
                {
                isFriendAdded = true
                }
                return friend
            })
            if(!isFriendAdded)
            {
                newMyFriendList.push(action.newFriend)
            }
            return{
                ...state,
                "loading":false,
                friendList:newMyFriendList
            }
        case "UPDATE_FAVOURITES":
            let myFriendList = state.friendList.map(friend=>{
                if(friend.id===action.id){
                 friend.isFav = !friend.isFav
                } 
                return friend;
               })
            return{
                ...state,
                "loading":false,
                friendList:myFriendList
            }
    
        default:
            return state;
    }
}

export default userReducer