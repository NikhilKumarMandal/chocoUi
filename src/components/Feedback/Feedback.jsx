import React from "react";
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
      await feedback(data);
      toast("🌟 Thanks for your feedback!");
      reset();
    } catch (error) {
      console.error(error);
      toast("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-12 border border-white/30">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-2">
          Share Your Feedback 💬
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          We’d love to hear your thoughts and improve your experience.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name")}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="What can we improve or what did you love?"
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
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
