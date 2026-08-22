function Task() {
function called() {
    alert("function is called");
}
    return (
        <>
            <h1>Anshika aggarwal Todos</h1>
            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww" className="w-[300px] h-[200px] object-cover"></img>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={called}>Click Me</button>
        </>
    )
}
export default Task;