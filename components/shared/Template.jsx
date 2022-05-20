import Navbar from "./Navbar"

const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Template