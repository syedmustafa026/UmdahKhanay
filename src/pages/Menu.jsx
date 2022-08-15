import React from "react";
import { Header, MenuContainer } from "../components";
import '../styles/style.css'

export default function Menu() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <div className="main">
                <MenuContainer />
            </div>
        </>

    )

}