import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative inset-x-0 top-0 z-50 py-6 bg-transparent">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img className="w-12" src="logo.svg" alt="Logo Enroque" />
              <div className="inline-flex text-lg font-semibold text-gray-900">
                Enroque Bienes Raíces
              </div>
            </a>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 lg:hidden bg-gray-800/60 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          <div
            className={`flex ${
              isOpen
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 translate-y-10"
            } lg:visible lg:opacity-100 lg:translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:bg-transparent border-x border-x-gray-100 lg:border-x-0`}
          >
            <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 text-lg text-gray-700 w-full lg:justify-center lg:items-center">
              {["Inicio", "Nosotros", "Propiedades", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 lg:border-0 px-6 lg:px-0">
              <a
                href="#"
                className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full bg-blue-600 border-transparent hover:border-[#172554] relative overflow-hidden duration-300 ease-linear"
              >
                <span className="relative z-10 text-white">Iniciar Sesión</span>
              </a>
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden outline-none w-7 h-auto flex flex-col relative"
            >
              <span className="w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
              <span className="w-6 mt-1 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
              <span className="w-6 mt-1 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
