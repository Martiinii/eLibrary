import Link from "next/Link"

const navbarLeft = [
    { title: "O projekcie", href: "/about" }
]

const navbarRight = [
    { title: "O projekcie", href: "/about" }
]


const NavbarLink = ({ children, href }) => {
    return (
        <Link href={href}>
            <a className="link">{children}</a>
        </Link>
    )
}


const Navbar = () => {
    return (
        <nav className="w-full flex justify-center gap-5 p-5">
            <section className="flex-1 text-right">
                {navbarLeft.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
            </section>


            <section>

            </section>


            <section className="flex-1">
                {navbarRight.map((link, i) => <NavbarLink href={link.href} key={i}>{link.title}</NavbarLink>)}
            </section>
        </nav>
    )
}

export default Navbar