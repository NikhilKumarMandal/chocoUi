import { Documentation } from "../components/Docs/Documentation";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const DocsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};
