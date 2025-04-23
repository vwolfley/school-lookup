import { useEffect, useState } from "react";
// import getSchools from "../../../data/getAllSchools"
import getSchool from "../../../data/getSchool";

import SearchBox from "./searchbox";

function School() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!searchValue) {
      setData({});
      return;
    }
    // console.log("Searching for:", searchValue);
    // getSchools()
    getSchool(searchValue)
      .then((results) => {
        if (results.length) {
          setData(results[0]);
        } else {
          setData({});
        }
      })
      .catch((error) => {
        console.error("Error fetching schools:", error);
      });
  }, [searchValue]);
  // console.log(searchValue)

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">School Info from ADE</h1>
      <h2 className="text-lg font-semibold">
        For Fiscal Year: {data.fiscalYear}
      </h2>
      <div className="grid grid-cols-1 gap-12 p-4 md:grid-cols-3">
        {/* Left Column: Search Box */}
        <SearchBox onSearch={setSearchValue} />

        {/* Right Column: School Info */}
        <section className="space-y-4 md:col-span-2">
          <h2 className="mb-0 text-2xl font-semibold">
            {data.nameOfInstitution}
            <span className="ml-2 text-gray-500">
              {data.educationOrganizationId}
            </span>
          </h2>
          <h3 className="text-md font-medium">
            {data.districtName}
            <span className="ml-2 text-gray-500">{data.districtId}</span>
          </h3>

          <section>
            <h2 className="mb-2 text-xl font-semibold">School Details</h2>
            <ul className="space-y-1">
              <li>
                <strong>School Type:</strong> {data.schoolTypes}
              </li>
              <li>
                <strong>Grades Served:</strong> {data.gradesOffered}
              </li>
              <li>
                <strong>Model:</strong> {data.model || "N/A"}
              </li>
              <li>
                <strong>School Grade:</strong>{" "}
                {data.accountabilityLetterGrade || "N/A"}
              </li>
              <li>
                <strong>Title I Status:</strong> {data.isTitle1 ? "Yes" : "No"}
              </li>
              <li>
                <strong>CSI:</strong> {data.isCSI ? "Yes" : "No"}
              </li>
              <li>
                <strong>TSI:</strong> {data.isTSI ? "Yes" : "No"}
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}
export default School;
