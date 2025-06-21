import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="About The Event" 
                subtitle="Corporate Fashion Week brings together the worlds of business and style, creating a unique platform for networking, innovation, and trendsetting."
              />
              
              <p className="text-gray-600 mb-6">
                Join industry leaders, designers, and corporate trendsetters in Bangalore for a week of exclusive runway shows, panel discussions, and networking events that bridge the gap between corporate culture and high fashion.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F4F4F4] p-4 rounded-lg">
                  <div className="text-3xl font-serif font-bold text-[#F5C243]">15+</div>
                  <div className="text-[#1A2A40]">Runway Shows</div>
                </div>
                
                <div className="bg-[#F4F4F4] p-4 rounded-lg">
                  <div className="text-3xl font-serif font-bold text-[#F5C243]">30+</div>
                  <div className="text-[#1A2A40]">Industry Speakers</div>
                </div>
                
                <div className="bg-[#F4F4F4] p-4 rounded-lg">
                  <div className="text-3xl font-serif font-bold text-[#F5C243]">500+</div>
                  <div className="text-[#1A2A40]">Attendees</div>
                </div>
                
                <div className="bg-[#F4F4F4] p-4 rounded-lg">
                  <div className="text-3xl font-serif font-bold text-[#F5C243]">10+</div>
                  <div className="text-[#1A2A40]">Networking Events</div>
                </div>
              </div>
              
              <Link to="/events">
                <Button variant="secondary">
                  View All Events
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7691178/pexels-photo-7691178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fashion event in Bangalore" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F5C243] rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-[#1A2A40] rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-20 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Featured Events" 
            subtitle="Discover our curated selection of must-attend events during Corporate Fashion Week 2025."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/events/1">
              <FeaturedEventCard 
                title="Opening Gala & Keynote"
                date="June 23, 2025"
                description="An elegant evening at the Taj West End Bangalore, celebrating the intersection of corporate culture and high fashion with exclusive runway previews."
                image="https://images.pexels.com/photos/7691056/pexels-photo-7691056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Link>
            
            <Link to="/events/3">
              <FeaturedEventCard 
                title="Future of Workplace Fashion"
                date="June 23, 2025"
                description="Indian industry leaders share insights on how fashion influences corporate identity and workplace culture in Bangalore's thriving business ecosystem."
                image="https://images.pexels.com/photos/8108152/pexels-photo-8108152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Link>
            
            <Link to="/events/9">
              <FeaturedEventCard 
                title="Gala Dinner & Fashion Awards"
                date="June 25, 2025"
                description="Emerging Indian designers present collections specifically tailored for the modern corporate environment, blending traditional craftsmanship with contemporary styles."
                image="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button>
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#1A2A40] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Secure Your Spot at the Most Anticipated Fashion Event of 2025
              </h2>
              
              <p className="text-white/80 mb-8">
                Early bird tickets are now available with exclusive benefits and VIP access options. Don't miss your chance to be part of this transformative experience.
              </p>
              
              <Link to="/tickets">
                <Button size="lg" className="font-serif">
                  Book Tickets Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5C243]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5C243]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      </section>
    </div>
  );
}

interface FeaturedEventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

function FeaturedEventCard({ title, date, description, image }: FeaturedEventCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-52 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A40]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block bg-[#F5C243] text-[#1A2A40] px-3 py-1 text-sm font-medium rounded-full">
            {date}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium text-[#1A2A40] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-[#1A2A40] font-medium inline-flex items-center group">
          Learn More
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
    </motion.div>
  );
}
