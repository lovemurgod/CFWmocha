import { bookTicket } from './api/bookTicket';
import { getTickets } from './api/getTickets';

// Example usage inside a component
async function handleBook() {
  try {
    await bookTicket("Concert", "user@example.com", 100);
    alert("Ticket booked!");
  } catch (err) {
    alert("Booking failed: " + err.message);
  }
}

async function handleLoadTickets() {
  try {
    const tickets = await getTickets("user@example.com");
    console.log("User tickets:", tickets);
  } catch (err) {
    alert("Loading tickets failed: " + err.message);
  }
}