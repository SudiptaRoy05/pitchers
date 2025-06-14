import Navbar from "../components/Navbar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="font-work-sans">
            <div>
                <Navbar />
            </div>
            {children}
        </main>
    )
}

export default layout
