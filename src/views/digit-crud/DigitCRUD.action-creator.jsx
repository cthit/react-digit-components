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
    readOneFailed,
    readOneLoading,
    readOneSuccessfully,
    updateFailed,
    updateLoading,
    updateSuccessfully
} from "./DigitCRUD.actions";

export function createClearAction(name) {
    return {
        type: clear(name)
    };
}

export function createReadOneAction(name, readOneRequest, id) {
    return requestPromise(
        () => readOneRequest(id),
        loading(readOneLoading(name)),
        successfully(readOneSuccessfully(name)),
        failed(readOneFailed(name))
    );
}

export function createReadAllAction(name, readAllRequest) {
    return requestPromise(
        readAllRequest,
        loading(readAllLoading(name)),
        successfully(readAllSuccessfully(name)),
        failed(readAllFailed(name))
    );
}

export function createCreateAction(name, createRequest, data) {
    return requestPromise(
        () => createRequest(data),
        loading(createLoading(name)),
        successfully(createSuccessfully(name)),
        failed(createFailed(name))
    );
}

export function createDeleteAction(name, deleteRequest, id) {
    return requestPromise(
        () => deleteRequest(id),
        loading(deleteLoading(name)),
        successfully(deleteSuccessfully(name)),
        failed(deleteFailed(name))
    );
}

export function createUpdateAction(name, updateRequest, id, data) {
    return requestPromise(
        () => updateRequest(id, data),
        loading(name + updateLoading),
        successfully(name + updateSuccessfully),
        failed(name + updateFailed)
    );
}

function successfully(type) {
    return response => ({
        type,
        error: false,
        payload: {
            data: response.data
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
