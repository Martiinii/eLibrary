import { faCalendarDays, faLanguage, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { BookProvider } from "./bookContext";
import BookField from "./BookField";
import StarButton from "./StarButton";
import convertCodeToLang from "../shared/languages";

const Book = ({ id, title, author, languageCode, imgSrc }) => {
    const language = useMemo(() => convertCodeToLang(languageCode))

    return (
        <BookProvider id={id}>
            <article className="w-min bg-white rounded-xl shadow-md place-self-center">
                <header className="relative w-[300px] h-[400px] bg-slate-100 overflow-hidden rounded-xl">
                    <img src={imgSrc} alt="Book cover" className="object-cover h-full w-full object-topbrightness-95 origin-top hover:scale-105 transition" />
                    <StarButton />
                </header>

                <section className="p-4 text-center">
                    <header className="text-center my-3">
                        <h2 className="text-lg font-semibold">{title}</h2>
                    </header>

                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-left">
                        <BookField icon={faUser}>{author}</BookField>
                        <BookField icon={faLanguage}>{language}</BookField>
                    </div>

                    <button className="reset-focus btn-padding btn-rounded my-5 bg-emerald-300 hover:bg-emerald-400 focus-visible:ring-emerald-700 uppercase font-semibold">
                        Czytaj
                    </button>
                </section>
            </article>
        </BookProvider>
    )
}

export default Book;