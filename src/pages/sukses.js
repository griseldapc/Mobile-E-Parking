import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function Sukses() {
    return (
        <section className="mx-auto" style={{ backgroundColor: "#269544", maxHeight: "105vh", maxWidth: "376px" }}>
            <Header />
            <div>
                <div className="home" style={{ boxShadow: "0px 2px 4px rgba(201, 201, 201, 0.2)" }}>
                    <h1 style={{ fontSize: "16px", fontWeight: "600", width: "100%", textAlign: "center", color: "white" }}>Scan Tiket</h1>
                </div>

                <div className="home" style={{ display: "flex", flexDirection: "column", justifyContent: "end", height: "78vh", gap: "30%" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img src="../../assets/sukses.svg" className="mx-auto" alt="Success"></img>
                        <p style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>Data tiket telah berhasil disimpan
                        </p>
                    </div>
                    <div>
                        <Link to="/">
                            <button style={{ backgroundColor: "white", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "#269544" }}>KEMBALI KE BERANDA</button>
                        </Link>
                    </div>
                </div>
            </div>



        </section>
    )
}