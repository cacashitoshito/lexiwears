import React, { createContext } from "react";
import AllProduct_Data from "../Components/Assets/AllProduct_Data";




export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{

const contextValue = {AllProduct_Data};
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}


export default ShopContextProvider;