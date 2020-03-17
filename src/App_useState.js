import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import Wrapper from './Wrapper'
import CreateUser from './CreateUser';
import Userlist from './Userlist';

function countActiveUsers(users) {
  console.log('활성 요소 세는중')
  return users.filter(user => user.active).length;
}

function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      console.log(date)
    }
  }, [date])
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const { username, email } = inputs

  const [users, setUsers] = useState([
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
  ])
  const nextId = useRef(4)

  const onChange = useCallback(e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs])

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users => users.concat(user))
    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1
  }, [username, email])

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id))
  }, [])

  const onToggle = useCallback(id => {
    setUsers(users => users.map(user => user.id === id ? { ...user, active: !user.active } : user))
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isRequired />
      <Hello color="pink" /> */}
      {/* <Counter /> */}
      {/* <InputSample /> */}
      <h2>{date}</h2>
      <CreateUser onCreate={onCreate} onChange={onChange} username={username} email={email} />
      <Userlist users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </Wrapper>
  );
}

export default App;
