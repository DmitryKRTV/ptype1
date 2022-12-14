import React from "react";
import {Social} from "./h2-Social/Social";
import {Data} from "./h1-data/Data";
import {ScrollDown} from "./h3-scrollDown/ScrollDown";
import styles from "./home.module.scss"

export const Home = () => {
    return (
        <div className={`home section-home`} id="home">
            {/*<Particle/>*/}
            {/*<ParticleCollision/>*/}
            <div className="container">
                <div className={`${styles.home__content} grid`}>
                    <Social/>
                    <div className={`${styles.home__img}`}></div>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </div>
    );
};

