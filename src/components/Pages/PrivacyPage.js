import React from "react";
import privacyPDF from "../Documents/CAT_POLITICA_PRIVACITAT-2023.pdf";

function PrivacyPage() {
  return (
    <div className="pdf-viewer-container">
      <iframe
        src={privacyPDF}
        title="Privacy Policy"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default PrivacyPage;
