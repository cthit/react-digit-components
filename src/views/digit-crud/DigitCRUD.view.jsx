import React, { useCallback, useEffect } from "react";
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
import useDigitTranslations from "../../hooks/use-digit-translations";

function modifyFormComponentData(
    formComponentData,
    keysText,
    useKeyTextsInUpperLabel
) {
    const output = { ...formComponentData };

    if (useKeyTextsInUpperLabel) {
        Object.keys(output).forEach(key => {
            const currentUpperLabel = output[key].componentProps.upperLabel;
            output[key].componentProps.upperLabel =
                currentUpperLabel == null ? keysText[key] : currentUpperLabel;
        });
    }

    return output;
}

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
    detailsRenderCardStart,
    detailsRenderCardEnd,
    detailsRenderStart,
    detailsRenderEnd,
    detailsCustomRender,
    customDetailsRenders,
    extractActiveLanguage,
    createPath,
    readAllPath,
    readOnePath,
    updatePath,
    staticId,
    backFromReadOnePath,
    backFromUpdatePath,
    backFromDeletePath,
    backFromCreatePath,
    useKeyTextsInUpperLabel,
    deleteDialogFormComponentData,
    deleteDialogFormValidationSchema,
    deleteDialogFormInitialValues,
    deleteDialogFormKeysOrder,
    readAllKeysOrder,
    readOneKeysOrder,
    updateKeysOrder,
    createKeysOrder,
    updateFormValidationSchema,
    createFormValidationSchema,
    timeProps,
    dateProps,
    dateAndTimeProps
}) => {
    const dispatch = useDispatch();
    const store = useStore();
    const crudState = useSelector(state => state[name]);
    const [, activeLanguage] = useDigitTranslations({});

    const hasCreate = createRequest != null;
    const hasReadAll = readAllRequest != null;
    const hasReadOne = readOneRequest != null;
    const hasUpdate = updateRequest != null;
    const hasDelete = deleteRequest != null;

    const createAction = useCallback(
        hasCreate
            ? data => dispatch(createCreateAction(name, createRequest, data))
            : null,
        [name, createRequest]
    );
    const readOneAction = useCallback(
        hasReadOne
            ? id => dispatch(createReadOneAction(name, readOneRequest, id))
            : null,
        [name, readOneRequest]
    );
    const readAllAction = useCallback(
        hasReadAll
            ? () => dispatch(createReadAllAction(name, readAllRequest))
            : null,
        [name, readAllRequest]
    );
    const deleteAction = useCallback(
        hasDelete
            ? (id, form) =>
                  dispatch(createDeleteAction(name, deleteRequest, id, form))
            : null,
        [name, deleteRequest]
    );
    const updateAction = useCallback(
        hasUpdate
            ? (id, data) =>
                  dispatch(createUpdateAction(name, updateRequest, id, data))
            : null,
        [name, updateRequest]
    );
    const clearAction = useCallback(() => dispatch(createClearAction(name)), [
        name
    ]);

    useEffect(() => {
        store.injectReducer(
            name,
            createCRUDReducer(name, extractActiveLanguage, activeLanguage)
        );
        dispatch({ type: "INIT_" + name + "_REDUCER" });
        return () => store.removeInjectedReducer(name);
    }, [activeLanguage, dispatch, extractActiveLanguage, name, store]);

    if (crudState == null) {
        return null;
    }

    const modifiedFormComponentData = modifyFormComponentData(
        formComponentData,
        keysText,
        useKeyTextsInUpperLabel
    );

    return (
        <Fill>
            <Switch>
                {hasCreate && (
                    <Route
                        exact
                        path={path + createPath}
                        render={() => (
                            <DigitCRUDCreate
                                createAction={createAction}
                                path={path}
                                formComponentData={modifiedFormComponentData}
                                formValidationSchema={
                                    createFormValidationSchema != null
                                        ? createFormValidationSchema
                                        : formValidationSchema
                                }
                                formInitialValues={formInitialValues}
                                keysOrder={
                                    createKeysOrder != null
                                        ? createKeysOrder
                                        : keysOrder
                                }
                                createTitle={createTitle}
                                toastCreateFailed={toastCreateFailed}
                                toastCreateSuccessful={toastCreateSuccessful}
                                createButtonText={createButtonText}
                                backButtonText={backButtonText}
                                readAllPath={readAllPath}
                                backFromCreatePath={backFromCreatePath}
                            />
                        )}
                    />
                )}
                {hasUpdate && hasReadOne && (
                    <Route
                        exact
                        path={path + updatePath}
                        render={props => (
                            <DigitCRUDUpdate
                                name={name}
                                readOneAction={readOneAction}
                                updateAction={updateAction}
                                deleteAction={deleteAction}
                                clearAction={clearAction}
                                updateTitle={updateTitle}
                                id={
                                    staticId != null
                                        ? staticId
                                        : props.match.params.id
                                }
                                history={props.history}
                                path={path}
                                formComponentData={modifiedFormComponentData}
                                formValidationSchema={
                                    updateFormValidationSchema == null
                                        ? () => formValidationSchema
                                        : updateFormValidationSchema
                                }
                                keysOrder={
                                    updateKeysOrder != null
                                        ? updateKeysOrder
                                        : keysOrder
                                }
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
                                readAllPath={readAllPath}
                                readOnePath={readOnePath}
                                backFromUpdatePath={backFromUpdatePath}
                                backFromDeletePath={backFromDeletePath}
                                deleteDialogFormComponentData={
                                    deleteDialogFormComponentData
                                }
                                deleteDialogFormValidationSchema={
                                    deleteDialogFormValidationSchema
                                }
                                deleteDialogFormInitialValues={
                                    deleteDialogFormInitialValues
                                }
                                deleteDialogFormKeysOrder={
                                    deleteDialogFormKeysOrder
                                }
                            />
                        )}
                    />
                )}
                {hasReadOne && (
                    <Route
                        exact
                        path={path + readOnePath}
                        render={props => (
                            <DigitCRUDReadOne
                                name={name}
                                readOneAction={readOneAction}
                                clearAction={clearAction}
                                keysText={keysText}
                                keysOrder={
                                    readOneKeysOrder != null
                                        ? readOneKeysOrder
                                        : keysOrder
                                }
                                path={path}
                                id={
                                    staticId != null
                                        ? staticId
                                        : props.match.params.id
                                }
                                history={props.history}
                                hasUpdate={hasUpdate}
                                backButtonText={backButtonText}
                                updateButtonText={updateButtonText}
                                detailsTitle={detailsTitle}
                                detailsCustomRender={detailsCustomRender}
                                detailsRenderStart={detailsRenderStart}
                                detailsRenderEnd={detailsRenderEnd}
                                detailsRenderCardStart={detailsRenderCardStart}
                                detailsRenderCardEnd={detailsRenderCardEnd}
                                customDetailsRenders={customDetailsRenders}
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
                                readAllPath={readAllPath}
                                updatePath={updatePath}
                                backFromReadOnePath={backFromReadOnePath}
                                backFromDeletePath={backFromDeletePath}
                                deleteDialogFormComponentData={
                                    deleteDialogFormComponentData
                                }
                                deleteDialogFormValidationSchema={
                                    deleteDialogFormValidationSchema
                                }
                                deleteDialogFormInitialValues={
                                    deleteDialogFormInitialValues
                                }
                                deleteDialogFormKeysOrder={
                                    deleteDialogFormKeysOrder
                                }
                                timeProps={timeProps}
                                dateProps={dateProps}
                                dateAndTimeProps={dateAndTimeProps}
                            />
                        )}
                    />
                )}
                {hasReadAll && (
                    <Route
                        exact
                        path={path + readAllPath}
                        render={({ history }) => (
                            <DigitCRUDReadAll
                                name={name}
                                readAllAction={readAllAction}
                                clearAction={clearAction}
                                keysText={keysText}
                                keysOrder={
                                    readAllKeysOrder != null
                                        ? readAllKeysOrder
                                        : keysOrder
                                }
                                tableProps={tableProps}
                                idProp={idProp}
                                hasReadOne={hasReadOne}
                                path={path}
                                detailsButtonText={detailsButtonText}
                                createButtonText={createButtonText}
                                hasCreate={hasCreate}
                                history={history}
                                readOnePath={readOnePath}
                                createPath={createPath}
                                timeProps={timeProps}
                                dateProps={dateProps}
                                dateAndTimeProps={dateAndTimeProps}
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
    /** The initial values for Create form */
    formInitialValues: PropTypes.object,
    deleteDialogFormComponentData: PropTypes.objectOf(
        PropTypes.shape({
            component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
                .isRequired,
            componentProps: PropTypes.object,
            formatEvent: PropTypes.func,
            render: PropTypes.func
        })
    ),
    /** (data) => yup schema*/
    deleteDialogFormValidationSchema: PropTypes.func,
    deleteDialogFormInitialValues: PropTypes.object,
    deleteDialogFormKeysOrder: PropTypes.arrayOf(PropTypes.string),
    /** String for create title */
    createTitle: PropTypes.string,
    /** Function to create update title, Args: (data) */
    updateTitle: PropTypes.func,
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
    /** Overwrites the default DigitDisplayData behavior. (data, goBack, goToEdit) */
    detailsCustomRender: PropTypes.func,
    /** Renders before card in details (data) */
    detailsRenderStart: PropTypes.func,
    /** Renders after card in details (data) */
    detailsRenderEnd: PropTypes.func,
    /** Renders before DisplayData inside card (data)*/
    detailsRenderCardStart: PropTypes.func,
    /** Renders after DisplayData but before buttons in ReadOne (data)*/
    detailsRenderCardEnd: PropTypes.func,
    /** If you want a prop not to be rendered by DigitDisplayData in view */
    customDetailsRenders: PropTypes.objectOf(PropTypes.func),
    /** If true, then object that has {sv: "...", en: "..."} will be converted to "" depending on activeLanguage */
    extractActiveLanguage: PropTypes.bool,
    createPath: PropTypes.string,
    readAllPath: PropTypes.string,
    readOnePath: PropTypes.string,
    updatePath: PropTypes.string,
    /**  */
    staticId: PropTypes.string,
    backFromReadOnePath: PropTypes.string,
    backFromUpdatePath: PropTypes.string,
    backFromDeletePath: PropTypes.string,
    backFromCreatePath: PropTypes.string,
    useKeyTextsInUpperLabel: PropTypes.bool,
    readAllKeysOrder: PropTypes.arrayOf(PropTypes.string),
    readOneKeysOrder: PropTypes.arrayOf(PropTypes.string),
    updateKeysOrder: PropTypes.arrayOf(PropTypes.string),
    createKeysOrder: PropTypes.arrayOf(PropTypes.string),
    updateFormValidationSchema: PropTypes.object,
    createFormValidationSchema: PropTypes.func,
    timeProps: PropTypes.arrayOf(PropTypes.string),
    dateProps: PropTypes.arrayOf(PropTypes.string),
    dateAndTimeProps: PropTypes.arrayOf(PropTypes.string)
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
    detailsCustomRender: null,
    detailsRenderStart: () => null,
    detailsRenderEnd: () => null,
    detailsRenderCardStart: () => null,
    detailsRenderCardEnd: () => null,
    customDetailsRenders: {},
    extractActiveLanguage: false,
    createPath: "/add",
    readAllPath: "/",
    readOnePath: "/:id",
    updatePath: "/:id/edit",
    staticId: null,
    backFromReadOnePath: null,
    backFromUpdatePath: null,
    backFromDeletePath: null,
    backFromCreatePath: null,
    useKeyTextsInUpperLabel: false,
    deleteDialogFormComponentData: null,
    deleteDialogFormValidationSchema: null,
    deleteDialogFormInitialValues: null,
    deleteDialogFormKeysOrder: [],
    readAllKeysOrder: null,
    readOneKeysOrder: null,
    updateKeysOrder: null,
    createKeysOrder: null,
    updateFormValidationSchema: null,
    createFormValidationSchema: null,
    timeProps: [],
    dateProps: [],
    dateAndTimeProps: []
};

export default DigitCRUD;
