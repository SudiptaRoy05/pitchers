
import { signOut } from "@/auth";

const SignOut = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
            className="inline"
        >
            <button
                type="submit"
                className="text-red-600 hover:text-red-800 font-semibold transition px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                Sign Out
            </button>
        </form>
    );
};

export default SignOut;
