import { useStarred } from "../context/starredContext";
import Meta from "../components/shared/Meta";

const FavouritePage = () => {
    const { fetchedBooks } = useStarred();

    return (
        <>
        <Meta title="Ulubione książki" />
            <div className="book-list">
                {fetchedBooks.map(saved => {
                    return saved.book;
                })}
            </div>
        </>
    )
}

export default FavouritePage;