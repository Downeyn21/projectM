function WelcomePage() {

    function EnterHandle(e) {
        e.preventDefault()
        console.log('enter chatroom')
    }

    return ( 
        <>
            <div className="welcomeContainer">
                <h1>Welcome to Chat Room</h1>
                <h3>Please choose a name for yourself</h3>
                <form onSubmit={EnterHandle} className="nameFormContianer" >
                    <input type="text" placeholder="Sick Ass Name" />
                    <button type="submit">Enter ChatRoom</button>
                </form>    
            </div>
        </>
    );
}

export default WelcomePage;