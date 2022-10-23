import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./p1-main/m1-ui/u1-app/App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from "./p1-main/m2-bll/redux/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
