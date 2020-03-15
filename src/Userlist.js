import React from 'react';

function User({ user, onToggle, onRemove }) {
    const { id, username, email, active } = user
    return (
        <div>
            <b onClick={() => onToggle(id)} style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}>{username}</b> : {email}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function Userlist({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)}
        </div>
    );
}

export default React.memo(Userlist);