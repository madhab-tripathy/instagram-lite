import React, { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider = ({children})=>{
    let [token,setToken] = useState();
    return(
        <TokenContext.Provider value={{token,setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenProvider;