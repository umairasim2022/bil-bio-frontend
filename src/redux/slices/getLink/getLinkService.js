import axios from 'axios'

const baseUrl = window.config.API_URL;
const gettingBioLink = async () => {
    const user = JSON.parse(localStorage.getItem('user')) || ''
    const userToken = user?.token;
    const userID = user?.userid
    const path = '/api/user/getLink';
    const url = baseUrl + path;
    const getLinkUrl = `${url}/${userID}/${userToken}`;
    const response = await axios.get(getLinkUrl)
    const getLinkresponse = response?.data?.response;
    const linkId = getLinkresponse[0]._id
    localStorage.setItem('linkId', linkId )
    return response.data
}
const gettingBioLinkService = {
    gettingBioLink
}

export default gettingBioLinkService