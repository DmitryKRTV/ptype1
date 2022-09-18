import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Services} from "./components/Services/Services";
import {Qualification} from "./components/Qualification/Qualification";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";
import {SkillsAlternative} from "./components/SkillsAlternative/Skills";

function App() {
    return (
        <>
            <Header/>

            <main className="main">
                <Home/>
                <About/>
                <SkillsAlternative/>
                <Services/>
                <Qualification/>
                {/*<Testimonials/>*/}
                <Contact/>
            </main>

            <Footer/>
            <ScrollUp/>
        </>

    );
}

export default App;
