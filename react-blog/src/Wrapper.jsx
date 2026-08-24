function Wrapper({children,color}) {
    return (
        <div style={{color : color, border:"5px solid black", width : "250px", padding : "25px", margin: "20px"}}>
            {children}
        </div>
    )
}
export default Wrapper;