import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact } from '../../http/api';
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const PreviewCard = ({ index, isHovered, onHover }) => {
  const zIndex = 3 - index;
  const yOffset = index * 30;
  const xOffset = index * -40;
  const hoverOffset = index === 1 ? -60 : 0;
  const scale = 1 - (index * 0.05);

  return (
    <motion.div
      className="relative w-[90%] max-w-[500px]"
      style={{ 
        zIndex,
        position: 'absolute',
        left: `${xOffset}px`,
      }}
      animate={{
        y: isHovered ? hoverOffset : yOffset,
        scale: isHovered ? (index === 1 ? 1.05 : 1) : scale,
        x: isHovered ? (index * -40) : xOffset,
      }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-[#FFDBB5]">
        <div className="bg-[#603F26] p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FFEAC5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFDBB5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6C4E31]"></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FFEAC5]/20 to-white p-6">
          <div className="space-y-2">
            <div className="h-3 bg-[#6C4E31]/10 rounded w-3/4"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/2"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-5/6"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/3"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-2/3"></div>
          </div>
          <div className="mt-6 p-4 border border-[#6C4E31]/20 rounded-lg bg-white">
            <div className="h-20 bg-[#FFDBB5]/30 rounded-md flex items-center justify-center">
              <div className="w-24 h-6 bg-[#603F26] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FFDBB5]/30 rounded-xl -z-10"></div>
      <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#6C4E31]/10 rounded-xl -z-10"></div>
    </motion.div>
  );
};


const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const Hero2 = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [animateSuccess, setAnimateSuccess] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);

    const {
      handleSubmit,
      register,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
    });

  const onSubmit = async (data) => {
    try {
      await contact(data);
      toast("🌟 We will reach out to you!");
      reset();
    } catch (error) {
      toast(error);
    }
  };



  return (
    <section className="relative bg-gradient-to-br from-[#2A1B10] to-[#3C2613] rounded-4xl overflow-hidden py-10 md:py-16">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FFDBB5]/5 blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#6C4E31]/10 blur-3xl translate-x-20 translate-y-20"></div>
      
      <div className="container mx-10 lg:mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full mr-20 lg:w-2/3 px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFDBB5] mb-6 font-['Bricolage']">
                <span className="font-['InstrumentSerif'] text-[#FFDBB5]/90 font-normal italic">
                  Design
                </span>{' '}
                with Confidence
              </h2>
              <p className="text-base md:text-lg text-[#FFDBB5]/80 mb-8 max-w-lg font-['Inter'] leading-relaxed">
                Create stunning interfaces with our customizable components. Build faster and{' '}
                <span className="font-medium text-[#FFDBB5]">deliver better</span> experiences.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-['Inter'] text-[#FFDBB5]/90">
                  Contact us for customized components
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md" noValidate>
                  <div className="relative flex-1">
                    <motion.input
                      {...register("email")}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 bg-[#3C2613]/50 backdrop-blur-sm border-2 rounded-xl text-[#FFDBB5] placeholder-[#FFDBB5]/60 focus:outline-none transition-all duration-300 ${
                        isValidEmail 
                          ? 'border-[#FFDBB5]/30 focus:border-[#FFDBB5]/60' 
                          : 'border-red-400/60 focus:border-red-400/80'
                      }`}
                      animate={animateSuccess ? {
                        scale: [1, 1.05, 1],
                        borderColor: ['#FFDBB54D', '#4CAF50', '#FFDBB54D']
                      } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <AnimatePresence>
                      {showSuccess && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {!isValidEmail && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute left-0 -bottom-6"
                        >
                          <p className="text-red-300 text-sm font-medium flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Please enter a valid email address
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#603F26] text-[#FFDBB5] rounded-xl font-medium hover:bg-[#6C4E31] transition-all duration-300 flex items-center gap-2 group"
                  >
                    Send
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 px-4 lg:px-8 md:block hidden">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[500px] h-[350px] ml-25 lg:mx-0">
                {[0, 1, 2].map((index) => (
                  <PreviewCard
                    key={index}
                    index={index}
                    isHovered={isHovered}
                    onHover={setIsHovered}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 48H1440V24C1296 40 1092 48 720 48C348 48 144 40 0 24V48Z" fill="#f8f8f8" fillOpacity="0.05" />
        </svg>
      </div>
    </section>
  );
};

export default Hero2;