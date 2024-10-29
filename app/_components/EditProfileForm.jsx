import React from "react";

export default function EditProfileForm() {
  return (
    <form className="flex flex-col gap-2">
      <h1>Edit your profile</h1>
      <hr />
      <input type="text" placeholder="username" className="border" />
      <input type="text" placeholder="name" className="border" />{" "}
      <input type="text" placeholder="description" className="border" />
    </form>
  );
}
