import React, { useEffect, useRef } from "react";

const ElevenLabsWidget = () => {
  const widgetRef = useRef(null); // Remove type annotation

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;

    script.onload = () => {
      if (widgetRef.current) {
        const widget = document.createElement("elevenlabs-convai");
        widget.setAttribute("agent-id", "UtLqkPyHKA5dB71u9rfk");
        widgetRef.current.appendChild(widget);
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-64 bg-[#e0e0e0] rounded-lg flex items-center justify-center">
      <div ref={widgetRef}></div>
    </div>
  );
};

export default ElevenLabsWidget;