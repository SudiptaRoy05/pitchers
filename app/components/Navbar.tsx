import { auth } from "@/auth";
import Link from "next/link";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600 tracking-tight hover:opacity-90 transition"
        >
          Pitchers
        </Link>

        {/* Navigation Section */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          {session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Create
              </Link>

              {/* SignOut Button */}
              <SignUp />

              {/* User Badge */}
              <Link
                href={`/user/${session.user.id}`}
                className="flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full font-semibold hover:bg-blue-200 transition"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                {session.user.name}
              </Link>
            </>
          ) : (
            <>
              {/* SignIn Button */}
              <SignIn />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
