import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.cars = (
            name = ["BMW", "Audi", "Ferrari"]
            // names = [
            //     {
            //         name : "BMW",
            //         model : 2010,
            //         price : "29.5L"
            //     },
            //     {
            //         name : "Audi",
            //         model : 2018,
            //         price : "32L"
            //     },
            //     {
            //         name : "Ferrari",
            //         model : 2015,
            //         price : "25.7L"
            //     }
            // ]
        )
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1 style={{marginBottom: 10}}>Welcome to Car Com.</h1>
                {
                    this.cars.map((name)=>{
                        return(
                            <h3 style={{color: "green"}}>{name}</h3>
                        )
                    })
                }
            </div>
        )
    }
}

export default Car;