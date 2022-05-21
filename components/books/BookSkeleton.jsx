const BookSkeleton = () => {
    return (
        <div className="w-min bg-slate-10 rounded-xl shadow-md mx-auto mb-auto">
            <div className="animate-pulse">
                <div className="w-[300px] h-[400px] bg-slate-300 rounded-xl" />

                <div className="p-4">
                    <div className="my-3">
                        <div className="bg-slate-300 h-7 w-44 mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-left">
                        <div className="bg-slate-300 h-4 w-5 rounded my-auto" />
                        <div className="flex gap-2">
                            <div className="bg-slate-300 h-6 w-12 rounded" />
                            <div className="bg-slate-300 h-6 w-24 rounded" />
                        </div>
                        <div className="bg-slate-300 h-4 w-5 rounded my-auto" />
                        <div className="bg-slate-300 h-6 w-28 rounded" />
                    </div>

                    <div className="btn-padding btn-rounded bg-slate-300 mx-auto my-5 w-24 h-10" />
                </div>
            </div>
        </div>
    )
}

export default BookSkeleton;