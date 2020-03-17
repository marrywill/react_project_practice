import React, { useContext } from 'react';
import { UserDispatch } from './App'


const User = React.memo(function ({ user }) {
    const { id, active, username, email } = user
    const dispatch = useContext(UserDispatch)
    return (
        <div>
            <b onClick={() => dispatch({ type: 'TOGGLE_USER', id })} style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}>{username}</b> : {email}
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    )
})

function Userlist({ users }) {
    return (
        <div>
            {users.map(user => <User user={user} key={user.id} />)}
        </div>
    );
}

export default React.memo(Userlist);