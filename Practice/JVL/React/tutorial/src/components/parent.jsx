function Child(){
    return <h2>Child form the external Component</h2>
}

function Parent(){
    return (
        <>
            <h2>Parent from the Exteraal Component</h2>
            <Child/>
        </>
    )
}

export default Parent                                                                                            