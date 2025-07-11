
import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="inline"
    >
      <Button
        type="submit"
        className="bg-black text-white px-4 py-1 rounded-md font-semibold hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        Sign in with GitHub
      </Button>
    </form>
  );
}
