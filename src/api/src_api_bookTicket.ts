import { supabase } from "../supabaseClient";

export async function bookTicket(eventName: string, userEmail: string, price: number) {
  const { data, error } = await supabase
    .from("tickets")
    .insert([{ event_name: eventName, user_email: userEmail, price, status: "booked" }]);
  if (error) throw error;
  return data;
}