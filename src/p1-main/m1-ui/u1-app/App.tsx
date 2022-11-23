import React from "react";
import "./App.css";
import {Header} from "../u2-components/c1-header/Header";
import {Home} from "../u2-components/c2-home/Home";
import {About} from "../u2-components/c3-about/About";
import {Services} from "../u2-components/c5-services/Services";
import {Qualification} from "../u2-components/c6-qualification/Qualification";
import {Contact} from "../u2-components/c8-contact/Contact";
import {Footer} from "../u2-components/c9-footer/Footer";
import {ScrollUp} from "../../../p3-common/c2-scrollUp/ScrollUp";
import {SkillsBar} from "../u2-components/c4-skills/SkillsBar";
import {Work} from "../u2-components/c7-work/Work";


function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <SkillsBar/>
                <div id={"services"}>   {/* Avoiding an issue of disappearing active link on Qualification component */}
                    <Services/>
                    <Qualification/>
                </div>
                <Work/>
                {/*<Testimonials/>*/} {/* Created, but temporary unused component */}
                <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
        </>

    );
}

export default App;
