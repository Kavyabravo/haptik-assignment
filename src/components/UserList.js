import React from 'react';

function User(props) {
    return (
        <React.Fragment>
          {props.userList.map(user => {
              return <div className={`row user-list ${props.newFriend?.id===user.id?"selected":""}`}
              key={`${user.id}-li-user`} onClick={()=>props.handleSelectFriend(user)}>
                      {user.name}
                     </div>
          })}
          
      </React.Fragment>
      )
} 
export default User;