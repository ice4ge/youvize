import {FIRST_LOAD, ADD_PROFILE} from './actionType';

export const firstLoad = () => {
    return {
        type: FIRST_LOAD,
    }
}

export const addProfile = () => {
    return {
        type: ADD_PROFILE,
    }
}
