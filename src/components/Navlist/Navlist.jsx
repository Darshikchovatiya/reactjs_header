import List from "../List/List";
import Logo from "../Logo/Logo";

function Navlist(){
    return(
        <div className="divw">
            <Logo />
            <nav className="w">
                <List />
            </nav>
        </div>
    )
}

export default Navlist;