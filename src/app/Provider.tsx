import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import {ProviderProps} from '@types'




const Provider = ({children}: ProviderProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
export default Provider