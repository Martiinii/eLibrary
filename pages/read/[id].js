import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetcher from "../../components/shared/fetcher";

const getText = async (id, callback) => {
    const data = await fetcher(`https://gnikdroy.pythonanywhere.com/api/book/${id}?format=json`)
    const resources = data.resources ?? [];

    let uri = ""

    for (const res of resources) {
        if (
            res.uri.endsWith("h.htm") ||
            res.uri.endsWith("html.images") ||
            res.uri.endsWith("html.noimages")
        ) {
            uri = res.uri;
            break;
        }
    }

    if(callback != null) callback(uri);
    return uri;
}


const ReadPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [frameSrc, setFrameSrc] = useState("");

    useEffect(() => {
        if(id) {
            getText(id, setFrameSrc);
        }
    }, [id])


    return (
        <iframe
            src={frameSrc}
            className={`w-full min-h-[600px] md:min-h-[700px] bg-white rounded-lg shadow-lg ${frameSrc ? "" : "bg-slate-300 animate-pulse"}`}
        />
    )
}

export default ReadPage;