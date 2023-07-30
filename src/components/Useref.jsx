import React, { useEffect, useRef } from 'react'

function Useref() {
    const reference = useRef()
    /* useref is hook 
    useref is use to select element from html 
    then we can do any manipulation we want.
    stateName.current give element*/
    useEffect(() => {
        console.log(reference.current)
        reference.current.style.backgroundColor = 'red'
    }, [])
    return (
        <div>
            <h1 ref={reference}>Hello world</h1>
        </div>
    )
}

export default Useref
