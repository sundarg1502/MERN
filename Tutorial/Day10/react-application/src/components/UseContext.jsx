import React,{createContext,useContext} from 'react';

const MyContext = createContext()

export const useMyContext = () =>{
    return(
        useContext(MyContext)
    )
}

export const MyProvider=({children})=>{
    const message = "Message from Custome Hook"
    return (
        <MyContext.Provider value={message}>
            {children}
        </MyContext.Provider>
    )
}

// export default MyProvider