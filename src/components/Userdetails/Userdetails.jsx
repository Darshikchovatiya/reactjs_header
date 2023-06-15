import React, { useState } from 'react'

function Userdetails() {

    const [data, setData] = useState({
        fname : '',
        lname : '',
        email : '',
        age : '',
        city : '',
        phone : '',
    })

    const [show, setShow] = useState(null);

    const handlesubmit = (e) =>{
        e.preventDefault();
        setShow(data);
    }

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name] : value
        })
    }

    console.log(show);
    return (
        <>
            <div className="container">
                <h1 style={{textAlign: "center"}}>User Details</h1>
                <form className="row g-3" onSubmit={handlesubmit}>
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name='fname' value={data.fname} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='lname' value={data.lname} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" name='age' value={data.age} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" name='city' value={data.city} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Contact No</label>
                        <input type="number" className="form-control" name='phone' value={data.phone} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
                <div style={{marginTop: 20}}>
                    {
                        show != null 
                        ?
                        <div>
                            <h2>
                                {
                                    show.fname + " " + show.lname 
                                }
                            </h2>
                            <h2>
                                {
                                    show.email
                                }
                            </h2>
                            <h2>
                                {
                                    show.age
                                }
                            </h2>
                            <h2>
                                {
                                    show.city
                                }
                            </h2>
                            <h2>
                                {
                                    show.phone
                                }
                            </h2>
                        </div>
                        :""
                    }
                </div>
            </div>
        </>
    )
}

export default Userdetails