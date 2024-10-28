"use client";
import React, { useState } from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const HelpBtn: React.FC = () => {
  const [showAlert, setShowAlert,] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    if (showAlert) {
      setShowAlert(false);
      
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <IoMdHelpCircleOutline onClick={handleClick} className="cursor-pointer" />
      {showAlert && (
        <Alert className="opacity-80 relative bottom-1">
          <Terminal className="h-4 w-4" onClick={handleAlertClose}/>
          <AlertTitle>Running Slow?</AlertTitle>
          <AlertDescription>
            Ensure hardware acceleration is enabled in your browser settings.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default HelpBtn;