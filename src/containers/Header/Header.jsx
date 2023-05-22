import Logo from "../../components/Logo/Logo";
import Navlist from "../../components/Navlist/Navlist";

function Header(){

    return (
        <header>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Navlist />
                </div>
            </div>
        </header>
    )
}

export default Header;