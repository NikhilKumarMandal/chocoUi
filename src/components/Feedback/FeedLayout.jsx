import React from "react";
import Navbar from "../Navbar/Navbar";
import FeedbackPage from "./Feedback";
import Footer from "../Footer/Footer";

const FeedLayout = () => {
  return (
    <div>
      <Navbar />
      <FeedbackPage />
      <Footer />
    </div>
  );
};

export default FeedLayout;
