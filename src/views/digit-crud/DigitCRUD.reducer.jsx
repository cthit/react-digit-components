import {
    clear,
    readAllSuccessfully,
    readOneSuccessfully
} from "./DigitCRUD.actions";

const createCRUDReducer = name => (state = { one: {}, all: [] }, action) => {
    switch (action.type) {
        case readAllSuccessfully(name):
            return {
                one: {},
                all: action.payload.data
            };
        case readOneSuccessfully(name):
            return {
                one: action.payload.data,
                all: []
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
