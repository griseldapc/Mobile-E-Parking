<div className="home" style={{ display: "flex", flexDirection: "column", justifyContent: "end", gap: "15vh", marginTop: "0vh", position: "relative" }}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", width: "100%", height: "auto" }}>
        <video ref={videoRef} style={{ width: "100%", height: "auto", zIndex: -1 }} autoPlay playsInline></video>
        <Link to="/masuk" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <img src="../../assets/qr.png" alt="QR Code" style={{ width: "100%", maxWidth: "100%", height: "auto" }}></img>
        </Link>
    </div>

    <Link to="/manual">
        <button style={{ backgroundColor: "#269544", borderRadius: "10px", width: "100%", height: "39px", fontSize: "12px", fontWeight: "bold", border: "none", color: "white" }}>
            <img src="../../assets/Add Circle.svg" alt="Add Circle" style={{marginRight: "5px"}}></img>
            TAMBAH MANUAL</button>
    </Link>
</div>
