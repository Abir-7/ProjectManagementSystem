import React from "react";
import { Button } from "../ui/button";

const FormSubmitButton = ({ text }: { text: string }) => {
  return (
    <div>
      <Button type="submit" className="bg-gray-900 hover:bg-gray-800 w-full">
        {text}
      </Button>
    </div>
  );
};

export default FormSubmitButton;
