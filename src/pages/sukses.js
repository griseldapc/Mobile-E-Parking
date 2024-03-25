import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function Sukses() {
    return (
        <section className="mx-auto" style={{ backgroundColor: "#269544", maxWidth: "376px", height: "100vh" }}>
            <Header />
            <div>
                <div style={{ boxShadow: "0px 2px 4px rgba(201, 201, 201, 0.2)", paddingBottom: "10px", position: "fixed", width: "100%" }}>
                    <h1 style={{ fontSize: "16px", fontWeight: "600", width: "100%", textAlign: "center", color: "white" }}>Scan Tiket</h1>
                </div>
                <div className="home">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "70vh", textAlign: "center", bottom: "20px" }}>
                        <img src="../../assets/sukses.svg" className="mx-auto" alt="Success"></img>
                        <p style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>Data tiket telah berhasil disimpan
                        </p>
                    </div>
                    <div>
                        <Link to="/">
                            <button style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "89%",
                                height: "39px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                border: "none",
                                color: "#269544",
                                position: "fixed",
                                transform: "translateX(-50%)",
                                left: "50%",
                                bottom: "20px"
                            }}>KEMBALI KE BERANDA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}