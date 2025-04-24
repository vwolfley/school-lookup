/*
*****************************************
 Get district data from the ArcGIS API
*****************************************
*/
import { executeQueryJSON } from "@arcgis/core/rest/query";

async function fetchData(searchValue) {
    const queryUrl =
        "https://geo.azmag.gov/arcgis/rest/services/education/school_lookup/MapServer/0";

    // Check if searchValue is a number (ID) or string (name)
    const isNumeric = /^\d+$/.test(searchValue);
    const where = `leaEducationOrganizationId = ${searchValue}`

    try {
        const response = await executeQueryJSON(queryUrl, {
            where,
            outFields: ["*"],
            returnGeometry: false,
        });

        // console.log(response.features)
        return response.features;
    } catch (error) {
        console.error("Error fetching district info:", error);
        return [];
    }
}

async function getData(searchValue) {
    const validFeatures = await fetchData(searchValue);
    //   console.log(validFeatures)

    return validFeatures.map(({ attributes }) => {
        return {
            ...attributes,
        };
    });
}

export default getData;
