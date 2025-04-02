export const Introduction = () => (
  <section>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
    <div className="space-y-6 text-gray-700 ">
      <p>
        ChocoUI is a collection of beautifully designed React components built
        with Tailwind CSS that can be easily customized to match your brand's
        look and feel.
      </p>

      <div className="bg-blue-50  border border-blue-200  rounded-lg p-4">
        <h3 className="font-medium text-blue-800  mb-2">Key Features</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>40+ customizable components</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Built with Tailwind CSS</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Dark mode support</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Fully accessible (WAI-ARIA compliant)</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
