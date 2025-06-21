import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#1A2A40]'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-20 ${centered ? 'mx-auto' : ''} bg-[#F5C243] mt-4`}></div>
    </motion.div>
  );
}
