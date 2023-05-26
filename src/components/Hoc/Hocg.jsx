function Hocg({cpm,Ife}){

    let a = 15;
    return(
        <div style={{backgroundColor: "green", width: "100%"}}>
            {
                a > 10 ? cpm : Ife
            }
        </div>
    )
}

export default Hocg;