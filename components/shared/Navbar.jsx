import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Router from "next/router"
import { useState } from "react"
import { useSearch } from "../../context/searchContext"
import useTextInput from "./useTextInput"

const navbarLinks = [
    { title: "Popularne", href: "/" },
    { title: "Ulubione książki", href: "/favourite" },
    { title: "O projekcie", href: "/about" },
]


const NavbarLink = ({ children, href, onClick }) => {
    return (
        <Link href={href}>
            <a className="reset-focus btn-padding btn-rounded bg-slate-100 hover:bg-slate-200 border-2 border-slate-400 focus-visible:border-transparent whitespace-nowrap w-fit" onClick={onClick}>{children}</a>
        </Link>
    )
}


const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const { searchBox } = useSearch();
    const toggleMenu = (state = null) => setMobileMenuVisible(state ?? !mobileMenuVisible)

    return (
        <>
            <nav className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-40">
                <div className="container mx-auto flex flex-wrap px-5 py-5 justify-between items-center gap-3">
                    <h1 className="text-2xl font-bold">E-Biblioteka</h1>
                    <button className="md:hidden reset-focus btn-padding btn-rounded" onClick={() => toggleMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div className={`${!mobileMenuVisible ? "hidden" : "flex"} md:flex flex-col md:flex-row justify-center md:items-center gap-5 w-full md:w-auto`}>
                        <section className="flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-end">
                            {navbarLinks.map((link, i) => <NavbarLink href={link.href} key={i} onClick={() => { toggleMenu(false) }}>{link.title}</NavbarLink>)}
                        </section>
                    </div>
                </div>
            </nav>
            {searchBox}
        </>
    )
}

export default Navbar