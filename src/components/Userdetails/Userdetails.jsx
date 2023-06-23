import React, { useEffect, useState } from 'react'

// const showdata = () => {
//     let view = JSON.parse(localStorage.getItem("u_data"));
//     if (view != null) {
//         return view;
//     }
//     return [];
// }

const show_se_data = () =>{
    let se_view = sessionStorage.getItem("se_data");
    if(se_view != null){
        return JSON.parse(se_view);
    }
    return [];
    
}

function Userdetails() {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        age: '',
        city: '',
        phone: '',
    })

    const [show, setShow] = useState(show_se_data());

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({ ...data, [name]: value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        // let name = data;
        setShow([...show, data]);
        setData({
            fname: '',
            lname: '',
            email: '',
            age: '',
            city: '',
            phone: '',
        })
    }

    useEffect(()=>{
        sessionStorage.setItem("se_data",JSON.stringify(show));
    },[show])

    // useEffect(() => {
    //     localStorage.setItem("u_data", JSON.stringify(show));
    // }, [show])

    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>User Details</h1>
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
                <div style={{ marginTop: 20 }}>
                    {
                        show.length >= 1 ?

                            show.map((s) => {
                                return (
                                    <>
                                        <div>
                                            <h2>
                                                {
                                                    s.fname + " " + s.lname
                                                }
                                            </h2>
                                            <h2>
                                                {
                                                    s.email
                                                }
                                            </h2>
                                            <h2>
                                                {
                                                    s.age
                                                }
                                            </h2>
                                            <h2>
                                                {
                                                    s.city
                                                }
                                            </h2>
                                            <h2>
                                                {
                                                    s.phone
                                                }
                                            </h2>
                                        </div>
                                    </>

                                )

                            })
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Userdetails