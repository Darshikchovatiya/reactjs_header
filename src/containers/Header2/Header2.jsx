import Navlist2 from "../../components/Navlist/Navlist2";

function Header2(){
    
    let headers = {marginTop: 20};

    return (
        <header style={headers}>
            <div className="container">
                <div className="row">
                    <Navlist2 />
                </div>
            </div>
        </header>
    )
}

export default Header2;