const Userr = ({ name, age, id, email }) => {
    return (
        <div style={{
            border : "1px solid green",
            padding : "10px",
            margin : "10px",
            width : "400px",
            borderRadius : "10px"
        }}>
            <h3>Name : <span style={{color : 'red'}}>{name}</span></h3>
            <h3>Age : <span style={{color : 'red'}}>{age}</span></h3>
            <h3>Email : <span style={{color : 'red'}}>{email}</span></h3>
            <h3>Id : {id}</h3>
        </div>
    )
}
export default Userr;