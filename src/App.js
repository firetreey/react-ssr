import React, { useState } from 'react'

function App(props) {
    const [count, setCount] = useState(0)
    return <div>
        <h1>hello world!</h1>
        <h2>{count}</h2>
        <button onClick={() => {
            setCount(count+1)
        }}>增加</button>
        <button onClick={() => {
            setCount(count-1)
        }}>减少</button>
    </div>
}

export default <App></App>