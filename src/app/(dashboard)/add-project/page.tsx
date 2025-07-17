/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import FormArrayInput from "@/components/Form/FormArrayInput";
// import FormInput, { FormInputType } from "@/components/Form/FormInput";
// import FormProviders from "@/components/Form/FormProviders";
// import FormSubmitButton from "@/components/Form/FormSubmitButton";
// import React from "react";

// const phaseOption = [
//   "API+Integration",
//   "Deployment",
//   "R&D",
//   "UI/UX",
//   "Frontend",
//   "AI Implement",
// ];

// const page = () => {
//   const onSubmit = async (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div className="w-full h-[94vh] flex flex-col">
//       {" "}
//       {/* Full screen height */}
//       <div className=" shadow ">
//         <h1 className="text-center text-2xl font-bold text-emerald-400 mb-2">
//           Add New Project
//         </h1>
//       </div>
//       <div className="flex-1 mt-3 overflow-y-auto px-4">
//         {" "}
//         {/* Scrollable area */}
//         <FormProviders onFormSubmit={onSubmit}>
//           <FormInput name="projectName" label="Project Name" />
//           <FormInput name="clientName" label="Client Name" />
//           <FormInput name="teamGroupLink" label="Team Group Link" />
//           <FormInput name="googleSheetLink" label="Google Sheet link" />
//           <FormInput name="figmaLink" label="Figma Link" />
//           <FormInput name="budget" label="Budget" type={FormInputType.Number} />
//           <FormArrayInput
//             name="phase"
//             label="Phase"
//             phaseOptions={phaseOption}
//           />
//           <FormSubmitButton text="Add New Project"></FormSubmitButton>
//         </FormProviders>
//       </div>
//     </div>
//   );
// };

// export default page;

import { BaseForm } from "@/components/ShadCN_Form/BaseForm";
import { FormInput } from "@/components/ShadCN_Form/FormInput";
import { FormInputArray } from "@/components/ShadCN_Form/FormInputArrayProps";
import React from "react";

const page = () => {
  const handleSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="h-[calc(100vh-112.5px)]">
      <div className="p-4 shadow font-bold text-center">Add Project</div>
      <div className=" h-full  overflow-y-auto pb-2">
        <BaseForm
          onSubmit={handleSubmit}
          defaultValues={{
            name: "", // ✅ string not undefined
            client_name: "",
            budget: "",
            sheet_link: "",
            team_link: "",
            phases: [{ phase_name: "", phase_budget: "", deadline: "" }],
          }}
        >
          <FormInput name="name" label="Project Name"></FormInput>
          <FormInput
            name="client_name"
            label="Client Name"
            type="text"
          ></FormInput>
          <FormInput name="budget" label="Budget"></FormInput>
          <FormInput name="sheet_link" label="Google Sheet Link"></FormInput>
          <FormInput name="team_link" label="Team Group Link"></FormInput>
          <FormInputArray
            name="phases"
            label="Phases"
            fields={[
              {
                name: "phase_name",
                label: "Phase Name",
                type: "select",
                options: [
                  { label: "Design", value: "design" },
                  { label: "Development", value: "development" },
                  { label: "Testing", value: "testing" },
                ],
              },
              {
                name: "phase_budget",
                label: "Budget",
                type: "number",
                placeholder: "e.g. 1000",
              },
              {
                name: "deadline",
                label: "Deadline",
                type: "date",
                placeholder: "e.g. ",
              },
            ]}
          ></FormInputArray>
        </BaseForm>
      </div>
    </div>
  );
};

export default page;
