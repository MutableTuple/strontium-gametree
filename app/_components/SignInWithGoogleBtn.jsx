import React from "react";
import { signInAction } from "../_lib/actions";
export default function SignInWithGoogleBtn() {
  return (
    <form className="w-full" action={signInAction}>
      <button className="flex w-full items-center justify-center gap-2 rounded-md border px-2 py-3 outline-none transition-all duration-300 hover:bg-stone-100 focus:ring-1">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span className="font-semibold">Sign In with Google</span>
      </button>
    </form>
  );
}
