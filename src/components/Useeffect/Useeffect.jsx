import React, { useEffect, useState } from 'react'

function Useeffect() {

    useEffect(() => {
        if(count >= 1){
            console.log("Use Effcet");
            document.title = `Notification ${count}`
        }

        return () =>{
            console.log("Use effect is remove");
        }
    })

    const [count, SetCount] = useState(0);
    const inc = () =>{
        SetCount(count + 1);
    }


    console.log("Out side of use effcet");
  return (
    <div>
        <h1>I'm Use Effect Com.</h1>
        <p>
            {
                count
            }
        </p>
        <button onClick={inc}>Click</button>
    </div>
  )
}

export default Useeffect