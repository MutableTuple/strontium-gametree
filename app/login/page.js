import React from "react";
import LoginForm from "../_components/LoginForm";

export default function page() {
  return (
    <div className="h-screen w-full bg-theme_blue-50  flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}
