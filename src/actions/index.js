export function fetchingData(){
    return {
        type:"FETCHING_DATA",
}
}

export function loadUserSuccess(userList){
    return {
        type:"LOAD_USERS_SUCCESS",
        userList: userList
}
}

export function loadingError(error){
    return {
        type:"LOADING_ERROR",
        error: error
}
}

export function loadFriendListSuccess(friendList){
    return {
        type:"LOAD_FRIEND_LIST_SUCCESS",
        friendList: friendList
}
}
