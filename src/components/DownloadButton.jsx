import React from "react";

const DownloadButton = ({ onDownload }) => {
  return (
    <button className="bg-green-500 text-white p-3 rounded-lg hover:scale-105" onClick={onDownload}>
      Download Data
    </button>
  );
};

export default DownloadButton;
