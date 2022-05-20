import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as wholeStar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StarButton = () => {
    const [isStarred, setIsStarred] = useState(false);

    const toggleStarred = () => {
        setIsStarred(!isStarred)
    }

    return (
        <button className="absolute top-2 right-2 reset-focus rounded-full">
            <div className="fa-layers text-4xl block m-1" onClick={toggleStarred}>
                <FontAwesomeIcon icon={faCircle} className="text-white w-fit" />
                <FontAwesomeIcon icon={isStarred ? wholeStar : emptyStar} className="text-xl text-yellow-400" />
            </div>
        </button>
    )
}

export default StarButton