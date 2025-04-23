import { executeQueryJSON } from "@arcgis/core/rest/query"

async function fetchData() {
  const queryUrl = "https://geo.azmag.gov/arcgis/rest/services/education/school_lookup/MapServer/0"

  try {
    const response = await executeQueryJSON(queryUrl, {
      where: "1=1",
      outFields: ["*"],
      returnGeometry: false,
    })

    // console.log(response.features)
    return response.features
  } catch (error) {
    console.error("Error fetching schools info:", error)
    return []
  }
}

async function getData() {
  const validFeatures = await fetchData()
//   console.log(validFeatures)

  return validFeatures.map(({ attributes }) => {
    return {
      ...attributes,
    }
  })
}

export default getData
