import React from "react";
import "./App.css";
import {Header} from "../u2-components/Header/Header";
import {Home} from "../u2-components/Home/Home";
import {About} from "../u2-components/c2-about/About";
import {Services} from "../u2-components/Services/Services";
import {Qualification} from "../u2-components/Qualification/Qualification";
import {Contact} from "../u2-components/Contact/Contact";
import {Footer} from "../u2-components/Footer/Footer";
import {ScrollUp} from "../u2-components/ScrollUp/ScrollUp";
import {SkillsBar} from "../u2-components/Skills/SkillsBar/SkillsBar";
import {Work} from "../u2-components/Work/Work";


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
