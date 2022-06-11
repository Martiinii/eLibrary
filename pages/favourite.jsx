import { useStarred } from "../context/starredContext";
import Meta from "../components/shared/Meta";

const FavouritePage = () => {
    const { fetchedBooks } = useStarred();

    return (
        <>
            <Meta title="Ulubione książki" />
            <div className="book-list">
                {fetchedBooks.length
                    ?
                    fetchedBooks.map(saved => {
                        return saved.book;
                    })
                    :
                    <h2 className="font-semibold text-xl">Brak ulubionych książek</h2>
                }
            </div>
        </>
    )
}

export default FavouritePage;