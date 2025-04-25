// school-list.jsx
import { useState } from "react";

function SchoolList({ districtData }) {
  return (
    <section className="space-y-1 md:col-span-1">
      <h2 className="text-xl font-semibold">District List of Schools</h2>
      <p className="text-gray-600">
        {districtData.length} schools found in this district.
      </p>
      <div className="flex flex-col">
        {Array.isArray(districtData) ? (
          districtData.map((school) => (
            <div
              key={school.educationOrganizationId}
              className="flex items-center gap-x-4"
            >
              <span className="text-gray-600">
                ID: {school.educationOrganizationId}
              </span>
              <span className="text-lg font-semibold">
                {school.nameOfInstitution}
              </span>
            </div>
          ))
        ) : (
          <div className="rounded-lg bg-white p-4 shadow-md">
            <p className="text-gray-600">No schools found in this district.</p>
          </div>
        )}
      </div>
    </section>
  );
}
export default SchoolList;
