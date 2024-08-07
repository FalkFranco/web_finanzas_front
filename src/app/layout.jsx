// src/app/layout.jsx
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Inter, Montserrat } from "next/font/google";

import NavBar from "./components/layouts/NavBar"; // Asegúrate de que la ruta sea correcta

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";

    const showNavBar = pathname !== "/login";
    return (
        <html lang="en" data-bs-theme="light">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Finanzas</title>
            </head>
            <body className={inter.className}>
                <NavBar isVisible={showNavBar} />
                {children}
            </body>
        </html>
    );
}
