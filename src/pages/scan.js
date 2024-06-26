import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <section className="mx-auto" style={{ maxWidth: "376px", height: "100vh" }}>
            <Navbar />
            <div style={{ paddingTop: "50px", position: "relative", overflow: "hidden" }}>
                <div className="hid d-flex justify-content-start align-items-center" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", paddingBottom: "15px", paddingTop: "15px", zIndex: 1, backgroundColor: "white" }}>
                    <Link to="/">
                        <img src="../../assets/Arrow.svg" style={{ marginLeft: "25px" }} alt="Arrow"></img>
                    </Link>
                    <h1 style={{ fontSize: "16px", fontWeight: "600", width: "35%", textAlign: "center", marginBottom: 0 }}>
                        <Link to="/keluar" style={{ textDecoration: "none", color: "black" }}>
                            Scan Tiket
                        </Link>

                    </h1>
                </div>
                <div className="home my-auto" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "0vh", position: "relative", height: "78vh" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", width: "100%", height: "auto" }}>
                        <video ref={videoRef} style={{ width: "100%", height: "auto", zIndex: -1 }} autoPlay playsInline></video>
                        <Link to="/masuk" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <img src="../../assets/qr.png" alt="QR Code" style={{ width: "200px", height: "auto" }}></img>
                        </Link>
                    </div>
                    <Link to="/manual">
                        <button style={{
                            backgroundColor: "#269544",
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
                            bottom: "20px",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            gap: "10px",
                            border: "1px solid white"
                        }}>
                            <img src="../../assets/Add Circle.svg"></img>
                            <p style={{marginBottom: 0}}>
                                TAMBAH MANUAL
                            </p>
                            </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
