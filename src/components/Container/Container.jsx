import Logo from "../Logo/Logo";
import Navlist from "../Navlist/Navlist";

function Container(){

    return(
        <div className="container">
                <div className="row">
                    <Logo />
                    <Navlist />
                </div>
        </div>
    )
}

export default Container;