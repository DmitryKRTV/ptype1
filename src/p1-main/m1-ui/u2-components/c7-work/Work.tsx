import React from "react";
import {Works} from "./w1-works/Works";

export const Work = () => {
    return (
        <section className={"work section"} id={"portfolio"}>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Works</span>

            <Works/>

        </section>
    );
};

