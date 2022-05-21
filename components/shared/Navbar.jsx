import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/Link"
import { useState } from "react"
import useTextInput from "./useTextInput"

const navbarLeft = [
    { title: "Ulubione książki", href: "/favourite" }
]

const navbarRight = [
    { title: "O projekcie", href: "/about" }
]


const NavbarLink = ({ children, href }) => {
    return (
        <Link href={href}>
            <a className="reset-focus btn-padding btn-rounded bg-slate-100 hover:bg-slate-200">{children}</a>
        </Link>
    )
}


const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const toggleMenu = () => setMobileMenuVisible(!mobileMenuVisible)
    const [searchInput, searchInputValue] = useTextInput({ className: "md:text-center", placeholder: "Wyszukaj książki" });

    const submitSearch = e => {
        e.preventDefault();
    }

    return (
        <>
            <h1 className="hidden md:block bg-white/80 backdrop-blur-sm text-2xl font-bold text-center py-5">E-Biblioteka</h1>
            <nav className="w-full flex px-5 py-5 bg-white/80 backdrop-blur-sm flex-wrap justify-between items-center sticky top-0 z-50">
                <h2 className="block md:hidden text-xl font-bold">E-Biblioteka</h2>
                <button className="md:hidden reset-focus btn-padding btn-rounded" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className={`${!mobileMenuVisible ? "hidden" : "flex"} md:flex flex-col md:flex-row justify-center md:items-center gap-5 p-5 w-full `}>
                    <section>
                        <form onSubmit={submitSearch}>
                            {searchInput}
                        </form>
                    </section>

                    <section className="md:flex-1 md:text-right md:order-first">
                        {navbarLeft.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
                    </section>


                    <section className="md:flex-1">
                        {navbarRight.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
                    </section>
                </div>
            </nav>
        </>
    )
}

export default Navbar