"use client";
import { Montserrat, Inter } from "next/font/google";
import styles from "./login.module.css";
import Link from "next/link";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";

export default function Login() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // O un componente de carga, o un mensaje
    }
    // ${styles.container}
    return (
        <section className={`vh-100 ${inter.className}`}>
            <div className="row h-100">
                <div className={`col-lg-6 col-12 ${styles.bgBlack} d-flex flex-column align-items-center justify-content-center`}>
                    <div className={`container-md ${styles.container}`}>
                        <h1 className={`fw-bold  ${styles.textWhite} pb-3`}>Iniciar Sesión</h1>
                        <p className={`pb-3 mb-3 mb-lg-4 ${styles.textWhite}`}>
                            No posees cuenta?
                            <Link href="#" className={`ms-2 ${styles.textPrimary}`}>
                                Registrate aquí!
                            </Link>
                        </p>
                        <form action="">
                            <div className="pb-3 mb-3">
                                <div className="position-relative">
                                    <i
                                        className={`ri-mail-line fs-lg position-absolute top-50 start-0 translate-middle-y ms-3 ${styles.textGrey}`}></i>
                                    <input
                                        className={`${styles.formControlCustom} form-control form-control-lg ps-5`}
                                        type="email"
                                        placeholder="Email address"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="pb-3 mb-3">
                                <div className="position-relative">
                                    <i
                                        className={`ri-lock-line fs-lg position-absolute top-50 start-0 translate-middle-y ms-3 ${styles.textGrey}`}></i>
                                    <input
                                        className={`${styles.formControlCustom} form-control form-control-lg ps-5`}
                                        type="password"
                                        placeholder="Password"
                                        required=""
                                    />
                                </div>
                            </div>
                            <button type="submit" className={`${styles.btnLogin} btn btn-lg btn-primary w-100 mb-4`}>
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className={`col-lg-6 d-none d-lg-block bg-secondary d-flex align-items-center justify-content-center p-0 ${styles.imageContainer}`}>
                    <Image
                        src="/img/finanza_bg.jpg"
                        alt="Login"
                        width={1920}
                        height={1080}
                        className={`${styles.fullWidthHeight} img-fluid`}
                    />
                </div>
            </div>
        </section>
    );
}
