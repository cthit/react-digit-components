function gammaUser(state = { loading: true }, action) {
    switch (action.type) {
        case "GAMMA_USER_GET_LOADING":
            return {
                loading: true
            };
        case "GAMMA_USER_GET_TOKEN_FAILED":
        case "GAMMA_USER_GET_FAILED":
            return {
                loading: false,
                error: true
            };
        case "GAMMA_USER_GET_SUCCESSFULLY": {
            return {
                user: {
                    ...action.payload
                },
                loading: false,
                error: false
            };
        }
        default:
            return state;
    }
}

export default gammaUser;
