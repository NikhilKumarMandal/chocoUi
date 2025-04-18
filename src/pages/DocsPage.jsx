import { Documentation } from "../components/Docs/Documentation";
import Footer from "../components/Footer/Footer";
import NavbarV2 from "../components/Navbar/NavbarV2";

export const DocsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarV2 />
      <main className="flex-grow">
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};
