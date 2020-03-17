import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
    const dispatch = useContext(UserDispatch)
    const [form, onChange, reset] = useInputs({
        username: '',
        email: ''
    })
    const nextId = useRef(4)
    const { username, email } = form
    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        nextId.current += 1
        reset()
    }
    return (
        <div>
            <input name="username" placeholder="이름" value={username} onChange={onChange} />
            <input name="email" placeholder="이메일" value={email} onChange={onChange} />
            <button onClick={onCreate}>생성</button>
        </div>
    );
}

export default React.memo(CreateUser);