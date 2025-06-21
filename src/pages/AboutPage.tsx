import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function AboutPage() {
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
              About CFW2025
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              India's premier talent agency dedicated to celebrating diversity, confidence, and innovation in professional fashion.
            </p>
            <div className="h-1 w-20 bg-[#F5C243]"></div>
          </motion.div>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="Our Mission" 
                subtitle="Redefining corporate style and elevating the fashion landscape with confidence and authenticity."
              />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Corporate Fashion Week (CFW) is India's premier talent agency dedicated to celebrating diversity, confidence, and innovation in professional fashion. Our platform offers a wide range of services, from curating fashion shows and producing engaging podcasts to orchestrating captivating print shoots and showcasing brands that redefine corporate style. We empower individuals and businesses to embrace diversity, regardless of age, gender, body type, or background.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                At CFW, our team is committed to redefining the fashion industry by providing inclusive opportunities for talented individuals. Our services aim to revolutionize the perception of corporate fashion, setting new standards for workplace confidence and individual expression.
              </p>
              
              <Button variant="secondary">
                Join Our Mission
              </Button>
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
                  src="https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Corporate Fashion Week Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F5C243] rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-[#1A2A40] rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Story" 
            subtitle="A journey of passion, creativity, and a relentless pursuit of inclusivity."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center">
              Our story is one of passion, creativity, and a relentless pursuit of inclusivity. We strive to stand out among our peers by offering a unique platform that embraces diversity and fosters innovation. Join us in our mission to redefine corporate style and elevate the fashion landscape with confidence and authenticity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <TimelineItem 
                year="2020"
                title="The Beginning"
                description="CFW was founded with a vision to transform India's corporate fashion landscape."
              />
              
              <TimelineItem 
                year="2022"
                title="Expanding Horizons"
                description="Launched our first national event series across major Indian cities."
              />
              
              <TimelineItem 
                year="2025"
                title="Setting New Standards"
                description="Preparing for our largest and most inclusive CFW yet in Bangalore."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The passionate professionals behind Corporate Fashion Week."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Aarav Sharma"
              role="Founder & Creative Director"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TeamMember 
              name="Meera Patel"
              role="Head of Events"
              image="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TeamMember 
              name="Vikram Singhania"
              role="Marketing Director"
              image="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TeamMember 
              name="Priya Reddy"
              role="Talent Relations"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
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
                Join Us in Redefining Corporate Fashion
              </h2>
              
              <p className="text-white/80 mb-8">
                Whether you're a brand looking to collaborate or an individual wanting to be part of our journey, we'd love to hear from you.
              </p>
              
              <Button size="lg" className="font-serif">
                Get In Touch
              </Button>
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

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#F5C243] text-[#1A2A40] text-2xl font-serif font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {year}
      </div>
      <h3 className="text-xl font-medium text-[#1A2A40] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px] border-4 border-[#F5C243]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-serif font-medium text-[#1A2A40] mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  );
}
