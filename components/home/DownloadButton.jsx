"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const handleDownload = () => {
  const fileUrl = "/assets/resume/miguelbarreto-cv.pdf";
  const fileName = "cv_miguel_barreto.pdf";

  // Create a hidden link to download the file
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Open the file in a new tab
  setTimeout(() => {
    window.open(fileUrl, "_blank");
  }, 500);
};

const DownloadButton = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Descargar CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
