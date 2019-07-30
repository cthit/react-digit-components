const CREATE = "-create";
const DELETE = "-delete";
const UPDATE = "-update";
const READ_ONE = "-read-one";
const READ_ALL = "-read-all";

const LOADING = "loading";
const SUCCESSFULLY = "successfully";
const FAILED = "failed";

export const createLoading = name => name + CREATE + "-" + LOADING;
export const createSuccessfully = name => name + CREATE + "-" + SUCCESSFULLY;
export const createFailed = name => name + CREATE + "-" + FAILED;

export const deleteLoading = name => name + DELETE + "-" + LOADING;
export const deleteSuccessfully = name => name + DELETE + "-" + SUCCESSFULLY;
export const deleteFailed = name => name + DELETE + "-" + FAILED;

export const updateLoading = name => name + UPDATE + "-" + LOADING;
export const updateSuccessfully = name => name + UPDATE + "-" + SUCCESSFULLY;
export const updateFailed = name => name + UPDATE + "-" + FAILED;

export const readOneLoading = name => name + READ_ONE + "-" + LOADING;
export const readOneSuccessfully = name => name + READ_ONE + "-" + SUCCESSFULLY;
export const readOneFailed = name => name + READ_ONE + "-" + FAILED;

export const readAllLoading = name => name + READ_ALL + "-" + LOADING;
export const readAllSuccessfully = name => name + READ_ALL + "-" + SUCCESSFULLY;
export const readAllFailed = name => name + READ_ALL + "-" + FAILED;

export const clear = name => name + "-clear";
