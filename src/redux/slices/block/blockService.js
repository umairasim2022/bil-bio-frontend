import axios from 'axios'

const baseUrl = window.config.API_URL;
const creatingHeadingBlock = async (state) => {
    const linkid = localStorage.getItem('linkId')
    const token = JSON.parse(localStorage.getItem('user')).token
    const userID = JSON.parse(localStorage.getItem('user')).userid
    const coloumnValue = state.coloum_value;
    const coloumnType = state?.coloum_type || null

    const columnName = state.columnName
    const headingCustomizationData = {
        coloumnValue,
        coloumnType,
        columnName,
        linkid
    }
    const path = `/api/user/customizeDashboard/${userID}/${token}`;
    // const url = baseUrl + path;
    const response = await axios.post(path, headingCustomizationData)
    console.log('linkResp@', response)
    return response.data
}
const blockService = {
    creatingHeadingBlock
}

export default blockService