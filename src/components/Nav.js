import logo from "./photo/logoo.png";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Target } from "lucide-react";
import "../index.css"



export default function Nav() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);



    const menuItems = [
        {
            label: "Investing ▸", href: "/services/investment",
            submenu: [
                { name: "Long-Term", href: "/services/investment" },
                { name: "Wealth Creation", href: "/services/investment" },
                { name: "Multi-Baggers", href: "/services/investment" },
                { name: "Positional Investing", href: "/services/investment" },

            ],
        },
        {
            label: "Trading ▸", href: "/services/trading",
            submenu: [
                { name: "Short Term", href: "/services/trading" },
                { name: "Swing Trading", href: "/services/trading" },
                { name: "Intraday", href: "/services/trading" },
                { name: "BTST", href: "/services/investment" },

            ],
        },

        {
            label: "FnO ▸", href: "/services/forex/gold",
            submenu: [
                { name: "Futures", href: "#" },
                { name: "Options", href: "#" },
                { name: "Positional Investing", href: "#" },
            ],
        },
        {
            label: "Algo Trading ▸", href: "# " ,Target: "blank",
            submenu: [
                { name: "Index", href: "#" },
                { name: "Forex", href: "#" },
                { name: "Commodoties ", href: "#" },
                { name: "Crypto ", href: "#" },
            ]
        },
        {
            label: "Learning ▸", href: "/services/education",
            submenu: [
                { name: "Fundamentals", href: "/services/education" },
                { name: "Prop Level", href: "/services/education" },
                { name: "RA Certification", href: "/services/education" },
            ],
        },

    ];


    return (
        <div className="w-full flex  justify-center absolute z-50 lg:mt-3  ">
           <div className="flex items-center justify-between gap-5 border-2 p-1 px-4 bg-black lg:bg-opacity-85 border-black w-full lg:w-4/5 lg:rounded-xl">
             <div>
                <img className="w-56 lg:w-11/12  xl:h-16 rounded-xl h-16 lg:h-20" src={logo}/> 
            </div>
            <div className="">

                {/* Hamburger Icon (mobile & tablet) */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white"
                    >
                        {isMobileMenuOpen ? <X size={30}  /> : <Menu size={30} />}
                    </button>
                </div>

                {/* Navigation */}
                <ul
                    className={`
          flex-col lg:flex-row lg:flex
          absolute lg:static top-full left-0 w-full lg:w-auto
          bg-black lg:bg-transparent shadow-md lg:shadow-none
          gap-4 xl:gap-14 text-yellow-400 font-playfair font-bold lg:text-lg xl:text-2xl
          transition-all duration-300 ease-in-out
          z-50
          ${isMobileMenuOpen ? "flex p-4" : "hidden lg:flex"}
        `}
                >
                    <a href="/"><li className=" ">Home</li></a>

                    {/* Our Services */}
                    <li
                        className="relative cursor-pointer select-none"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                    >
                        <div
                            className="flex justify-between items-center  lg:inline-block"
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        >
                            <span className="flex items-center">Our Services</span>
                            <span className="lg:hidden">
                                {isMobileServicesOpen ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </div>

                        {/* Desktop Dropdown */}
                        {isDropdownOpen && (
                            <ul
                                onMouseLeave={() => {
                                    setIsDropdownOpen(false);
                                    setActiveSubmenu(null);
                                }}
                                className="absolute left-0 top-full mt-8 bg-black bg-opacity-60 text-white shadow-lg rounded-lg py-2 w-56 hidden lg:block"
                            >
                                {menuItems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="relative px-4 py-2 "
                                        onMouseEnter={() => setActiveSubmenu(item.label)}
                                        onMouseLeave={() => setActiveSubmenu(null)}
                                    >
                                        <a href={item.href || "#"} target={item.Target} rel="noopener noreferrer">{item.label}</a>
                                        {item.submenu &&
                                            activeSubmenu === item.label && (
                                                <ul className="absolute left-full top-0 ml-1 bg-black bg-opacity-60 rounded-lg py-2 w-48 shadow-lg">
                                                    {item.submenu.map((sub, i) => (
                                                        <li key={i} className="px-4 py-2 hover:bg-indigo-400">
                                                            <a href={sub.href} >{sub.name}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Mobile Dropdown */}
                        {isMobileServicesOpen && (
                            <ul className="lg:hidden bg-black rounded-lg mt-2 ml-2 p-2 text-base space-y-2">
                                {menuItems.map((item, idx) => (
                                    <li key={idx}>
                                        <p className="font-semibold">{item.label.replace(" ▸", "")}</p>
                                        {item.submenu && (
                                            <ul className="ml-4 space-y-1 text-white">
                                                {item.submenu.map((sub, i) => (
                                                    <li key={i}>
                                                        <a href={sub.href}>{sub.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {!item.submenu && (
                                            <a href={item.href} className="text-gray-700">
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <a href="/blogs"><li className="">Blog</li></a>
                    {/* <a href="#"><li className="hover:text-indigo-600">About Us</li></a> */}
                    <a href="#"><li className="">Contact Us</li></a>
                </ul>
            </div>
           </div>
        </div>
    )
}