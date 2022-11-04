import React from "react";
import "./App.css";
import {Header} from "../u2-components/c1-header/Header";
import {Home} from "../u2-components/c2-home/Home";
import {About} from "../u2-components/c3-about/About";
import {Services} from "../u2-components/c5-services/Services";
import {Qualification} from "../u2-components/c6-qualification/Qualification";
import {Contact} from "../u2-components/Contact/Contact";
import {Footer} from "../u2-components/Footer/Footer";
import {ScrollUp} from "../u2-components/ScrollUp/ScrollUp";
import {SkillsBar} from "../u2-components/c4-skills/SkillsBar";
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
