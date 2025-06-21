import { supabase } from "../supabaseClient";

export async function getTickets(userEmail: string) {
  const { data, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("user_email", userEmail);
  if (error) throw error;
  return data;
}