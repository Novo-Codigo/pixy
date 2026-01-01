import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import PixyLogo from "/public/pixy.webp";
import { type JSX, type ReactNode } from "react";

interface FooterLinkProps {
    href: string;
    children: ReactNode;
}

interface SocialIconProps {
    href: string;
    icon: ReactNode;
    label: string;
}

export default function Footer(): JSX.Element {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={PixyLogo} alt="Pixy Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-bold tracking-tight">Pixy</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Seu aumigo financeiro!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Navegação</h3>
                        <ul className="space-y-4">
                            <li><FooterLink href="/">Início</FooterLink></li>
                            <li><FooterLink href="/about">Sobre Nós</FooterLink></li>
                            <li><FooterLink href="/services">Serviços</FooterLink></li>
                            <li><FooterLink href="/contact">Contato</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><FooterLink href="/privacy">Política de Privacidade</FooterLink></li>
                            <li><FooterLink href="/terms">Termos de Uso</FooterLink></li>
                            <li><FooterLink href="/cookies">Política de Cookies</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Social</h3>
                        <div className="flex gap-4">
                            <SocialIcon href="https://instagram.com" icon={<FaInstagram size={20} />} label="Instagram" />
                            <SocialIcon href="https://twitter.com" icon={<FaTwitter size={20} />} label="Twitter" />
                            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin size={20} />} label="LinkedIn" />
                            <SocialIcon href="https://github.com" icon={<FaGithub size={20} />} label="GitHub" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Novo Código LTDA. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Feito com <span className="text-red-500">❤</span> no Brasil
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: FooterLinkProps) {
    return (
        <a 
            href={href} 
            className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
        >
            {children}
        </a>
    );
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
    return (
        <a 
            href={href}
            aria-label={label}
            className="bg-white/5 p-3 rounded-full hover:bg-white hover:text-secondary transition-all duration-300 hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
}
