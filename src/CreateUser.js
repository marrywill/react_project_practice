import React from 'react';

function CreateUser({ username, email, onCreate, onChange }) {
    return (
        <div>
            <input name="username" placeholder="이름" value={username} onChange={onChange} />
            <input name="email" placeholder="이메일" value={email} onChange={onChange} />
            <button onClick={onCreate}>생성</button>
        </div>
    );
}

export default React.memo(CreateUser);