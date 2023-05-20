import Li from "../Li/Li";

function List2(){
    let ulstyle = {display: "flex", listStyle: "none", justifyContent : "flex-end"};
    let listyle = {padding: 10};
    let astyle = {textDecoration: "none", color: "black", fontSize: 16};
    let namelist = ["Home", "About", "Service", "Contact"];

    return (
        // <ul style={ulstyle}>
        //     <Li tye={listyle} ast={astyle} name= "Home" />
        //     <Li tye={listyle} ast={astyle} name= "About"  />
        //     <Li tye={listyle} ast={astyle} name= "Service"  />
        //     <Li tye={listyle} ast={astyle} name= "Contact"  />

        // </ul>

        namelist.map((val)=>{
            <ul style={ulstyle}>
                <Li tye={listyle} ast={astyle} name={val}  />
            </ul>
        })
    )
}

export default List2;