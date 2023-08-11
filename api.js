const getBuildindingById = (buildingId) => {
    const apiurl = `api/v1/building/${buildingId}`
    return axios.get(apiurl)
}