import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { reviews } from './reviews';

export const fetchReviews = () => dispatch => {
    return fetch(baseUrl + 'reviews')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchActivities = () => dispatch => {

    dispatch(activitiesLoading());

    return fetch(baseUrl + 'activities')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(addActivities(campsites)))
        .catch(error => dispatch(activitiesFailed(error.message)));
};
export const activitiesLoading = () => ({
    type: ActionTypes.ACTIVITIES_LOADING
});

export const activitieFailed = errMess => ({
    type: ActionTypes.ACTIVITIES_FAILED,
    payload: errMess
});

export const addActivities = activities => ({
    type: ActionTypes.ADD_ACTIVITIES,
    payload: activitie
});

export const fetchPartners = () => dispatch => {
    
    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});
