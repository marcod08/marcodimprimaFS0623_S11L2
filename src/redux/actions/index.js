export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const GET_JOBS = 'GET_JOBS';

export const addToFavouriteAction = favourites => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: favourites,
    }
}

export const removeFromFavourite = i => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: i,
    }
}

export const getJobsAction = () => {
    return async dispatch => {
        try {
            let resp = await fetch(
                'https://strive-benchmark.herokuapp.com/api/jobs?search='
            );
            if (resp.ok) {
                let fetchedJobs = await resp.json();
                dispatch ({
                    type: GET_JOBS,
                    payload: fetchedJobs,
                });
            } else {
                throw new Error ('Errore nel recupero dati');
            }
        } catch (error) {
            console.log(error);
        }
    }
}