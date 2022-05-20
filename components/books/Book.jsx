import { faCalendarDays, faLanguage, faUser } from "@fortawesome/free-solid-svg-icons";
import BookField from "./BookField";
import StarButton from "./StarButton";

const Book = () => {
    return (
        <article className="w-min bg-white rounded-xl shadow-md">
            <header className="relative">
                <img width="300" height="400" alt="Book cover" className="bg-cover" />
                <StarButton />
            </header>
            <hr />
            <section className="p-4 text-center">
                <header className="text-center my-3">
                    <h2 className="text-lg font-semibold">Tytuł</h2>
                </header>

                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-left">
                    <BookField icon={faUser}>Adam Mickiewicz</BookField>
                    <BookField icon={faCalendarDays}>01.01.1995</BookField>
                    <BookField icon={faLanguage}>Polski</BookField>
                </div>
                <button className="reset-focus btn-padding btn-rounded my-5 bg-sky-300 uppercase font-semibold">
                    Czytaj
                </button>
            </section>
        </article>
    )
}

export default Book;