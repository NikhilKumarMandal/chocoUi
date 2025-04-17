import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { feedback } from "../../http/api";
import { toast } from "sonner";

const feedbackSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string().max(50, "Name should be less than 50 characters"),
  message: z.string().max(550, "Message should be less than 550 characters"),
});

const FeedbackPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await feedback(data);
      toast("🌟 Thanks for your feedback!");
      reset();
    } catch (error) {
      console.error(error);
      toast("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl px-6 py-8 sm:px-10 sm:py-12 border border-white/30 mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#ac8b6a]  mb-3">
          Share Your Feedback 💬
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 px-2 mt-6 sm:px-6">
          We’d love to hear your thoughts and improve your experience.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white text-sm sm:text-base"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white text-sm sm:text-base"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white text-sm sm:text-base resize-none"
              placeholder="What can we improve or what did you love?"
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-semibold text-base sm:text-lg shadow-lg transition duration-300 ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#603F26] text-[#FFDBB5] hover:bg-[#6C4E31]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
