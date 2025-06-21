import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

// Mock data for events
const eventsData = [
  {
    id: 1,
    title: "Opening Ceremony & Keynote",
    time: "9:00 AM",
    date: "June 23, 2025",
    location: "Grand Ballroom, Taj West End",
    presenter: "Ananya Sharma, CEO of FashTech India",
    category: "ceremony",
    image: "https://images.pexels.com/photos/7691056/pexels-photo-7691056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Corporate Attire Reimagined",
    time: "11:30 AM",
    date: "June 23, 2025",
    location: "Runway Hall, Sheraton Grand",
    presenter: "Vikram Patel, Design Director at Myntra",
    category: "runway",
    image: "https://images.pexels.com/photos/8108197/pexels-photo-8108197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Future of Workplace Fashion",
    time: "2:00 PM",
    date: "June 23, 2025",
    location: "Panel Room A, ITC Gardenia",
    presenter: "Panel of Indian Fashion Industry Leaders",
    category: "panel",
    image: "https://images.pexels.com/photos/8108152/pexels-photo-8108152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Sustainable Corporate Fashion",
    time: "4:30 PM",
    date: "June 23, 2025",
    location: "Green Stage",
    presenter: "Sophia Mendez, Sustainability Lead",
    category: "workshop",
    image: "https://images.pexels.com/photos/7682440/pexels-photo-7682440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Networking Cocktail Reception",
    time: "7:00 PM",
    date: "June 23, 2025",
    location: "Terrace Lounge",
    category: "networking",
    image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Executive Style Workshop",
    time: "10:00 AM",
    date: "June 24, 2025",
    location: "Workshop Room B",
    presenter: "Raj Malhotra, Image Consultant",
    category: "workshop",
    image: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "Emerging Designers Showcase",
    time: "1:00 PM",
    date: "June 24, 2025",
    location: "Runway Hall",
    category: "runway",
    image: "https://images.pexels.com/photos/8108190/pexels-photo-8108190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    title: "Tech & Fashion Integration",
    time: "3:30 PM",
    date: "June 24, 2025",
    location: "Innovation Lab",
    presenter: "Dr. Alicia Zhang, Tech Innovator",
    category: "panel",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 9,
    title: "Gala Dinner & Fashion Awards",
    time: "7:30 PM",
    date: "June 25, 2025",
    location: "Grand Ballroom",
    category: "ceremony",
    image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Events" },
  { id: "ceremony", name: "Ceremonies" },
  { id: "runway", name: "Runway Shows" },
  { id: "panel", name: "Panel Discussions" },
  { id: "workshop", name: "Workshops" },
  { id: "networking", name: "Networking" }
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = activeCategory === "all"
    ? eventsData
    : eventsData.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-[#1A2A40] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Event Schedule
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              Browse through our carefully curated program of runway shows, panels, workshops, and networking opportunities.
            </p>
            <div className="h-1 w-20 bg-[#F5C243]"></div>
          </motion.div>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#1A2A40] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <EventCard
                  title={event.title}
                  time={event.time}
                  date={event.date}
                  location={event.location}
                  presenter={event.presenter}
                  image={event.image}
                />
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">No events found</h3>
              <p className="text-gray-600 mb-6">
                No events were found for the selected category. Please try another filter.
              </p>
              <Button
                variant="secondary"
                onClick={() => setActiveCategory("all")}
              >
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Download Schedule CTA */}
      <section className="py-16 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A2A40] mb-4">
                  Download the Complete Schedule
                </h2>
                <p className="text-gray-600 mb-6">
                  Get the full event schedule, including room locations, speaker bios, and session descriptions to plan your Corporate Fashion Week experience.
                </p>
                <Button>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download PDF Schedule
                  </span>
                </Button>
              </div>
              <div className="bg-[#1A2A40] p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#F5C243] text-5xl font-serif font-bold mb-2">3</div>
                  <div className="text-white text-lg">Days of Exclusive Events</div>
                  <div className="h-px w-16 bg-[#F5C243]/50 mx-auto my-4"></div>
                  <div className="text-[#F5C243] text-5xl font-serif font-bold mb-2">30+</div>
                  <div className="text-white text-lg">Expert Speakers</div>
                  <div className="h-px w-16 bg-[#F5C243]/50 mx-auto my-4"></div>
                  <div className="text-[#F5C243] text-5xl font-serif font-bold mb-2">15+</div>
                  <div className="text-white text-lg">Fashion Showcases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}