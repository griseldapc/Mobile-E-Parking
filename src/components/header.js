import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header (){
    return(
        <section className="px-4 py-3 d-flex justify-content-between align-items-center" style={{backgroundColor: "#269544"}}>
            <h1 style={{fontSize: "15px", color: "white"}}>14:42</h1>
            <div className="d-flex justify-content-end gap-1">
                <img src="../../assets/signal.svg"></img>
                <img src="../../assets/wef.svg"></img>
                <img src="../../assets/bat.svg"></img>
            </div>
        </section>
    )
}