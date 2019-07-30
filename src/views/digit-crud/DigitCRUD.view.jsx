import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import DigitCRUDReadAll from "./sub-views/digit-crud-read-all";
import DigitCRUDCreate from "./sub-views/digit-crud-create";
import DigitCRUDUpdate from "./sub-views/digit-crud-update";
import DigitCRUDReadOne from "./sub-views/digit-crud-read-one";

import { useDispatch, useSelector, useStore } from "react-redux";
import {
    createClearAction,
    createCreateAction,
    createDeleteAction,
    createReadAllAction,
    createReadOneAction,
    createUpdateAction
} from "./DigitCRUD.action-creator";
import createCRUDReducer from "./DigitCRUD.reducer";
import {
    DownRightPosition,
    Fill
} from "../../styles/digit-layout/DigitLayout.styles";
import DigitFAB from "../../elements/digit-fab";
import Add from "@material-ui/icons/Add";

const DigitCRUD = ({
    path,
    name,
    readOneRequest,
    readAllRequest,
    updateRequest,
    createRequest,
    deleteRequest,
    keysOrder,
    keysText,
    idProp,
    tableProps,
    formComponentData,
    formValidationSchema,
    createTitle,
    updateTitle,
    formInitialValues,
    toastCreateSuccessful,
    toastCreateFailed,
    backButtonText,
    createButtonText,
    toastUpdateSuccessful,
    toastUpdateFailed,
    updateButtonText,
    deleteButtonText,
    dialogDeleteTitle,
    dialogDeleteDescription,
    dialogDeleteConfirm,
    dialogDeleteCancel,
    toastDeleteSuccessful,
    toastDeleteFailed
}) => {
    const dispatch = useDispatch();
    const store = useStore();
    const crudState = useSelector(state => state[name]);

    const hasCreate = createRequest != null;
    const hasReadAll = readAllRequest != null;
    const hasReadOne = readOneRequest != null;
    const hasUpdate = updateRequest != null;
    const hasDelete = deleteRequest != null;

    const createAction = hasCreate
        ? data => dispatch(createCreateAction(name, createRequest, data))
        : null;
    const readOneAction = hasReadOne
        ? id => dispatch(createReadOneAction(name, readOneRequest, id))
        : null;
    const readAllAction = hasReadAll
        ? () => dispatch(createReadAllAction(name, readAllRequest))
        : null;
    const deleteAction = hasDelete
        ? id => dispatch(createDeleteAction(name, deleteRequest, id))
        : null;
    const updateAction = hasUpdate
        ? (id, data) =>
              dispatch(createUpdateAction(name, updateRequest, id, data))
        : null;
    const clearAction = () => dispatch(createClearAction(name));

    useEffect(() => {
        store.injectReducer(name, createCRUDReducer(name));
        dispatch({ type: "INIT_" + name + "_REDUCER" });
        return () => store.removeInjectedReducer(name);
    }, []);

    if (crudState == null) {
        return null;
    }

    return (
        <Route
            render={({ history }) => (
                <>
                    <Fill>
                        <Switch>
                            {hasCreate && (
                                <Route
                                    exact
                                    path={path + "/add"}
                                    render={() => (
                                        <DigitCRUDCreate
                                            createAction={createAction}
                                            path={path}
                                            formComponentData={
                                                formComponentData
                                            }
                                            formValidationSchema={
                                                formValidationSchema
                                            }
                                            formInitialValues={
                                                formInitialValues
                                            }
                                            keysOrder={keysOrder}
                                            createTitle={createTitle}
                                            toastCreateFailed={
                                                toastCreateFailed
                                            }
                                            toastCreateSuccessful={
                                                toastCreateSuccessful
                                            }
                                            createButtonText={createButtonText}
                                            backButtonText={backButtonText}
                                        />
                                    )}
                                />
                            )}
                            {hasUpdate && hasReadOne && (
                                <Route
                                    exact
                                    path={path + "/:id/edit"}
                                    render={props => (
                                        <DigitCRUDUpdate
                                            name={name}
                                            readOneAction={readOneAction}
                                            updateAction={updateAction}
                                            deleteAction={deleteAction}
                                            clearAction={clearAction}
                                            updateTitle={updateTitle}
                                            id={props.match.params.id}
                                            history={props.history}
                                            path={path}
                                            formComponentData={
                                                formComponentData
                                            }
                                            formValidationSchema={
                                                formValidationSchema
                                            }
                                            keysOrder={keysOrder}
                                            toastUpdateSuccessful={
                                                toastUpdateSuccessful
                                            }
                                            toastUpdateFailed={
                                                toastUpdateFailed
                                            }
                                            backButtonText={backButtonText}
                                            updateButtonText={updateButtonText}
                                            deleteButtonText={deleteButtonText}
                                            dialogDeleteTitle={
                                                dialogDeleteTitle
                                            }
                                            dialogDeleteDescription={
                                                dialogDeleteDescription
                                            }
                                            dialogDeleteConfirm={
                                                dialogDeleteConfirm
                                            }
                                            dialogDeleteCancel={
                                                dialogDeleteCancel
                                            }
                                            toastDeleteSuccessful={
                                                toastDeleteSuccessful
                                            }
                                            toastDeleteFailed={
                                                toastDeleteFailed
                                            }
                                        />
                                    )}
                                />
                            )}
                            {hasReadOne && (
                                <Route
                                    exact
                                    path={path + "/:id"}
                                    render={props => (
                                        <DigitCRUDReadOne
                                            name={name}
                                            readOneAction={readOneAction}
                                            clearAction={clearAction}
                                            keysText={keysText}
                                            keysOrder={keysOrder}
                                            path={path}
                                            id={props.match.params.id}
                                            history={props.history}
                                            hasUpdate={hasUpdate}
                                        />
                                    )}
                                />
                            )}
                            {hasReadAll && (
                                <Route
                                    exact
                                    path={path}
                                    render={() => (
                                        <DigitCRUDReadAll
                                            name={name}
                                            readAllAction={readAllAction}
                                            clearAction={clearAction}
                                            keysText={keysText}
                                            keysOrder={keysOrder}
                                            tableProps={tableProps}
                                            idProp={idProp}
                                            hasReadOne={hasReadOne}
                                            path={path}
                                        />
                                    )}
                                />
                            )}
                        </Switch>
                    </Fill>
                    {hasCreate && (
                        <DownRightPosition>
                            <DigitFAB
                                primary
                                text={createButtonText}
                                icon={Add}
                                onClick={() => history.push(path + "/add")}
                            />
                        </DownRightPosition>
                    )}
                </>
            )}
        />
    );
};

export default DigitCRUD;
