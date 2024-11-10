import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setState] = useState(0)
    const [count2, setState2] = useState(0)
    useEffect(() => {
        console.log("Mounting....")
        console.log("Updating....", count," count 2 ====>>> ",count2)
        return () => {
            console.log("Cleaning ==>> " + count," count 2 ====>>> ", count2);
        }
    },[count ,count2]);
    
    return (
        <div>
            <button onClick={() => { setState(count + 1) }}>Increase second Counter</button>
            <p>1st COunter {count} </p>

            <button onClick={() => { setState2(count2 + 1) }}>Increase second Counter</button>
            <p>Secound COunter {count2} </p>
        </div>
    )
}


export default Counter
