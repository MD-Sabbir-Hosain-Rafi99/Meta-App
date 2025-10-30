import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import FeaturesDropdown from "../FeaturesDropdown";
import NavLink from "./NavLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navigationData = [
        { id: 2, name: "Privacy And Safety", path: "/privacyandsafty" },
        { id: 3, name: "For Developers", path: "/fordevelopers" },
        { id: 4, name: "Help Center", path: "/helpcenter" },
    ];

    return (
        <nav className="w-full navbar bg-base-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center ml-auto gap-6 font-bold">
                        <FeaturesDropdown />
                        {navigationData.map((route) => (
                            <NavLink key={route.id} route={route} />
                        ))}
                        <Link to='/registration'>
                            <button className="btn w-30 text-white rounded-xl bg-[#0866FF]">Registration</button>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden ml-auto flex items-center">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            className="p-2 rounded-md"
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-96" : "max-h-0"
                        }`}
                >
                    <div className="bg-amber-300 text-black rounded-b-md py-4 px-3 flex flex-col gap-2">
                        <FeaturesDropdown />
                        {navigationData.map((route) => (
                            <NavLink key={route.id} route={route} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar