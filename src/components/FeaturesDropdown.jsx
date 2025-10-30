
const FeaturesDropdown = () => {

    return (
        <div className="relative">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Features</summary>
                            <ul className="p-2">
                                <div className="absolute right-0 mt-2 w-[494vw] max-w-[980px] md:w-[260px] z-50">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-50">
                                                <div className="w-[500px] rounded-lg p-6 bg-white shadow-sm py-20">
                                                    <h4 className="text-xl font-semibold mb-2">Useful</h4>
                                                    <p className="text-sm text-slate-600 mb-3">
                                                        Show up for your family and friends with everyday connection.
                                                    </p>
                                                    <button className="text-sm font-medium inline-flex items-center gap-2 text-sky-600">
                                                        <span>→</span>
                                                    </button>
                                                </div>
                                            </div>
                                </div>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FeaturesDropdown





