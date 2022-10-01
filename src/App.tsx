import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Services} from "./components/Services/Services";
import {Qualification} from "./components/Qualification/Qualification";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";
import {SkillsBar} from "./components/Skills/SkillsBar/SkillsBar";
import {Work} from "./components/Work/Work";


function App() {
    return (
        <>
            <Header/>

            <main className="main">
                <Home/>
                <About/>
                <SkillsBar/>
                <Services/>
                <Qualification/>
                <Work/>
                {/*<Testimonials/>*/}
                <Contact/>
            </main>

            <Footer/>
            <ScrollUp/>
        </>

    );
}

export default App;
