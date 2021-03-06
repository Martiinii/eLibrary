import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as wholeStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBook } from "../../context/bookContext";

const StarButton = () => {
    const { starredState, setStarred } = useBook();

    const toggleStarred = () => {
        setStarred(!starredState);
    }

    return (
        <button className="absolute top-2 right-2 reset-focus rounded-full bg-white/90 backdrop-blur-sm focus-visible:ring-amber-500 shadow-md shadow-slate-800/40 origin-top-right hover:scale-125 focus-visible:scale-125" onClick={toggleStarred}>
            <div className="fa-layers text-4xl block m-0">
                <FontAwesomeIcon icon={starredState ? wholeStar : emptyStar} className="text-xl text-yellow-400" />
            </div>
        </button>
    )
}

export default StarButton