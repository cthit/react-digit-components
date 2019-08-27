import {
    clear,
    readAllFailed,
    readAllLoading,
    readAllSuccessfully,
    readOneFailed,
    readOneLoading,
    readOneSuccessfully,
    updateSuccessfully
} from "./DigitCRUD.actions";

function format(input, extractActiveLanguage, activeLanguage) {
    if (!extractActiveLanguage) {
        return input;
    }

    const output = {};

    for (var key in input) {
        if (input.hasOwnProperty(key)) {
            if (typeof input[key] === "object") {
                output[key] = input[key][activeLanguage];
            } else {
                output[key] = input[key];
            }
        }
    }

    return output;
}

const createCRUDReducer = (name, extractActiveLanguage, activeLanguage) => (
    state = { one: {}, all: [] },
    action
) => {
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
                all: action.payload.data.map(one =>
                    format(one, extractActiveLanguage, activeLanguage)
                ),
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
            //Promise array
            if (Array.isArray(action.payload.data)) {
                const results = action.payload.data.map(result => result.data);
                return {
                    one: format(
                        Object.assign(...results),
                        extractActiveLanguage,
                        activeLanguage
                    ),
                    all: []
                };
            } else {
                return {
                    one: format(
                        action.payload.data,
                        extractActiveLanguage,
                        activeLanguage
                    ),
                    all: []
                };
            }
        case readOneFailed(name):
            return {
                one: {},
                all: [],
                error: true
            };

        case updateSuccessfully(name):
            return {
                one: {},
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
