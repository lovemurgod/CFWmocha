import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

// Mock data for ticket packages
const ticketPackages = [
  {
    id: 'standard',
    name: 'Standard Pass',
    price: 14999,
    features: [
      'Access to all general sessions',
      'Entry to 5 runway shows of your choice',
      'Welcome reception access',
      'Digital event program',
      'Exclusive event app access'
    ],
    recommended: false
  },
  {
    id: 'professional',
    name: 'Professional Pass',
    price: 24999,
    features: [
      'All Standard Pass benefits',
      'Access to all runway shows',
      'Industry networking events',
      'Lunch provided on all event days',
      'Access to speaker presentations',
      'Professional headshot session'
    ],
    recommended: true
  },
  {
    id: 'vip',
    name: 'VIP Pass',
    price: 39999,
    features: [
      'All Professional Pass benefits',
      'VIP seating at all events',
      'Exclusive VIP lounge access',
      'Private meet & greets with designers',
      'Gala dinner invitation',
      'Luxury gift bag valued at ₹9,000+',
      'Complimentary concierge service'
    ],
    recommended: false
  }
];

export default function TicketsPage() {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  
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
              Book Your Tickets
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              Secure your place at Corporate Fashion Week 2025 and experience the perfect blend of business and style.
            </p>
            <div className="h-1 w-20 bg-[#F5C243]"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Ticket Packages Section */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Choose Your Package" 
            subtitle="Select the ticket package that best suits your interests and objectives for Corporate Fashion Week 2025."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ticketPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedPackage === pkg.id 
                    ? 'border-[#F5C243] shadow-lg shadow-[#F5C243]/10 scale-105 z-10' 
                    : 'border-gray-200 hover:border-[#F5C243]/50'
                } ${pkg.recommended ? 'relative' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 inset-x-0 bg-[#F5C243] text-[#1A2A40] text-sm font-medium py-1 text-center">
                    Recommended
                  </div>
                )}
                
                <div className={`p-6 ${pkg.recommended ? 'pt-10' : ''}`}>
                  <h3 className="text-xl font-serif font-bold text-[#1A2A40] mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-serif font-bold text-[#1A2A40]">₹{pkg.price}</span>
                    <span className="text-gray-500 ml-1">/ person</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-[#F5C243] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={selectedPackage === pkg.id ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Booking Form */}
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Complete Your Booking" 
              subtitle="Fill out the form below to secure your tickets for Corporate Fashion Week 2025."
              centered
            />
            
            <form className="bg-[#F4F4F4] rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Selected Package:</h3>
                <div className="bg-white p-4 rounded-lg border border-[#F5C243]">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-serif font-bold text-[#1A2A40]">
                        {ticketPackages.find(pkg => pkg.id === selectedPackage)?.name}
                      </h4>
                      <p className="text-gray-600">
                        ₹{ticketPackages.find(pkg => pkg.id === selectedPackage)?.price} per person
                      </p>
                    </div>
                    <button 
                      type="button"
                      className="text-sm text-[#1A2A40] underline hover:text-[#F5C243]"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#1A2A40] font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-[#1A2A40] font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                    placeholder="Your last name"
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
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-[#1A2A40] font-medium mb-2">Company / Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="ticketQuantity" className="block text-[#1A2A40] font-medium mb-2">Number of Tickets</label>
                <select 
                  id="ticketQuantity" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C243] focus:border-transparent bg-white"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input 
                    type="checkbox" 
                    className="mt-1 text-[#F5C243] focus:ring-[#F5C243]"
                  />
                  <span className="ml-2 text-gray-600">
                    I agree to the <a href="#" className="text-[#1A2A40] underline hover:text-[#F5C243]">terms and conditions</a> and consent to the processing of my personal data as described in the <a href="#" className="text-[#1A2A40] underline hover:text-[#F5C243]">privacy policy</a>.
                  </span>
                </label>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[#1A2A40] font-medium">
                  Total: <span className="font-serif font-bold text-xl">₹{ticketPackages.find(pkg => pkg.id === selectedPackage)?.price}</span>
                </div>
                
                <Button size="lg">
                  Complete Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#F4F4F4]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about tickets, event access, and accommodation."
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem 
              question="When will I receive my tickets?" 
              answer="Upon completing your purchase, you will receive a confirmation email with your e-tickets. Physical badges will be available for pickup at the registration desk on the first day of the event."
            />
            
            <FAQItem 
              question="Are there group discounts available?" 
              answer="Yes, we offer special rates for groups of 5 or more attendees from the same organization. Please contact our ticket support team for more information."
            />
            
            <FAQItem 
              question="What is the refund policy?" 
              answer="Tickets are refundable up to 30 days before the event with a 15% processing fee. Within 30 days of the event, tickets are non-refundable but may be transferred to another attendee."
            />
            
            <FAQItem 
              question="Is accommodation included in the ticket price?" 
              answer="No, accommodation is not included in the ticket price. However, we have negotiated special rates with partner hotels. Details will be provided in your confirmation email."
            />
            
            <FAQItem 
              question="Can I upgrade my ticket package later?" 
              answer="Yes, you can upgrade your ticket package at any time before the event, subject to availability. You will only need to pay the difference between the packages."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg text-[#1A2A40]">{question}</h3>
        <svg 
          className={`w-5 h-5 text-[#F5C243] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div 
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
