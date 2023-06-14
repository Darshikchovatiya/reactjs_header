import React from 'react'

function Uncontrolled() {

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    }

  return (
    <React.Fragment>
        <div>
            <h1>Uncontrolled Com.</h1>
            <form onSubmit={handlesubmit}>
                <label>Name : </label>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </React.Fragment>
  )
}

export default Uncontrolled