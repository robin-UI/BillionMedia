
const Sugssion = () => {
    return (
        <>
            <div className="p-5">
                <div>
                    <div className="mb-3 flex justify-between">
                        <div className="flex items-center">
                            <div className="mr-2 h-10 w-10 rounded-full bg-slate-600"></div>
                            <div>
                                <h2>Username </h2>
                                <p className="text-sm font-light text-gray-600">fullname</p>
                            </div>
                        </div>
                        <div className="text-blue-600">swirch</div>
                    </div>
                </div>
                <div className="flex justify-between mb-4">
                    <p>Suggestions For You</p>
                    <a href="/">see all</a>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <div className="mr-2 h-7 w-7 rounded-full bg-slate-600"></div>
                        <div>
                            <h2>Username </h2>
                            <p className="text-sm font-light text-gray-600">Suggestions For You</p>
                        </div>
                    </div>
                    <a href="/" className="text-blue-600">follow</a>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <div className="mr-2 h-7 w-7 rounded-full bg-slate-600"></div>
                        <div>
                            <h2>Username </h2>
                            <p className="text-sm font-light text-gray-600">Suggestions For You</p>
                        </div>
                    </div>
                    <a href="/" className="text-blue-600">follow</a>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <div className="mr-2 h-7 w-7 rounded-full bg-slate-600"></div>
                        <div>
                            <h2>Username </h2>
                            <p className="text-sm font-light text-gray-600">New to instagram</p>
                        </div>
                    </div>
                    <a href="/" className="text-blue-600">follow</a>
                </div>
            </div>
        </>
    )
}

export default Sugssion