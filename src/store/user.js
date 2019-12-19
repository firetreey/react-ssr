const GET_INFO = 'INDEX/GET_INFO'

const changeInfo = userInfo => ({
    type: GET_INFO,
    userInfo
})

export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/user/info')
            .then((res) => {
                const {info} = res.data;
                dispatch(changeInfo(info))
            })
    }
}

const defaultState = {
    userInfo: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_INFO:
            const newState = {
                ...defaultState,
                userInfo: action.userInfo
            };
            return newState
        default:
            return state
    }
}