import Cards from "../../components/Cards/Cards";
import Container from "../../components/Container/Container";
import Ifelse from "../../components/Container/Ifelse";
import Hocbr from "../../components/Hoc/Hocbr";
import Hocg from "../../components/Hoc/Hocg";

function Header(){

    return (
        <header>
            <Hocg cpm={<Container/>} Ife={<Ifelse/>} />
            <Hocbr cpm={<Container/>} />

            <Cards />
        </header>
    )
}

export default Header;