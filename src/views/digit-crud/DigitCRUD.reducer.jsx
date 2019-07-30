import {
    clear,
    readAllFailed,
    readAllLoading,
    readAllSuccessfully,
    readOneFailed,
    readOneLoading,
    readOneSuccessfully
} from "./DigitCRUD.actions";

const createCRUDReducer = name => (state = { one: {}, all: [] }, action) => {
    switch (action.type) {
        case readAllLoading(name):
            return {
                one: {},
                all: [],
                loading: true
            };
        case readAllSuccessfully(name):
            return {
                one: {},
                all: action.payload.data,
                loading: false
            };
        case readAllFailed(name):
            return {
                one: {},
                all: [],
                error: true
            };

        case readOneLoading(name):
            return {
                one: {},
                all: [],
                loading: true
            };
        case readOneSuccessfully(name):
            return {
                one: action.payload.data,
                all: []
            };
        case readOneFailed(name):
            return {
                one: {},
                all: [],
                error: true
            };

        case clear(name):
            return {
                one: {},
                all: []
            };
        default:
            return state;
    }
};

export default createCRUDReducer;
