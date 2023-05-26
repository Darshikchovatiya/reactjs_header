import Car from "../../components/Class/Car";
import Logo from "../../components/Logo/Logo";
import Navlist2 from "../../components/Navlist/Navlist2";

function Header2(){
    
    let headers = {marginTop: 20};

    return (
        <header style={headers}>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Navlist2 />
                </div>
            </div>
            {/* <Car /> */}
        </header>
    )
}

export default Header2;