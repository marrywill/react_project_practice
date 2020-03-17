import React, { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './Userlist';

function countActiveUsers(users) {
    return users.filter(user => user.active).length
}

export const UserDispatch = createContext(null)

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'velopert@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'hanryang',
            email: 'hanryang@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'sona',
            email: 'sona@naver.com',
            active: false
        },
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                users: state.users.concat(action.user)
            }
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.id)
            }
        case 'TOGGLE_USER':
            return {
                users: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user)
            }
        default:
            return state
        // throw new Error('Unhandled action!')
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { users } = state
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>{count}명이 활성상태입니다.</div>
        </UserDispatch.Provider>
    );
}

export default App;