import {
    clear,
    createFailed,
    createLoading,
    createSuccessfully,
    deleteFailed,
    deleteLoading,
    deleteSuccessfully,
    readAllFailed,
    readAllLoading,
    readAllSuccessfully,
    updateFailed,
    updateLoading,
    updateSuccessfully
} from "./DigitCRUD.actions";
import {
    CREATE_FAILED,
    CREATE_LOADING,
    CREATE_SUCCESSFULLY,
    DELETE_FAILED,
    DELETE_LOADING,
    DELETE_SUCCESSFULLY,
    READ_ALL_FAILED,
    READ_ALL_LOADING,
    READ_ALL_SUCCESSFULLY,
    READ_ONE_FAILED,
    READ_ONE_LOADING,
    READ_ONE_SUCCESSFULLY,
    UPDATE_FAILED,
    UPDATE_LOADING,
    UPDATE_SUCCESSFULLY,
    CLEAR
} from "../../contexts/DigitCRUDContext";

export function createClearAction() {
    return {
        type: CLEAR
    };
}

export function createReadOneAction(readOneRequest, id) {
    return requestPromise(
        () => readOneRequest(id),
        loading(READ_ONE_LOADING),
        successfully(READ_ONE_SUCCESSFULLY),
        failed(READ_ONE_FAILED)
    );
}

export function createReadAllAction(readAllRequest) {
    return requestPromise(
        readAllRequest,
        loading(READ_ALL_LOADING),
        successfully(READ_ALL_SUCCESSFULLY),
        failed(READ_ALL_FAILED)
    );
}

export function createCreateAction(createRequest, data) {
    return requestPromise(
        () => createRequest(data),
        loading(CREATE_LOADING),
        successfully(CREATE_SUCCESSFULLY),
        failed(CREATE_FAILED)
    );
}

export function createDeleteAction(deleteRequest, id, form) {
    return requestPromise(
        () => deleteRequest(id, form),
        loading(DELETE_LOADING),
        successfully(DELETE_SUCCESSFULLY),
        failed(DELETE_FAILED)
    );
}

export function createUpdateAction(updateRequest, id, data) {
    return requestPromise(
        () => updateRequest(id, data),
        loading(UPDATE_LOADING),
        successfully(UPDATE_SUCCESSFULLY),
        failed(UPDATE_FAILED)
    );
}

function successfully(type) {
    return response => ({
        type,
        error: false,
        payload: {
            data: Array.isArray(response) ? response : response.data
        }
    });
}

function failed(type) {
    return error => ({
        type,
        error: true,
        payload: {
            error
        }
    });
}

function loading(type) {
    return () => ({
        type,
        error: false,
        payload: {}
    });
}

function requestPromise(
    request,
    requestLoadingActionCreator,
    requestSuccessfullyActionCreator,
    requestFailedActionCreator
) {
    return dispatch => {
        dispatch(requestLoadingActionCreator());
        return new Promise((resolve, reject) => {
            request()
                .then(response => {
                    dispatch(requestSuccessfullyActionCreator(response));
                    resolve(response);
                })
                .catch(error => {
                    dispatch(requestFailedActionCreator(error));
                    reject(error);
                });
        });
    };
}
