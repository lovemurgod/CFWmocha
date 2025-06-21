import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  location: string;
  presenter?: string;
  image?: string;
}

export default function EventCard({ title, time, date, location, presenter, image }: EventCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A40] to-[#2a4366] flex items-center justify-center">
            <span className="text-[#F5C243] font-serif text-2xl">{title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute top-0 right-0 bg-[#F5C243] text-[#1A2A40] px-3 py-1 font-medium">
          {time}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{date}</span>
          
          <svg className="w-4 h-4 ml-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>{location}</span>
        </div>
        
        <h3 className="text-[#1A2A40] font-serif text-xl font-medium mb-2">{title}</h3>
        
        {presenter && (
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Presenter:</span> {presenter}
          </p>
        )}
        
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
    </motion.div>
  );
}
