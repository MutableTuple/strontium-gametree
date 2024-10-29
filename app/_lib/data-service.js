import { supabase } from "./supabase";

export async function createUser(newUser) {
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])
    .select();

  if (error) {
    console.log("errorr", error);
  }
  return data;
}

export async function getSingleUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*", "email")
    .eq("email", email)
    .single();

  return data;
}
