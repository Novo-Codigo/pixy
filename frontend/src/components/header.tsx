import { GiHamburgerMenu } from "react-icons/gi";
import PixyLogo from "/pixy.webp";

export default function Header() {
    return(
        <header className="p-2 bg-secondary flex justify-between w-full items-center">
            <button className="md:hidden hover:cursor-pointer">
                <GiHamburgerMenu color="white" size={2}/>
            </button>
            <div className="flex justify-center gap-x-2 items-center">
                <img src={PixyLogo} className="h-12 w-10"/>
                <p className="text-3xl font-bold text-white">Pixy</p>
            </div>
            <div></div>
        </header>
    );
} 
