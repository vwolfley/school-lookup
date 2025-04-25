import { useEffect, useState } from "react";
// import getSchools from "../../../data/getAllSchools"
import getSchool from "../../../data/getSchool";
import getDistrict from "../../../data/getDistrict";

import SearchBox from "./searchbox";
import SchoolList from "./school-list";

function School() {
  const [schoolData, setSchoolData] = useState({});
  const [districtData, setDistrictData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue) {
      setSchoolData({});
      setDistrictData({});
      return;
    }

    const fetchData = async () => {
      try {
        const results = await getSchool(searchValue);

        if (results.length) {
          const school = results[0];
          setSchoolData(school);

          if (school.leaEducationOrganizationId) {
            const district = await getDistrict(
              school.leaEducationOrganizationId,
            );
            setDistrictData(district || {});
          } else {
            setDistrictData({});
          }
        } else {
          setSchoolData({});
          setDistrictData({});
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData({});
        setDistrictData({});
      }
    };

    fetchData();
  }, [searchValue]);
  // console.log(searchValue)
  // console.log(schoolData)
  console.log(districtData)

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">School Info from ADE</h1>
      <h2 className="text-lg font-semibold">
        For Fiscal Year: {schoolData.fiscalYear}
      </h2>
      <div className="grid grid-cols-1 gap-12 p-4 md:grid-cols-3">
        {/* Left Column: Search Box */}
        <SearchBox onSearch={setSearchValue} />

        {/* Right Column: School Info */}
        <section className="space-y-4 md:col-span-1">
          <h2 className="mb-0 text-2xl font-semibold">
            {schoolData.nameOfInstitution}
            <span className="ml-2 text-gray-500">
              {schoolData.educationOrganizationId}
            </span>
          </h2>
          <h3 className="text-md font-medium">
            {schoolData.districtName}
            <span className="ml-2 text-gray-500">{schoolData.districtId}</span>
          </h3>

          <section>
            <h2 className="mb-2 text-xl font-semibold">School Details</h2>
            <ul className="space-y-1">
              <li>
                <strong>School Type:</strong> {schoolData.schoolTypes}
              </li>
              <li>
                <strong>Grades Served:</strong> {schoolData.gradesOffered}
              </li>
              <li>
                <strong>Model:</strong> {schoolData.model || "N/A"}
              </li>
              <li>
                <strong>School Grade:</strong>{" "}
                {schoolData.accountabilityLetterGrade || "N/A"}
              </li>
              <li>
                <strong>Title I Status:</strong> {schoolData.isTitle1 ? "Yes" : "No"}
              </li>
              <li>
                <strong>CSI:</strong> {schoolData.isCSI ? "Yes" : "No"}
              </li>
              <li>
                <strong>TSI:</strong> {schoolData.isTSI ? "Yes" : "No"}
              </li>
            </ul>
          </section>
        </section>
        <SchoolList districtData={districtData} />
      </div>
    </section>
  );
}
export default School;
