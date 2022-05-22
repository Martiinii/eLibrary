import { useStarred } from "../context/starredContext";


const FavouritePage = () => {
    const { fetchedBooks } = useStarred();

    return (
        <div className="book-list">
            {fetchedBooks.map(saved => {
                return saved.book;
            })}
        </div>
    )
}

export default FavouritePage;