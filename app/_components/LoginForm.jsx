import React from "react";
import SignInWithGoogleBtn from "./SignInWithGoogleBtn";

export default function LoginForm() {
  return (
    <div className="bg-stone-500 p-5">
      <form className="flex flex-col gap-2 ">
        <label htmlFor="name" className="text-stone-50">
          Name
        </label>
        <input type="text" />
        <label htmlFor="name" className="text-stone-50">
          Email
        </label>
        <input type="email" />
        <button className="bg-stone-100">send magic link</button>
      </form>
      <hr />
      or
      <SignInWithGoogleBtn />
    </div>
  );
}
