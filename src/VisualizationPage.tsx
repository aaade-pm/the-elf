import React from "react";

const VisualizationPage: React.FC = () => {
  return (
    <div className="p-6 bg-snow min-h-screen font-body">
      <h1 className="text-4xl font-festive text-christmas-red mb-6 text-center">
        Tailwind Theme Visualization
      </h1>

      {/* Colors Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-christmas-green mb-4">
          🎨 Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-christmas-red rounded-full"></div>
            <p className="mt-2 text-sm">christmas-red</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-christmas-green rounded-full"></div>
            <p className="mt-2 text-sm">christmas-green</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gold rounded-full"></div>
            <p className="mt-2 text-sm">gold</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-snow rounded-full border"></div>
            <p className="mt-2 text-sm">snow</p>
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gold mb-4">🌈 Gradients</h2>
        <div className="h-24 rounded-lg bg-gradient-to-christmas shadow-md"></div>
        <p className="text-sm text-center mt-2">gradient-to-christmas</p>
      </section>

      {/* Fonts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-christmas-red mb-4">
          🖋 Fonts
        </h2>
        <div className="space-y-4">
          <p className="text-lg font-festive text-christmas-green">
            Festive Font: "Merry Christmas! 🎄"
          </p>
          <p className="text-lg font-body text-gray-700">
            Body Font: "Happy Holidays! 🎅"
          </p>
        </div>
      </section>

      {/* Box Shadows Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-christmas-green mb-4">
          ✨ Box Shadows
        </h2>
        <div className="flex space-x-6">
          <div className="w-24 h-24 bg-white rounded-lg shadow-soft-red flex items-center justify-center">
            <p className="text-xs text-christmas-red">soft-red</p>
          </div>
          <div className="w-24 h-24 bg-white rounded-lg shadow-soft-green flex items-center justify-center">
            <p className="text-xs text-christmas-green">soft-green</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualizationPage;
