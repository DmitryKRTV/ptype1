import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";

function App() {
    return (
        <div className="App">
            <>
                <Header/>
                <main className="main">
                    <Home/>
                </main>
                <About/>
            </>
        </div>
    );
}

export default App;
