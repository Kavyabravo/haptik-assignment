function User(props) {
    return (
        <div className="row">
          {props.userList.map(user => {
              return <li className="user-list"
              key={`${user.id}-li-user`} onClick={()=>props.addFriend(user)}>
                      {user.name}
                     </li>
          })}
          
      </div>
      )
} 
export default User;