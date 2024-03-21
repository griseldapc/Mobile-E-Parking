// import { Box, CssBaseline, Fab } from "@mui/material";
// import QrScanner from "qr-scanner";
// import React, { useState, useEffect } from "react";

// let stopScan = false;
// let hasilScan = "";

// export default function Qrcode() {
//     const [btnScan, setBtnScan] = useState(true);

//     useEffect(() => {
//         scanNow(true);
//     }, []);

//     const scanNow = async (isScan) => {
//         setBtnScan(isScan);
//         if (isScan) stopScan = true;
//         if (!isScan) return;
//         stopScan = false;
//         await new Promise((r) => setTimeout(r, 100));
//         const videoElement = document.getElementById("scanView");
//         const scanner = new QrScanner(
//             videoElement,
//             (result) => {
//                 hasilScan = result.data;
//                 setBtnScan(true);
//                 stopScan = true;
//             },
//             {
//                 onDecodeError: (error) => {
//                     console.error(error);
//                 },
//                 maxScansPerSecond: 1,
//                 highlightScanRegion: true,
//                 highlightCodeOutline: true,
//                 returnDetailedScanResult: true,
//             }
//         );
//         await scanner.start();
//         while (stopScan === false) await new Promise((r) => setTimeout(r, 100));
//         scanner.stop();
//         scanner.destroy();
//     };

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <Box
//                 sx={{
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}
//             >
//                 <video
//                     id="scanView"
//                     style={{
//                         width: "80vw",
//                         maxWidth: "500px",
//                         height: "auto",
//                         borderStyle: "dotted",
//                     }}
//                 ></video>
//             </Box>
//         </React.Fragment>
//     )
// }


