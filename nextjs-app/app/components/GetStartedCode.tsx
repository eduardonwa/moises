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
    <div className="">
      hola Dios
    </div>
  );
}
