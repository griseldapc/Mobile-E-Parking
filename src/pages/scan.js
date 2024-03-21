import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Scan() {
    const videoRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
            }
        };

        startCamera();

        return () => {
            stopCamera();
        };
    }, []);

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    return (
        <section className="mx-auto" style={{ maxWidth: "376px" }}>
            <Navbar />
            <div style={{ paddingTop: "12vh", position: "relative", overflow: "hidden" }}>
                <div className="hid d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "15px" }}>
                    <Link to="/">
                        <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }} alt="Arrow"></img>
                    </Link>
                    <h1 style={{ fontSize: "16px", fontWeight: "600", width: "35%", textAlign: "center", marginBottom: 0 }}>
                        <Link to="/keluar" style={{textDecoration: "none", color: "black"}}>
                         Scan Tiket
                        </Link>
                       
                        </h1>
                </div>
                <div className="home" style={{ display: "flex", flexDirection: "column", justifyContent: "end", gap: "15vh", marginTop: "0vh" }}>
                    <video ref={videoRef} style={{ width: "100%", height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -1 }} autoPlay playsInline></video>
                    <Link to="/masuk">
                        <img src="../../assets/qr.png" alt="QR Code" style={{ width: "100%", maxWidth: "100%", height: "auto" }}></img>
                    </Link>

                    <Link to="/manual">
                        <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }}>
                            <img src="../../assets/Add Circle.svg" alt="Add Circle"></img>
                            TAMBAH MANUAL</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
