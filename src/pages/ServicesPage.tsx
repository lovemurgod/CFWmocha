import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

// Icon mapping for semantic icon prop values
const iconMap: Record<string, string> = {
  runway: 'https://cdn-icons-png.flaticon.com/512/803/803948.png',
  camera: 'https://cdn-icons-png.flaticon.com/512/482/482406.png',
  mic: 'https://cdn-icons-png.flaticon.com/512/709/709496.png',
  workshop: 'https://cdn-icons-png.flaticon.com/512/3176/3176296.png',
  event: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
  strategy: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
};

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              Corporate Fashion Week (CFW) is a multi-dimensional platform redefining professional style in India.
            </p>
            <div className="h-1 w-20 bg-[#F5C243]"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Overview Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We offer a range of services including inclusive fashion shows, brand photoshoots, and editorial features to help businesses showcase their products with impact. Through our modeling masterclasses, podcasts, and curated events, we empower individuals and brands to express confidence, creativity, and culture within the corporate fashion space. CFW also provides end-to-end event management, making it a one-stop destination for fashion-forward professionals and brands.
            </p>
            <div className="h-1 w-20 bg-[#F5C243] mx-auto mb-12"></div>
          </motion.div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <ServiceCard 
              title="Fashion Shows & Runways"
              description="Curated events celebrating inclusive corporate fashion across India."
              icon="runway"
              image="https://images.pexels.com/photos/7691178/pexels-photo-7691178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ServiceCard 
              title="Brand Photoshoots & Editorials"
              description="Professional shoots tailored for fashion, accessories, and lifestyle brands."
              icon="camera"
              image="https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ServiceCard 
              title="CFW Podcast"
              description="Conversations with industry leaders, models, designers & changemakers."
              icon="mic"
              image="https://images.pexels.com/photos/7241586/pexels-photo-7241586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ServiceCard 
              title="Modeling Masterclasses & Workshops"
              description="Training sessions for aspiring models to build confidence and portfolios."
              icon="workshop"
              image="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ServiceCard 
              title="Event Management & Curation"
              description="Bespoke fashion experiences, launches, and corporate collaborations."
              icon="event"
              image="https://images.pexels.com/photos/3760763/pexels-photo-3760763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ServiceCard 
              title="Consulting & Brand Strategy"
              description="Expert guidance on brand positioning within the corporate fashion ecosystem."
              icon="strategy"
              image="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#1A2A40] rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                  Partner With Us
                </h2>
                <p className="text-gray-300 mb-6">
                  Interested in our services for your brand or organization? Let's collaborate to create a unique fashion experience tailored to your needs.
                </p>
                <Button>
                  <span className="flex items-center">
                    Contact Our Team
                  </span>
                </Button>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Corporate fashion collaboration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Hear what our clients and partners have to say about working with Corporate Fashion Week."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="CFW helped our brand connect with the perfect audience. Their fashion show was impeccably organized and yielded amazing results for our corporate collection."
              author="Priya Sharma"
              company="Elegance Apparel, CEO"
              image="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <Testimonial 
              quote="The podcast series produced by CFW gave our brand incredible visibility in the corporate fashion space. Their team is professional and creative."
              author="Vikram Mehta"
              company="Metro Styles, Marketing Director"
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <Testimonial 
              quote="Their modeling workshops transformed our employees' confidence and presentation skills. CFW delivered beyond our expectations."
              author="Anjali Reddy"
              company="TechFusion India, HR Head"
              image="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

function ServiceCard({ title, description, icon, image }: ServiceCardProps) {
  // Map icon keyword to actual icon URL
  const iconUrl = iconMap[icon];

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
        {iconUrl && (
          <img 
            src={iconUrl}
            alt={`${title} icon`}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full p-2 shadow-lg z-10"
          />
        )}
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

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

function Testimonial({ quote, author, company, image }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-[#F4F4F4] rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-[#1A2A40]">{author}</h4>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <p className="italic text-gray-700">"{quote}"</p>
    </motion.div>
  );
}