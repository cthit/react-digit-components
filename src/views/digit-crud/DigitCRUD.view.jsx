import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import DigitCRUDReadAll from "./sub-views/digit-crud-read-all";
import DigitCRUDCreate from "./sub-views/digit-crud-create";
import DigitCRUDUpdate from "./sub-views/digit-crud-update";
import DigitCRUDReadOne from "./sub-views/digit-crud-read-one";

import trimEnd from "lodash/trimEnd";
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
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";

function removeLastSlash(pathname) {
    return trimEnd(pathname, "/");
}

function ensureLastSlash(pathname) {
    return removeLastSlash(pathname) + "/";
}

const DigitCRUD = ({
    name,
    readOneRequest,
    readAllRequest,
    updateRequest,
    createRequest,
    deleteRequest,
    keysOrder,
    keysText,
    tableProps
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
            render={({ location }) => (
                <Switch>
                    {hasCreate && (
                        <Route
                            exact
                            path={ensureLastSlash(location.pathname) + "add"}
                            render={() => (
                                <DigitCRUDCreate
                                    name={name}
                                    createAction={createAction}
                                    clearAction={clearAction}
                                />
                            )}
                        />
                    )}
                    {hasUpdate && hasReadOne && (
                        <Route
                            exact
                            path={
                                ensureLastSlash(location.pathname) + ":id/edit"
                            }
                            render={() => (
                                <DigitCRUDUpdate
                                    name={name}
                                    readOneAction={readOneAction}
                                    updateAction={updateAction}
                                    deleteAction={deleteAction}
                                    clearAction={clearAction}
                                />
                            )}
                        />
                    )}
                    {hasReadOne && (
                        <Route
                            exact
                            path={ensureLastSlash(location.pathname) + ":id"}
                            render={() => (
                                <DigitCRUDReadOne
                                    name={name}
                                    readOneAction={readOneAction}
                                    clearAction={clearAction}
                                />
                            )}
                        />
                    )}
                    {hasReadAll && (
                        <Route
                            exact
                            path={ensureLastSlash(location.pathname)}
                            render={() => (
                                <DigitCRUDReadAll
                                    name={name}
                                    readAllAction={readAllAction}
                                    clearAction={clearAction}
                                    keysText={keysText}
                                    keysOrder={keysOrder}
                                    tableProps={tableProps}
                                />
                            )}
                        />
                    )}
                </Switch>
            )}
        />
    );
};

export default DigitCRUD;
