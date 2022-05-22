import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const ReadPage = () => {
    const router = useRouter();
    const { id } = router.query
    const [loading, setLoading] = useState(true);

    if(!id && loading) return <p>Ładowanie</p>;

    const handleLoaded = () => {
        setLoading(false);
    }

    return (
        <iframe onLoad={handleLoaded} src={`/api/text/${id}`} className="bg-white w-full h-full" height="100%" width="100%" />
    )
}

export default ReadPage;