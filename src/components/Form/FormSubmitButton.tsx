import React from "react";
import { Button } from "../ui/button";

const FormSubmitButton = ({ text }: { text: string }) => {
  return (
    <div>
      <Button
        type="submit"
        className="bg-emerald-400 hover:bg-emerald-500 w-full"
      >
        {text}
      </Button>
    </div>
  );
};

export default FormSubmitButton;
