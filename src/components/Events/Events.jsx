import React, { useState } from 'react'
import './Events.css'

function Events() {

    const data = [
        {
            name: "Darshik",
            email: "darshik@gmail.com",
            phone: "9934567238",
            hobbies: ["Traveling", "Reading", "Music"]
        },
        {
            name: "Dev",
            email: "dev@gmail.com",
            phone: "9038217562",
            hobbies: ["Writing", "Reading"]
        },
        {
            name: "Smit",
            email: "smit@gmail.com",
            phone: "9232516483",
            hobbies: ["Traveling", "Singing"]
        },
        {
            name: "Om",
            email: "om@gmail.com",
            phone: "6345329756",
            hobbies: ["Traveling", "Eating", "Music"]
        }
    ]

    const [profile, setProfile] = useState(null)
    //     {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         hobbies: ['']
    //     }
    // )

    const showData = (n) => {
        // console.log(n,"Done");
        setProfile(n);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <ul className='list-unstyled d-flex'>
                        {
                            data.map((val) => {
                                return (
                                    <li className='p-3'>
                                        <button onClick={() => showData(val)}>{val.name}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {
                            profile != null
                            ?
                            <div className="profile">
                                <h2>{profile.name}</h2>
                                <p>
                                    <a href="">{profile.email}</a>
                                </p>
                                <p>{profile.phone}</p>
                                <p>
                                    {profile.hobbies}
                                </p>
                            </div>
                            :
                            <h2>Data Not Found</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events