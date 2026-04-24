export default function Footer() {
    return (
        <footer className="border-t border-[#1a2235] bg-[#06080d]">

            <div
                className="w-full flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0"
                style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "3rem", paddingBottom: "3rem" }}
            >

                {/* COLUMNA IZQUIERDA */}
                <div className="flex flex-col gap-3 flex-1 items-center lg:items-start">
                    <h3 className="text-white font-semibold text-base">¿Hablamos?</h3>
                    <p className="text-gray-400 text-sm leading-snug max-w-[320px] lg:max-w-[220px] text-center lg:text-left">
                        Estoy abierto a colaborar en proyectos desafiantes que generen impacto a través de los datos.
                    </p>
                    <button className="flex items-center justify-center gap-2 border border-gray-600 px-3 h-[36px] rounded-md text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-[#0f1623] transition-all duration-200 w-[140px] mt-1">
                        ¡Escríbeme!
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>

                {/* DIVISOR - solo desktop */}
                <div className="hidden lg:block w-px h-16 bg-[#1a2235] mx-10 shrink-0" />

                {/* COLUMNA CENTRO */}
                <div className="flex flex-col gap-4 lg:w-[260px] shrink-0 items-center">
                    <p className="text-white font-semibold text-base">Conecta conmigo</p>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-md bg-[#0f1623] border border-[#1a2235] flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm6.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.57c0-2.04-.04-4.67-2.85-4.67-2.85 0-3.29 2.22-3.29 4.52V24H7V8.5z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md bg-[#0f1623] border border-[#1a2235] flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.005 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md bg-[#0f1623] border border-[#1a2235] flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* DIVISOR - solo desktop */}
                <div className="hidden lg:block w-px h-16 bg-[#1a2235] mx-10 shrink-0" />

                {/* COLUMNA DERECHA */}
                <div className="flex-1 flex items-center justify-center lg:justify-end">
                    <p className="text-gray-400 text-sm text-center lg:text-right">
                        © {new Date().getFullYear()} Juan David. Todos los derechos reservados.
                    </p>
                </div>

            </div>

        </footer>
    );
}