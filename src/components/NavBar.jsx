import '../App.css'

export const NavBar = () => {
    return (
        <nav className="bg-paper border-b-3 border-ink">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <a className="text-ink text-lg font-semibold">Logo</a>
                        </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    About
                                    Pricing
                                    Contact
                                    Dashboard
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}