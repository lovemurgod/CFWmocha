import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useState } from 'react';

// Mock data for events (this would ideally come from an API)
const eventsData = [
  {
    id: 1,
    title: "Opening Ceremony & Keynote",
    time: "9:00 AM",
    date: "June 23, 2025",
    location: "Grand Ballroom, Taj West End",
    presenter: "Ananya Sharma, CEO of FashTech India",
    category: "ceremony",
    image: "https://images.pexels.com/photos/7691056/pexels-photo-7691056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Join us for the grand opening of Corporate Fashion Week 2025 in Bangalore. The event will feature a keynote address by Ananya Sharma, CEO of FashTech India, who will discuss the future of corporate fashion in India's tech capital. This is a must-attend event for all fashion enthusiasts and industry professionals.",
    schedule: [
      { time: "9:00 AM - 9:30 AM", activity: "Registration & Welcome Drinks" },
      { time: "9:30 AM - 10:00 AM", activity: "Opening Address by CFW Founder" },
      { time: "10:00 AM - 11:00 AM", activity: "Keynote Speech by Ananya Sharma" },
      { time: "11:00 AM - 11:30 AM", activity: "Q&A Session" },
      { time: "11:30 AM - 12:30 PM", activity: "Networking Reception" }
    ],
    ticketPrice: 1999
  },
  {
    id: 2,
    title: "Corporate Attire Reimagined",
    time: "11:30 AM",
    date: "June 23, 2025",
    location: "Runway Hall, Sheraton Grand",
    presenter: "Vikram Patel, Design Director at Myntra",
    category: "runway",
    image: "https://images.pexels.com/photos/8108197/pexels-photo-8108197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Experience a revolutionary runway show that challenges traditional notions of corporate attire. Vikram Patel, Design Director at Myntra, presents a collection that blends traditional Indian elements with modern corporate aesthetics. Witness how cultural heritage can influence and transform the corporate fashion landscape.",
    schedule: [
      { time: "11:30 AM - 12:00 PM", activity: "Arrival & Seating" },
      { time: "12:00 PM - 12:15 PM", activity: "Introduction by Vikram Patel" },
      { time: "12:15 PM - 1:15 PM", activity: "Runway Show" },
      { time: "1:15 PM - 2:00 PM", activity: "Designer Meet & Greet" }
    ],
    ticketPrice: 2499
  },
  {
    id: 3,
    title: "Future of Workplace Fashion",
    time: "2:00 PM",
    date: "June 23, 2025",
    location: "Panel Room A, ITC Gardenia",
    presenter: "Panel of Indian Fashion Industry Leaders",
    category: "panel",
    image: "https://images.pexels.com/photos/8108152/pexels-photo-8108152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Join a diverse panel of Indian fashion industry leaders as they discuss the evolving landscape of workplace fashion. The conversation will explore how traditional office attire is being redefined in the post-pandemic era, with a special focus on Indian work culture and how it's influencing global trends.",
    schedule: [
      { time: "2:00 PM - 2:15 PM", activity: "Panel Introduction" },
      { time: "2:15 PM - 3:15 PM", activity: "Panel Discussion" },
      { time: "3:15 PM - 3:45 PM", activity: "Audience Q&A" },
      { time: "3:45 PM - 4:30 PM", activity: "Networking Tea" }
    ],
    ticketPrice: 1499
  },
  {
    id: 4,
    title: "Sustainable Corporate Fashion",
    time: "4:30 PM",
    date: "June 23, 2025",
    location: "Green Stage",
    presenter: "Sophia Mendez, Sustainability Lead",
    category: "workshop",
    image: "https://images.pexels.com/photos/7682440/pexels-photo-7682440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover how sustainability is reshaping corporate fashion in India. This workshop, led by renowned sustainability expert Sophia Mendez, will showcase eco-friendly fabrics, ethical production methods, and how Indian businesses are leading the charge in sustainable corporate attire.",
    schedule: [
      { time: "4:30 PM - 5:00 PM", activity: "Introduction to Sustainable Fashion" },
      { time: "5:00 PM - 6:00 PM", activity: "Workshop: Identifying Sustainable Materials" },
      { time: "6:00 PM - 6:30 PM", activity: "Case Studies: Indian Brands Leading in Sustainability" },
      { time: "6:30 PM - 7:00 PM", activity: "Q&A and Discussion" }
    ],
    ticketPrice: 1799
  },
  {
    id: 5,
    title: "Networking Cocktail Reception",
    time: "7:00 PM",
    date: "June 23, 2025",
    location: "Terrace Lounge",
    category: "networking",
    image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "End the first day of Corporate Fashion Week with an elegant networking reception. Connect with industry professionals, designers, and fashion enthusiasts while enjoying cocktails and canapés on the beautiful terrace lounge with stunning views of Bangalore's skyline.",
    schedule: [
      { time: "7:00 PM - 7:30 PM", activity: "Welcome Drinks" },
      { time: "7:30 PM - 8:00 PM", activity: "Brief Address by Event Sponsors" },
      { time: "8:00 PM - 10:00 PM", activity: "Networking & Cocktails" }
    ],
    ticketPrice: 2999
  },
  {
    id: 6,
    title: "Executive Style Workshop",
    time: "10:00 AM",
    date: "June 24, 2025",
    location: "Workshop Room B",
    presenter: "Raj Malhotra, Image Consultant",
    category: "workshop",
    image: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Enhance your professional presence with this exclusive workshop led by renowned Indian image consultant Raj Malhotra. Learn how to curate a wardrobe that communicates authority and authenticity while respecting Indian corporate culture and traditions.",
    schedule: [
      { time: "10:00 AM - 10:30 AM", activity: "Introduction to Executive Styling" },
      { time: "10:30 AM - 11:30 AM", activity: "Wardrobe Essentials for Indian Professionals" },
      { time: "11:30 AM - 12:00 PM", activity: "Color Theory and Body Types" },
      { time: "12:00 PM - 1:00 PM", activity: "Practical Styling Session" }
    ],
    ticketPrice: 2299
  },
  {
    id: 7,
    title: "Emerging Designers Showcase",
    time: "1:00 PM",
    date: "June 24, 2025",
    location: "Runway Hall",
    category: "runway",
    image: "https://images.pexels.com/photos/8108190/pexels-photo-8108190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover the future of Indian corporate fashion through the fresh perspective of emerging designers from across the country. This showcase features innovative collections that challenge conventional notions of workwear while celebrating India's rich textile heritage and craftsmanship.",
    schedule: [
      { time: "1:00 PM - 1:30 PM", activity: "Introduction to Designers" },
      { time: "1:30 PM - 3:00 PM", activity: "Runway Showcase" },
      { time: "3:00 PM - 3:30 PM", activity: "Designers' Speech" }
    ],
    ticketPrice: 1999
  },
  {
    id: 8,
    title: "Tech & Fashion Integration",
    time: "3:30 PM",
    date: "June 24, 2025",
    location: "Innovation Lab",
    presenter: "Dr. Alicia Zhang, Tech Innovator",
    category: "panel",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Explore how technology is transforming the fashion industry in Bangalore, India's tech hub. Dr. Alicia Zhang leads a fascinating discussion on smart fabrics, AI in fashion design, and how Indian tech companies are pioneering innovations in corporate wear.",
    schedule: [
      { time: "3:30 PM - 4:00 PM", activity: "Introduction to Fashion Tech" },
      { time: "4:00 PM - 5:00 PM", activity: "Panel Discussion" },
      { time: "5:00 PM - 5:30 PM", activity: "Interactive Tech Demos" },
      { time: "5:30 PM - 6:00 PM", activity: "Q&A Session" }
    ],
    ticketPrice: 1699
  },
  {
    id: 9,
    title: "Gala Dinner & Fashion Awards",
    time: "7:30 PM",
    date: "June 25, 2025",
    location: "Grand Ballroom",
    category: "ceremony",
    image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Join us for an elegant evening celebrating excellence in corporate fashion. The gala dinner features a multicourse meal inspired by India's diverse culinary traditions, followed by the prestigious CFW Awards recognizing outstanding contributions to the corporate fashion landscape in India.",
    schedule: [
      { time: "7:30 PM - 8:00 PM", activity: "Arrival & Welcome Drinks" },
      { time: "8:00 PM - 9:30 PM", activity: "Gala Dinner" },
      { time: "9:30 PM - 10:30 PM", activity: "Awards Ceremony" },
      { time: "10:30 PM - 12:00 AM", activity: "Celebration & Networking" }
    ],
    ticketPrice: 5999
  }
];

