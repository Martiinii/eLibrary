import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/Link"
import { useState } from "react"
import TextInput from "./TextInput"
import useTextInput from "./useTextInput"

const navbarLeft = [
    { title: "O projekcie", href: "/about" }
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
    const [searchInput, searchInputValue] = useTextInput("md:text-center", "Wyszukaj książki");

    const submitSearch = e => {
        e.preventDefault();
    }

    return (
        <nav className="w-full flex px-5 py-5 bg-white/30 backdrop-blur-sm flex-wrap justify-end sticky top-0">
            <button className="md:hidden reset-focus btn-padding btn-rounded" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`${!mobileMenuVisible ? "hidden" : "flex"} md:flex flex-col md:flex-row justify-center md:items-center gap-5 p-5 w-full `}>
                <section className="md:flex-1 md:text-right">
                    {navbarLeft.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
                </section>


                <section className="order-first md:order-none">
                    <form onSubmit={submitSearch}>
                        {searchInput}
                    </form>
                </section>


                <section className="md:flex-1">
                    {navbarRight.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
                </section>
            </div>
        </nav>
    )
}

export default Navbar