import { useState } from "react";

interface IProject {
  name: string;
  client: string;
  status: string;
  startDate: string;
  endDate: string;
}

// 30 demo projects
const demoProjects: IProject[] = Array.from({ length: 30 }, (_, i) => ({
  name: `Project ${i + 1}`,
  client: `Client ${i + 1}`,
  status: i % 3 === 0 ? "Completed" : i % 3 === 1 ? "In Progress" : "Pending",
  startDate: `2025-0${(i % 12) + 1}-01`,
  endDate: `2025-0${(i % 12) + 1}-28`,
}));

const ManageProjectSupervisor = () => {
  const [projects] = useState<IProject[]>(demoProjects);

  return (
    <div className="p-4">
      <div className="border rounded-lg shadow-md  h-[calc(100vh-199px)] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white sticky top-0 z-20 ">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Project Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Client Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Start Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                End Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {project.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {project.client}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {project.status}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {project.startDate}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {project.endDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProjectSupervisor;
