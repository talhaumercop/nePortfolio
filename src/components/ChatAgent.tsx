'use client'
import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: any; // Declare voiceflow on the window object
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;

    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: "67cc67fb71a708d6b598bd79" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        }).then(() => { 
          window.voiceflow.chat.proactive.clear();
          window.voiceflow.chat.proactive.push({
            type: "text",
            payload: {message:"How can I help you?"},
          }); 
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return null; // The component only loads the script
};

export default Chatbot;
