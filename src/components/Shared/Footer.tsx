import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {

    const socialIcons = [
        { name: "facebook", icon: <FaFacebookF /> },
        { name: "instagram", icon: <FaInstagram /> },
        { name: "tiktok", icon: <FaTiktok /> },
    ];

    return (
        <div className="flex items-end w-full bg-white">
            <footer className="w-full text-gray-700 bg-gray-100 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                        <img className="w-12" src="public/logo.svg" alt="Logo Enroque" />
                        </a>
                        <p className="mt-2 text-sm text-gray-500">La experiencia que te lleva a casa</p>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start gap-x-3">
                                {socialIcons.map(({ name, icon }) => (
                                    <a key={name} className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl">
                                        {icon}
                                    </a>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left justify-end">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Enroque</h2>
                            <nav className="mb-10 list-none">
                                {['Inicio', 'Nosotros', 'Propiedades', 'Blog'].map((item) => (
                                    <li key={item} className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">{item}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Transparencia</h2>
                            <nav className="mb-10 list-none">
                                {['Aviso de Privacidad', 'Contrato de Prestación de Servicios'].map((item) => (
                                    <li key={item} className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">{item}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contacto</h2>
                            <nav className="mb-10 list-none">
                                {['Solicitar Asesoría', 'Dirección'].map((item) => (
                                    <li key={item} className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">{item}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
