import React, {useState} from 'react'

export default {
    title: 'React.memo demo',
}

function Counter(props: { count: number }) {
    return <div>{props.count}</div>
}

function UsersSecret(props: { users: Array<string> }) {
    console.log('users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export function Example1() {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Misha', 'Sasha'])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}