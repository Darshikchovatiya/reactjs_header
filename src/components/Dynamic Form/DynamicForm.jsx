import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function DynamicForm() {

    const [inputList, setInputlist] = useState([{
        fname: '',
        lname: '',
        email: '',
        age: ''
    }])

    const handleAdd = () =>{
        setInputlist([...inputList,{
            fname: '',
            lname: '',
            email: '',
            age: ''
        }])
    }

    const handleRemove = (e, id) =>{

        let newList = inputList.filter((input, index)=>{
            return id != index;
        })
        setInputlist(newList);
    }

    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>User Details</h1>
                <form className="row g-3">
                    {
                        inputList.map((input, index) => {
                            return (
                                <>
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" name='fname' />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" name='lname' />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name='email' />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Age</label>
                                        <input type="number" className="form-control" name='age' />
                                    </div>
                                    <div className="col-md-4">
                                        <Button style={{ marginRight: 10 }}>Submit</Button>
                                        <Button className='btn-danger' onClick={(e)=>{handleRemove(e,index)}} disabled={inputList.length <= 1}>Remove</Button>
                                    </div>
                                </>
                            )
                        })
                    }

                </form>
                <div className="col-12 mt-3">
                    <button type="button" className="btn btn-primary" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </>
    )
}

export default DynamicForm