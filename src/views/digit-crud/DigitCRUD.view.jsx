import React, { useEffect } from "react";
import PropTypes from "prop-types";

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
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

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
    toastDeleteFailed,
    detailsButtonText,
    detailsTitle,
    detailsRenderCardEnd
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
                                formComponentData={formComponentData}
                                formValidationSchema={formValidationSchema}
                                formInitialValues={formInitialValues}
                                keysOrder={keysOrder}
                                createTitle={createTitle}
                                toastCreateFailed={toastCreateFailed}
                                toastCreateSuccessful={toastCreateSuccessful}
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
                                formComponentData={formComponentData}
                                formValidationSchema={formValidationSchema}
                                keysOrder={keysOrder}
                                toastUpdateSuccessful={toastUpdateSuccessful}
                                toastUpdateFailed={toastUpdateFailed}
                                backButtonText={backButtonText}
                                updateButtonText={updateButtonText}
                                deleteButtonText={deleteButtonText}
                                dialogDeleteTitle={dialogDeleteTitle}
                                dialogDeleteDescription={
                                    dialogDeleteDescription
                                }
                                dialogDeleteConfirm={dialogDeleteConfirm}
                                dialogDeleteCancel={dialogDeleteCancel}
                                toastDeleteSuccessful={toastDeleteSuccessful}
                                toastDeleteFailed={toastDeleteFailed}
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
                                backButtonText={backButtonText}
                                updateButtonText={updateButtonText}
                                detailsTitle={detailsTitle}
                                detailsRenderCardEnd={detailsRenderCardEnd}
                                /** Only used if update is null*/
                                deleteAction={deleteAction}
                                deleteButtonText={deleteButtonText}
                                dialogDeleteTitle={dialogDeleteTitle}
                                dialogDeleteDescription={
                                    dialogDeleteDescription
                                }
                                dialogDeleteConfirm={dialogDeleteConfirm}
                                dialogDeleteCancel={dialogDeleteCancel}
                                toastDeleteSuccessful={toastDeleteSuccessful}
                                toastDeleteFailed={toastDeleteFailed}
                            />
                        )}
                    />
                )}
                {hasReadAll && (
                    <Route
                        exact
                        path={path}
                        render={({ history }) => (
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
                                detailsButtonText={detailsButtonText}
                                createButtonText={createButtonText}
                                hasCreate={hasCreate}
                                history={history}
                            />
                        )}
                    />
                )}
            </Switch>
        </Fill>
    );
};

DigitCRUD.propTypes = {
    /** Under what path this CRUD will be under */
    path: PropTypes.string.isRequired,
    /** The name of the CRUD. Will be the name of the reducer */
    name: PropTypes.string.isRequired,
    /** A function GET request that returns a promise. Args: (id), resolve: {data: {...}}, reject: {error}*/
    readOneRequest: PropTypes.func,
    /** A function GET request that returns a promise. Args: (), resolve: {data: {...}}, reject: {error}*/
    readAllRequest: PropTypes.func,
    /** Function PUT request that returns a promise. Args: (id, newData), resolve: {}, reject: {error}*/
    updateRequest: PropTypes.func,
    /** Function POST request that returns a promise. Args: (newData), resolve: {}, reject: {error}*/
    createRequest: PropTypes.func,
    /** Function POST request that returns a promise. Args: (id), resolve: {}, reject: {error}*/
    deleteRequest: PropTypes.func,
    /** The order that the props of a data object should be in */
    keysOrder: PropTypes.arrayOf(PropTypes.string),
    /** The header text for each data prop */
    keysText: PropTypes.objectOf(PropTypes.string),
    /** The id prop for the data */
    idProp: PropTypes.string,
    /** See DigitTable */
    tableProps: PropTypes.object,
    /** See editComponentData in DigitEditData */
    formComponentData: PropTypes.objectOf(
        PropTypes.shape({
            component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
                .isRequired,
            componentProps: PropTypes.object,
            formatEvent: PropTypes.func,
            render: PropTypes.func
        })
    ),
    /** See validationSchema in DigitEditData*/
    formValidationSchema: PropTypes.object,
    /** String for create title */
    createTitle: PropTypes.string,
    /** Function to create update title, Args: (data) */
    updateTitle: PropTypes.func,
    /** The initial values for Create form */
    formInitialValues: PropTypes.object,
    /** Function to create toast text when creation is successful, Args: (data, response)*/
    toastCreateSuccessful: PropTypes.func,
    /** Function to create toast text when creation failed, Args: (data, error)*/
    toastCreateFailed: PropTypes.func,
    /** Back button text */
    backButtonText: PropTypes.string,
    /** Create button text */
    createButtonText: PropTypes.string,
    /**Function to create toast text when update is successful, Args: (new, old, response) */
    toastUpdateSuccessful: PropTypes.func,
    /**Function to create toast text when update failed, Args: (new, old, error) */
    toastUpdateFailed: PropTypes.func,
    /** Function to create update button text, Args: (data)*/
    updateButtonText: PropTypes.func,
    /** Function to create delete button text, Args: (data)*/
    deleteButtonText: PropTypes.func,
    /** Function to create dialog delete title, Args: (data) */
    dialogDeleteTitle: PropTypes.func,
    /** Function to create dialog delete description, Args: (data) */
    dialogDeleteDescription: PropTypes.func,
    /** Function to create dialog delete confirm button text, Args: (data) */
    dialogDeleteConfirm: PropTypes.func,
    /** Function to create dialog delete cancel button text, Args: (data) */
    dialogDeleteCancel: PropTypes.func,
    /** Function to create toast delete successful text, Args: (data, response)*/
    toastDeleteSuccessful: PropTypes.func,
    /** Function to create toast delete failed text, Args: (data, error)*/
    toastDeleteFailed: PropTypes.func,
    /** Details button text in read all table*/
    detailsButtonText: PropTypes.string,
    /** Details title (data) => string*/
    detailsTitle: PropTypes.func,
    /** Renders after DisplayData but before buttons in ReadOne */
    detailsRenderCardEnd: PropTypes.func
};

DigitCRUD.defaultProps = {
    updateTitle: () => "Uppdatera",
    toastUpdateSuccessful: () => "Skapning lyckades",
    toastUpdateFailed: () => "Skapning misslyckades",
    backButtonText: "Tillbaka",
    updateButtonText: () => "Redigera",
    deleteButtonText: () => "Radera",
    dialogDeleteTitle: () => "Är du säker?",
    dialogDeleteDescription: () => "",
    dialogDeleteConfirm: () => "Radera",
    dialogDeleteCancel: () => "Avbryt",
    toastDeleteSuccessful: () => "Raderingen lyckades",
    toastDeleteFailed: () => "Raderingen misslyckades",
    toastCreateSuccessful: () => "Skapning lyckades",
    toastCreateFailed: () => "Skapning misslyckades",
    createButtonText: "Skapa",
    detailsButtonText: "Detaljer",
    createTitle: "Skapa",
    detailsTitle: () => "",
    detailsRenderCardEnd: () => null
};

export default DigitCRUD;
