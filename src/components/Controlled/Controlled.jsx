import React from 'react'
import { useState } from 'react'

function Controlled() {

    const [inputvalue, setInput] = useState('');

    const handlechange = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        setInput('');
    }


  return (
    <React.Fragment>
        <div>
            <h1>Controlled Com.</h1>
            <form onSubmit={handlesubmit}>
                <label>Name : </label>
                <input type="text" name="fname" value={inputvalue} onChange={handlechange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        <h2>
            {
                inputvalue
            }
        </h2>
    </React.Fragment>
  )
}

export default Controlled