export default function EventDetailPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const [ticketCount, setTicketCount] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  // Find the event based on the ID from URL
  const event = eventsData.find(e => e.id === Number(eventId));
  
  // If event not found, show error
  if (!event) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-[#1A2A40] mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events">
          <Button variant="secondary">Back to Events</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A40] via-[#1A2A40]/70 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
            <motion.span 
              className="inline-block bg-[#F5C243] text-[#1A2A40] px-4 py-1 text-sm font-medium rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {event.date} • {event.time}
            </motion.span>
            
            <motion.h1 
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {event.title}
            </motion.h1>
            
            <motion.p 
              className="text-white/80 mb-6 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center mr-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {event.location}
              </span>
              
              {event.presenter && (
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  {event.presenter}
                </span>
              )}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                onClick={() => setShowBookingForm(true)}
              >
                Book Tickets - ₹{event.ticketPrice}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-[#1A2A40] mb-6">About This Event</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {event.description}
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-[#1A2A40] mb-6">Event Schedule</h2>
              <div className="space-y-4 mb-8">
                {event.schedule?.map((item, index) => (
                  <div key={index} className="flex border-l-4 border-[#F5C243] pl-4">
                    <div className="mr-4">
                      <div className="font-medium text-[#1A2A40]">{item.time}</div>
                    </div>
                    <div>
                      <div className="text-gray-700">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 md:hidden">
                <h2 className="text-2xl font-serif font-bold text-[#1A2A40] mb-6">Book Your Tickets</h2>
                <div className="bg-[#F4F4F4] p-6 rounded-lg">
                  <div className="mb-4">
                    <span className="block text-[#1A2A40] font-medium mb-2">Price:</span>
                    <span className="text-2xl font-serif font-bold text-[#1A2A40]">₹{event.ticketPrice}</span>
                    <span className="text-gray-500 ml-1">/ person</span>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-[#F4F4F4] p-6 rounded-lg sticky top-24">
                <h2 className="text-2xl font-serif font-bold text-[#1A2A40] mb-6">Book Your Tickets</h2>
                
                <div className="mb-4">
                  <span className="block text-[#1A2A40] font-medium mb-2">Price:</span>
                  <span className="text-2xl font-serif font-bold text-[#1A2A40]">₹{event.ticketPrice}</span>
                  <span className="text-gray-500 ml-1">/ person</span>
                </div>
                
                <div className="mb-6">
                  <span className="block text-[#1A2A40] font-medium mb-2">Date & Time:</span>
                  <div className="text-gray-700">{event.date} at {event.time}</div>
                </div>
                
                <div className="mb-6">
                  <span className="block text-[#1A2A40] font-medium mb-2">Location:</span>
                  <div className="text-gray-700">{event.location}</div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => setShowBookingForm(true)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Events Section */}
      <section className="py-16 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-serif font-bold text-[#1A2A40] mb-8">Similar Events You May Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventsData
              .filter(e => e.category === event.category && e.id !== event.id)
              .slice(0, 3)
              .map(relatedEvent => (
                <motion.div 
                  key={relatedEvent.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/events/${relatedEvent.id}`}>
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={relatedEvent.image} 
                        alt={relatedEvent.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#F5C243] text-[#1A2A40] px-3 py-1 font-medium">
                        {relatedEvent.time}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>{relatedEvent.date}</span>
                      </div>
                      
                      <h3 className="text-[#1A2A40] font-serif text-xl font-medium mb-2">{relatedEvent.title}</h3>
                      
                      <button className="text-[#1A2A40] font-medium inline-flex items-center group">
                        View Details
                        <svg 
                          className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#1A2A40]">Book Tickets</h2>
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="bg-[#F4F4F4] p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-[#1A2A40]">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-[#1A2A40]">₹{event.ticketPrice}</span>
                    <span className="text-sm text-gray-600"> / ticket</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="ticketCount" className="block text-[#1A2A40] font-medium mb-2">Number of Tickets</label>
                <div className="flex items-center">
                  <button 
                    className="bg-[#F4F4F4] px-3 py-2 rounded-l-lg text-[#1A2A40] font-bold"
                    onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    id="ticketCount"
                    value={ticketCount}
                    onChange={(e) => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-y py-2 text-[#1A2A40]"
                    min="1"
                  />
                  <button 
                    className="bg-[#F4F4F4] px-3 py-2 rounded-r-lg text-[#1A2A40] font-bold"
                    onClick={() => setTicketCount(ticketCount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#1A2A40] font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#1A2A40] font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-[#1A2A40] font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-[#1A2A40] font-medium mb-2">Company / Organization</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="Your company (optional)"
                  />
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Ticket Price (x{ticketCount})</span>
                  <span className="text-[#1A2A40]">₹{event.ticketPrice * ticketCount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Booking Fee</span>
                  <span className="text-[#1A2A40]">₹{Math.round(event.ticketPrice * ticketCount * 0.05)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-[#1A2A40]">Total</span>
                  <span className="text-[#1A2A40]">₹{event.ticketPrice * ticketCount + Math.round(event.ticketPrice * ticketCount * 0.05)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input 
                    type="checkbox" 
                    className="mt-1 text-[#F5C243] focus:ring-[#F5C243]"
                  />
                  <span className="ml-2 text-gray-600 text-sm">
                    I agree to the <a href="#" className="text-[#1A2A40] underline hover:text-[#F5C243]">terms and conditions</a> and consent to the processing of my personal data as described in the <a href="#" className="text-[#1A2A40] underline hover:text-[#F5C243]">privacy policy</a>.
                  </span>
                </label>
              </div>
              
              <div className="flex justify-end">
                <button 
                  className="mr-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowBookingForm(false)}
                >
                  Cancel
                </button>
                <Button>
                  Complete Booking
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
