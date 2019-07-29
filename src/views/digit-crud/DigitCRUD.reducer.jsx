import {
    clear,
    readAllSuccessfully,
    readOneSuccessfully
} from "./DigitCRUD.actions";

const createCRUDReducer = name => (state = { one: {}, all: [] }, action) => {
    switch (action.type) {
        case readAllSuccessfully(name):
            console.log("READ ALL");
            console.log({
                one: {},
                all: action.payload.data
            });
            return {
                one: {},
                all: action.payload.data
            };
        case readOneSuccessfully(name):
            console.log("READ ONE");
            return {
                one: action.payload.data,
                all: []
            };
        case clear(name):
            console.log("CLEAR");
            return {
                one: {},
                all: []
            };
        default:
            console.log("DEFAULT");
            return state;
    }
};

export default createCRUDReducer;
