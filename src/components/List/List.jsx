function List(){

    let ulstyle = {display: "flex", listStyle: "none", justifyContent : "flex-end"};
    let listyle = {padding: 10};
    let astyle = {textDecoration: "none", color: "black", fontSize: 16};

    return(
            <ul style={ulstyle}>
                <li style={listyle}>
                    <a href="#" style={astyle}>Home</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>About</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Service</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Contact</a>
                </li>
            </ul>
    )
}

export default List;