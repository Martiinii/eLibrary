import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as wholeStar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBook } from "./bookContext";

const StarButton = () => {
    const { starredState, setStarred } = useBook();

    const toggleStarred = () => {
        setStarred(!starredState);
    }

    return (
        <button className="absolute top-2 right-2 reset-focus rounded-full bg-white/90 backdrop-blur-sm shadow-md shadow-slate-800/40" onClick={toggleStarred}>
            <div className="fa-layers text-4xl block m-0">
                <FontAwesomeIcon icon={starredState ? wholeStar : emptyStar} className="text-xl text-yellow-400" />
            </div>
        </button>
    )
}

export default StarButton