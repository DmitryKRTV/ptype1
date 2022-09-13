import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Services} from "./components/Services/Services";
import {Qualification} from "./components/Qualification/Qualification";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
            </main>
            <About/>
            <Skills/>
            <Services/>
            <Qualification/>
        </>

    );
}

export default App;
