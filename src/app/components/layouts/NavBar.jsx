"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import styles from "./NavBar.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = ({ isVisible = true }) => {
    // isDarkMode state | setIsDarkMode function
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement; // Obtener el elemento HTML
        htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light"); // Cambiar el tema de Bootstrap
    }, [isDarkMode]); // Ejecutar el efecto cuando isDarkMode cambie

    const toggleTheme = () => {
        // Cambiar el tema
        setIsDarkMode(!isDarkMode); // Cambiar el estado de isDarkMode
    };
    const pathname = usePathname();

    if (pathname === "/login") return null;
    return (
        <div className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                {/* Navbar brand (Logo) */}
                <Link href="/index" className={`navbar-brand pe-sm-3 fw-bold fs-4 ${montserrat.className}`}>
                    finanzas
                </Link>

                {/* Theme switcher */}
                <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto">
                    <input
                        className="form-check-input text-primary"
                        type="checkbox"
                        id="theme-mode"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    <label className="form-check-label" htmlFor="theme-mode">
                        <i className={isDarkMode ? "ri-moon-line fs-lg" : "ri-sun-line fs-lg"}></i>
                    </label>
                </div>

                {/* Mobile menu toggler (Hamburger) */}
                <button
                    className="navbar-toggler ms-sm-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar collapse (Main navigation) */}
                <nav className={`collapse navbar-collapse ${montserrat.className}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${styles.linkCustom}`} aria-expanded="false">
                                Funcionalidades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${styles.linkCustom}`} aria-expanded="false">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="me-4">
                    <Link href="/login" className={styles.btn_login}>
                        Iniciar sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
