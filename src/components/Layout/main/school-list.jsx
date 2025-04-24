// school-list.jsx
import { useState } from "react";

function SchoolList({ districtData }) {
  return (
    <section className="space-y-4 md:col-span-3">
      <h2 className="text-xl font-semibold">District List of Schools</h2>
      <p className="text-gray-600">
        {districtData.length} schools found in this district.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {districtData.map((school) => (
          <div
            key={school.educationOrganizationId}
            className="rounded-lg bg-white p-4 shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {school.nameOfInstitution}
            </h3>
            <p className="text-gray-600">
              ID: {school.educationOrganizationId}
            </p>
            <p className="text-gray-600">Type: {school.institutionType}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default SchoolList;
