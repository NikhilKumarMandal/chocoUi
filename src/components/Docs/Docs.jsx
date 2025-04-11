import React from "react";

const Docs = () => {
  return (
    <main className="flex-1 p-6 ">
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <p className="text-lg mb-6">Getting Started with SnappyUI.</p>

        <h3 className="text-xl font-semibold mb-3">Introduction</h3>
        <p className="mb-6">
          Welcome to <strong>Snappy UI</strong>, a comprehensive UI library and
          a set of unstable components designed to help you build beautiful and
          consistent user interfaces with ease.
        </p>
      </section>

      <section id="terminology" className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Terminology</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Component:</strong> A reusable piece of UI that can be used
            across different parts of your application.
          </li>
          <li>
            <strong>Props:</strong> Properties passed to components to customize
            their appearances and behavior.
          </li>
          <li>
            <strong>State:</strong> Data managed within a component that affects
            its rendering and behavior.
          </li>
        </ul>
      </section>

      <section id="faq" className="mb-12">
        <h3 className="text-xl font-semibold mb-3">FAQ</h3>
        <p className="mb-4">Some common questions you may encounter:</p>
        <ul className="space-y-4">
          <li>
            <strong>What is Snappy UI?</strong>
            <p className="mt-1 ml-4">
              A modern UI library for building responsive web applications with
              React.
            </p>
          </li>
          <li>
            <strong>How do I install Snappy UI?</strong>
            <p className="mt-1 ml-4">
              Run{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                npm install snappy-ui
              </code>{" "}
              in your project directory.
            </p>
          </li>
          <li>
            <strong>How do I use a component from Snappy UI?</strong>
            <p className="mt-1 ml-4">
              Import the component and use it in your JSX code.
            </p>
          </li>
          <li>
            <strong>
              Where can I find the documentation for each component?
            </strong>
            <p className="mt-1 ml-4">
              Check our official documentation website or GitHub repository.
            </p>
          </li>
          <li>
            <strong>How can I contribute to Snappy UI?</strong>
            <p className="mt-1 ml-4">
              Fork the repository, make your changes, and submit a pull request.
            </p>
          </li>
        </ul>
      </section>

      <section id="learn-more" className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Learn More</h3>
        <p>
          Explore our documentation to learn about all available components and
          their usage.
        </p>
      </section>

      <section id="community" className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Join the Community</h3>
        <p>
          Connect with other developers on our Discord server or GitHub
          discussions.
        </p>
      </section>

      <section id="license" className="mb-12">
        <h3 className="text-xl font-semibold mb-3">License</h3>
        <p>Snappy UI is open-source software licensed under the MIT license.</p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Thank You</h3>
        <p>We appreciate you choosing Snappy UI for your projects!</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Enjoy!</h3>
        <p>Happy coding with Snappy UI!</p>
      </section>
    </main>
  );
};

export default Docs;
