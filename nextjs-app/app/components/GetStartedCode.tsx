"use client";

import { useState } from "react";

export default function GetStartedCode() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "npm create sanity@latest -- --template sanity-io/sanity-template-nextjs-clean",
    );
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="inline-flex rounded-full shadow-xl md:whitespace-nowrap bg-gray-900 px-4 py-2 lg:pl-6 lg-pr:5 md:py-4 text-white text-sm lg:text-base mt-6 font-mono gap-4 items-center">
      hola Dios
    </div>
  );
}
