
import { signOut } from "@/auth";
import { Button } from "./ui/button";

const SignOut = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
            className="inline"
        >
            <Button
                type="submit"
                className="text-red-600 hover:text-red-800 font-semibold transition px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                Sign Out
            </Button>
        </form>
    );
};

export default SignOut;
