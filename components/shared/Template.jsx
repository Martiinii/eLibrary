import Navbar from "./Navbar"

const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="max-w-[120rem] mx-auto p-5">
                {children}
            </main>

        </>
    )
}

export default Template