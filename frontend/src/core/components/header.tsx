import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PixyLogo from "/public/pixy.webp";
import {
    useState,
    useEffect,
    type ReactNode,
    type JSX
} from "react";

interface NavProps {
    href: string;
    children: ReactNode;
}

export default function Header(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <header className="w-full bg-secondary backdrop-blur-sm shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 -ml-2 text-white hover:bg-white/10 rounded-md transition-colors"
                            aria-label="Abrir menu"
                        >
                            <GiHamburgerMenu size={28} />
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={PixyLogo} alt="Pixy Logo" className="h-10 w-auto md:h-12" />
                        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Pixy
                        </span>
                        <nav className="hidden md:flex ml-10 space-x-8">
                            <NavLink href="/">INÍCIO</NavLink>
                            <NavLink href="/setup">MEU MÊS</NavLink>
                            <NavLink href="/progress">MEU PROGRESSO</NavLink>
                            <NavLink href="/about">SOBRE</NavLink>
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <button 
                            className="bg-gray-700/50 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-white"
                            aria-label="Perfil do usuário"
                        >
                            <a href="/profile">
                                <FaUser size={18} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div 
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div 
                className={`fixed h-screen inset-y-0 left-0 z-50 w-64 bg-gray-100 border-r border-black shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-4 h-20 bg-secondary shrink-0 border-b">
                    <span className="text-xl font-bold text-white">MENU</span>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-4">
                    <MobileNavLink href="/">INÍCIO</MobileNavLink>
                    <MobileNavLink href="/about">SOBRE</MobileNavLink>
                </nav>

                <div className="p-4 border-t border-gray-300 text-center text-sm text-gray-500 shrink-0">
                    &copy; 2026 NovoCódigo LTDA.
                </div>
            </div>
        </header>
    );
}

function NavLink({ href, children }: NavProps) {
    return (
        <a 
            href={href} 
            className="text-white/80 hover:text-white font-medium text-sm transition-colors relative group py-2"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
}

function MobileNavLink({ href, children }: NavProps) {
    return (
        <a 
            href={href} 
            className="block px-4 py-3 text-gray-800 hover:border-b hover:text-black rounded-lg font-semibold transition-colors border border-transparent hover:border-gray-300"
        >
            {children}
        </a>
    );
}
