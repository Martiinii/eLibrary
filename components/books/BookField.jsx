import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookField = ({ icon, children }) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} className="self-center text-slate-600" fixedWidth />
            <span>{children}</span>
        </>
    )
}

export default BookField