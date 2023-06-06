import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import Container from "../../components/Container/Container";
import Ifelse from "../../components/Container/Ifelse";
import Hocbr from "../../components/Hoc/Hocbr";
import Hocg from "../../components/Hoc/Hocg";
import Useeffect from "../../components/Useeffect/Useeffect";

function Header(){

    const [chng, SetChng] = useState(true);

    const change = () =>{
        SetChng(false);
    }

    return (
        <header>
            {/* <Hocg cpm={<Container/>} Ife={<Ifelse/>} />
            <Hocbr cpm={<Container/>} /> */}

            {/* <Cards /> */}
            {
                chng ? <Useeffect /> : <Cards />
            }
            <button onClick={change}>Change</button>
            {/* <Cards /> */}
        </header>
    )
}

export default Header;