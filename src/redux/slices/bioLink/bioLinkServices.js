import axios from 'axios'
import { debuglog } from 'util';

const baseUrl = window.config.API_URL;
const creatingBioLink = (createdBioLinkData) => {

    // router.post("/createLink/:userid/:token", DashboardController.createLink);
    // token and id  getting from registered user 
    const tag = {
        tag: 'main'
    }
    const registeredUserID = createdBioLinkData?.registeredUserID;
    console.log('registeredUserID', registeredUserID)
    const registeredToken = createdBioLinkData?.registeredToken;
    console.log('registeredToken', registeredToken)

    const path = '/api/user/createLink';
    const url = baseUrl + path;
    const createlink = `${url}/${registeredUserID}/${registeredToken}`;
    console.log('link', createlink);
    const response = axios.post(createlink, tag)
    if (response) {
        localStorage.removeItem('user')
    }
    return response.data

}
const bioLinkCreationService = {
    creatingBioLink
}

export default bioLinkCreationService