import {ProfileModel} from '../../../models/ProfileModel';
import {initialProfileData} from './initialStates';
import {FIRST_LOAD} from '../actions/actionType';

const profileData = (state = initialProfileData, action: any): ProfileModel => {
    console.log("=============", action);
    switch (action.type) {
        case FIRST_LOAD:
            return {...state};
        default:
            return {...state};
    }
}

export default profileData;
