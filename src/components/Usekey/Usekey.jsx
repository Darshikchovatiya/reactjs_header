import React, { useState } from 'react'

function Usekey() {

    const data = [1,2,3,4,5,6]
    const data1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]

    const [list,setList] = useState(data);
    const [hone,setHone] = useState(data1);

    const adddata = () =>{
        let newdata = [7,8,9,10,...list]
        setList(newdata)
    }

    const adddata1 = () =>{
        let newdata1 = [...hone,"n","o","p","q","r","s","t","u","v","w","x","y","z"]
        setHone(newdata1)
    }

  return (
    <div>
        <ul>
            {
                list.map((d)=>{
                    return(
                        <li key={d.toString()}>{d}</li>
                    )
                })
            }
        </ul>
        <button onClick={()=> adddata()}>Click</button>
        <div>
            {
                hone.map((h)=>{
                    return(
                        <h2 key={h.toString()} style={{textTransform: "uppercase"}}>{h}</h2>
                    )
                })
            }
        </div>
        <button onClick={()=> adddata1()}>Click</button>
    </div>
  )
}

export default Usekey