import { faLanguage, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { BookProvider } from "./bookContext";
import BookField from "./BookField";
import StarButton from "./StarButton";
import convertCodeToLang from "../shared/languages";
import Link from "next/link";

const getImage = resources => {
    let img = "";

    resources.forEach(res => {
        if (res.uri.endsWith("medium.jpg")) {
            img = res.uri
        }
    });

    return img
}

const getAuthor = agents => {
    let author = "Nieznany";

    agents.some(agent => {
        if (agent.type == "Author") {
            const [lastName, firstName] = agent.person.split(", ");
            author = `${firstName ?? ""} ${lastName}`.trim();
            return true;
        }

        return false;
    })

    return author;
}


const Book = ({ id, title, agents, languageCode, resources }) => {
    const language = useMemo(() => convertCodeToLang(languageCode));
    const author = useMemo(() => getAuthor(agents));
    const imgSrc = useMemo(() => getImage(resources));

    return (
        <BookProvider id={id} title={title} agents={agents} languageCode={languageCode} resources={resources} >
            <article className="w-min bg-white rounded-xl shadow-md mx-auto mb-auto">
                <header className="relative w-[300px] h-[400px] bg-slate-100 overflow-hidden rounded-xl">
                    <img src={imgSrc} alt="Book cover" className="object-cover h-full w-full object-top brightness-95 origin-top hover:scale-[1.02] transition" />
                    <StarButton />
                </header>

                <section className="p-4 text-center">
                    <header className="text-center my-3">
                        <h2 className="text-lg font-bold">{title}</h2>
                    </header>

                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-left">
                        <BookField icon={faUser}>{author}</BookField>
                        <BookField icon={faLanguage}>{language}</BookField>
                    </div>

                    <Link href={`/read/${id}`}>
                        <a className="inline-block reset-focus btn-padding btn-rounded my-5 bg-emerald-300 hover:bg-emerald-400 focus-visible:ring-emerald-700 uppercase font-semibold">
                            Czytaj
                        </a>
                    </Link>

                </section>
            </article>
        </BookProvider>
    )
}

export default Book;