import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name : ["BMW", "Audi", "Ferrari"],
            names : [
                {
                    brands : "BMW",
                    model : 2010,
                    price : "29.5L"
                },
                {
                    brands : "Audi",
                    model : 2018,
                    price : "32L"
                },
                {
                    brands : "Ferrari",
                    model : 2015,
                    price : "25.7L"
                }
            ]
        }
    }

    time = () =>{
        setTimeout(() => {
            this.setState({
                count : this.state.count + 1
            })
        }, 2000);
    }

    componentWillMount(){
        console.log("Component Will Mount");
    }
    componentDidMount(){
        console.log("Component Did Mount");
        this.time();
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        console.log("Hi i'm render");
        return(
            <div>
                <div style={{textAlign: "center"}}>
                    <h1 style={{marginBottom: 10}}>Welcome to Car Com.</h1>
                    <p>{this.state.count}</p>
                    {
                        this.state.name.map((name)=>{
                            return(
                                <h3 style={{color: "green"}}>{name}</h3>
                            )
                        })
                    }
                </div>

                <div style={{textAlign: "center"}}>
                    <h1 style={{marginBottom: 10,marginTop: 10}}>Cars</h1>
                    {
                        this.state.names.map((val)=>{
                            return(
                                <div>
                                    <h3>{val.brands}</h3>
                                    <p>Price : {val.price}</p>
                                    <p>Model : {val.model}</p>
                                    <br/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Car;