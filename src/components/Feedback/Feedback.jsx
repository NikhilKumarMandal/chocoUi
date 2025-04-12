import React, { useState } from "react";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRating = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🌟 Thanks for your feedback!");
    setFormData({ name: "", email: "", rating: 5, message: "" });
  };

  const emojis = ["😡", "😕", "😐", "😊", "😍"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-10 max-w-2xl w-full transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-2">We Value Your Feedback</h1>
        <p className="text-center text-gray-600 mb-8">Help us improve our UI library by sharing your experience</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How do you feel about our UI?</label>
            <div className="flex justify-between max-w-sm mx-auto text-3xl">
              {emojis.map((emoji, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleRating(index + 1)}
                  className={`transition transform hover:scale-110 ${
                    formData.rating === index + 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
              placeholder="Tell us what you liked or what can be improved..."
            />
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


