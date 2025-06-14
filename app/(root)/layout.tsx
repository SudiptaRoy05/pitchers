import Navbar from "../components/Navbar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="font-work-sans">
            <div className="min-h-screen">
                <Navbar />
            </div>
            {children}
        </main>
    )
}

export default layout
