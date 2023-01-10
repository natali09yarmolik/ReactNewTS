import React, {ChangeEvent, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export function DificultCountingExampel1(){
    const [a, setA]=useState(5)
    const [b, setB]=useState(5)

    let resultA=1
    let resultB=1
    resultA=useMemo(()=>{
        let resultCopy=1
        for(let i=1; i<=a; i++)
        {
            let fakeValue=0
            while(fakeValue<100000)
            {
                fakeValue++
                const fake=Math.random()
            }
            resultCopy=resultCopy*i
        }
        return resultCopy
    }, [a])

    for(let i=1; i<=b; i++)
    {
        resultB=resultB*i
    }
    return <>
        <input value={a}
               onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b}
               onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
            Result for b: {resultB}
        </div>
    </>
}

export function UsersSecret(props: { users: Array<string> }) {
    console.log('users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export function HalpsToReactMemo() {
    console.log('HalpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Misha', 'Sasha'])
   const newArray=useMemo(()=>{
     return users.filter((u=>u.toLowerCase().indexOf('a')>-1))
   }, [users])

    const addUsers=()=>{
        const newUsers=[...users, 'Sveta'+new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() =>addUsers()}>add user</button>
       {counter}
        <Users users={newArray}/>
    </>
}

export function LikeUseCallBack() {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Css', 'HTML'])
   /* const newBooks=useMemo(()=>{
        return books.filter((u=>u.toLowerCase().indexOf('a')>-1))
    }, [books])*/

    const addBooks=()=>{
        const newBooks=[...books, 'JS'+new Date().getTime()]
        setBooks(newBooks)
    }
 const memoAddBook=useMemo(()=>{return ()=>{
     const newBooks=[...books, 'JS'+new Date().getTime()]
     setBooks(newBooks)}},[books])

    const memoAddBook2=useCallback(()=>{
        console.log(books)
        const newBooks=[...books, 'JS'+new Date().getTime()]
        setBooks(newBooks)},[books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBooks={memoAddBook2}/>
    </>
}
export function BooksSecret(props: { addBooks:()=>void }) {
    console.log('books')
    return <div>
        <button onClick={() =>props.addBooks()}>add books</button>
        {/*{props.books.map((u, i) => <div key={i}>{u}</div>)}*/}</div>
}
const Book = React.memo(BooksSecret)
