const mockApiData = [
    {
        id: 1,
        name: 'Track 1'
    },
    {
        id: 2,
        name: 'Track 2'
    },
    {
        id: 3,
        name: 'Track 3'
    }
];

export const getTracks = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('I got actions');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
        }, 2000);
    }
};