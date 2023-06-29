import React, { useEffect, useState } from 'react'

const showdata = () => {
    let view = JSON.parse(localStorage.getItem("u_data"));
    if (view != null) {
        return view;
    }
    return [];
}

const showdelete = () => {
    let view = JSON.parse(localStorage.getItem("us_delete"));
    if (view != null) {
        return view;
    }
    return [];
}

// const show_se_data = () =>{
//     let se_view = sessionStorage.getItem("se_data");
//     if(se_view != null){
//         return JSON.parse(se_view);
//     }
//     return [];

// }

function Userdetails() {

    const [data, setData] = useState({

        fname: '',
        lname: '',
        email: '',
        age: '',
        city: '',
        phone: '',
    })

    const [show, setShow] = useState(showdata());
    const [updateData, setUpdateData] = useState(false);
    const [indexD, setIndexD] = useState(null);
    const [u_delete, setU_delete] = useState(showdelete());


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({ ...data, [name]: value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if (updateData) {
            let newup = [...show];
            newup[indexD] = data;

            setShow(newup);
            setUpdateData(false);
        }
        else {
            let uid = Math.floor(Math.random() * 1000);
            let name = ({ id: uid, ...data });
            // console.log("name",name);
            setShow([...show, name]);
        }
        setData({
            fname: '',
            lname: '',
            email: '',
            age: '',
            city: '',
            phone: '',
        });
    }

    const handleUpdate = (id, index) => {
        // console.log("clicjd",id);
        let m_data = showdata();
        // console.log("m_data",m_data);
        let single_data = m_data.filter((sd) => {
            // console.log("sd",sd);
            return sd.id == id;
        })
        console.log("single_data", single_data);
        setData(single_data[0]);
        setUpdateData(true);
        setIndexD(index);
    }

    const handleDelete = (id) => {
        let m_data = showdata();

        let d_delete = m_data.filter((de) => {
            if (de.id == id) {
                setU_delete([...u_delete, de]);
            }
            else {

                return de.id != id;
            }
        })
        setShow(d_delete);
    }

        // useEffect(()=>{
        //     sessionStorage.setItem("se_data",JSON.stringify(show));
        // },[show])

        useEffect(() => {
            localStorage.setItem("u_data", JSON.stringify(show));
            // console.log("use effect");
        }, [show])

    useEffect(() => {
        localStorage.setItem("us_delete", JSON.stringify(u_delete));
    }, [u_delete])

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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div className='u_cards'>
                    {
                        show.length >= 1 ?
                            show.map((s, index) => {
                                return (
                                    <>
                                        <div className='u_card'>
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
                                                    "Age : " + s.age
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
                                            <div>
                                                <button className='btn btn-warning me-3' onClick={(e) => { handleUpdate(s.id, index) }}>Update</button>
                                                <button className='btn btn-danger' onClick={(e) => { handleDelete(s.id) }}>Delete</button>
                                            </div>
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