const GET_LIST = 'INDEX/GET_LIST'

const changeList = list => ({
    type: GET_LIST,
    list
})

export const getIndexList = server => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/student/list')
            .then((res) => {
                const { list } = res.data;
                dispatch(changeList(list))
            })
    }
}

const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...defaultState,
                list: action.list
            };
            return newState
        default:
            return state
    }
}