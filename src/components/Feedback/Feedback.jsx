import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { feedback } from "../../http/api"; 

const feedbackSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string().max(50, "Name should be less than 50 characters"),
  message: z.string().max(550, "Message should be less than 550 characters"),
});

const FeedbackPage = () => {
  const [rating, setRating] = useState(5);

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
    try {
      await feedback({ ...data, rating });
      alert("🌟 Thanks for your feedback!");
      reset();
      setRating(5);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again!");
    }
  };

  const emojis = ["😡", "😕", "😐", "😊", "😍"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-10 max-w-2xl w-full transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-2">We Value Your Feedback</h1>
        <p className="text-center text-gray-600 mb-8">Help us improve our UI library by sharing your experience</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How do you feel about our UI?</label>
            <div className="flex justify-between max-w-sm mx-auto text-3xl">
              {emojis.map((emoji, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className={`transition transform hover:scale-110 ${
                    rating === index + 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="Tell us what you liked or what can be improved..."
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;



