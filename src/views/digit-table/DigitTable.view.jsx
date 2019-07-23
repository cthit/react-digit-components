import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import isEqual from "lodash/isEqual";
import PropTypes from "prop-types";
import React from "react";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { Center, Padding } from "../../styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../styles/digit-text/DigitText.styles";
import translations from "./DigitTable.view.translations.json";
import DigitTableBody from "./elements/digit-table-body";
import DigitTableHeader from "./elements/digit-table-header";
import DigitTableToolbar from "./elements/digit-table-toolbar";
import styled from "styled-components";
import DigitTranslations from "../../declaratives/digit-translations/DigitTranslations.declarative";

const StyledTablePagination = styled(TablePagination)`
    min-width: 600px;
`;

const StyledTable = styled(Table)`
    min-width: 632px;
`;

const TablePaper = styled(Paper)`
    max-width: 100vw;
    overflow-x: auto;
`;

class DigitTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            searchInput: "",
            order: "asc",
            orderBy: props.startOrderBy,
            page: 0,
            rowsPerPage: 5,

            data: [],
            columnsOrder: props.columnsOrder,
            idProp: props.idProp
        };
    }

    componentDidMount() {
        if (this.props.data != null) {
            this.updateData();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            !isEqual(
                prevProps.data.slice().sort(),
                this.props.data.slice().sort()
            )
        ) {
            this.updateData();
        }
    }

    updateData() {
        this.setState({
            data: this.props.data.sort((a, b) =>
                a[this.state.orderBy] < b[this.state.orderBy] ? -1 : 1
            )
        });
    }

    onSearchInputChange = e => {
        this.setState({
            searchInput: e.target.value
        });
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        var order = "desc";

        if (this.state.orderBy === property && this.state.order === "desc") {
            order = "asc";
        }

        const data =
            order === "desc"
                ? this.state.data.sort((a, b) =>
                      b[orderBy] < a[orderBy] ? -1 : 1
                  )
                : this.state.data.sort((a, b) =>
                      a[orderBy] < b[orderBy] ? -1 : 1
                  );

        this.setState({ data, order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.props.onSelectedUpdated(
                this.state.data.map(n => n[this.state.idProp])
            );
            return;
        }
        this.props.onSelectedUpdated([]);
    };

    handleClick = (event, id) => {
        var newSelected = this.props.selected.slice();
        const selectedIndex = newSelected.indexOf(id);

        if (selectedIndex === -1) {
            newSelected.push(id);
        } else {
            newSelected.splice(selectedIndex, 1);
        }

        this.props.onSelectedUpdated(newSelected);
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected = id =>
        this.props.selected == null
            ? false
            : this.props.selected.indexOf(id) !== -1;

    rowShouldBeShown = row =>
        row != null &&
        Object.keys(this.props.headerTexts).filter(
            key =>
                row[key] != null &&
                (row[key] + "")
                    .toLowerCase()
                    .includes(this.state.searchInput.toLowerCase())
        ).length > 0; //Can be optimized, escape if one result is found

    render() {
        const { selected, emptyTableText, headerTexts } = this.props;
        const { data, order, orderBy, rowsPerPage, page } = this.state;

        return (
            <DigitTranslations
                translations={translations}
                render={text => (
                    <TablePaper>
                        <DigitTableToolbar
                            numSelected={
                                selected == null ? -1 : selected.length
                            }
                            searchInput={this.state.searchInput}
                            onSearchInputChange={this.onSearchInputChange}
                            titleText={this.props.titleText}
                            searchText={this.props.searchText}
                            headerTexts={this.props.headerTexts}
                            showSearchableProps={this.props.showSearchableProps}
                            search={this.props.search}
                        />

                        <StyledTable aria-labelledby="tableTitle">
                            <DigitTableHeader
                                numSelected={
                                    selected == null
                                        ? -1
                                        : selected.filter(n =>
                                              this.rowShouldBeShown(n)
                                          ).length ///TODO OPTIMIZE
                                }
                                columnsOrder={this.state.columnsOrder}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={this.handleSelectAllClick}
                                onRequestSort={this.handleRequestSort}
                                rowCount={data.length}
                                headerTexts={headerTexts}
                            />
                            <DigitIfElseRendering
                                test={this.state.data.length > 0}
                                ifRender={() => (
                                    <DigitTableBody
                                        search={this.props.search}
                                        idProp={this.state.idProp}
                                        columnsOrder={this.state.columnsOrder}
                                        page={this.state.page}
                                        rowsPerPage={this.state.rowsPerPage}
                                        data={this.state.data}
                                        isSelected={this.isSelected}
                                        handleClick={this.handleClick}
                                        rowShouldBeShown={this.rowShouldBeShown}
                                        headerTexts={headerTexts}
                                    />
                                )}
                                elseRender={() => (
                                    <TableBody>
                                        <tr>
                                            <td colSpan="100">
                                                <Center>
                                                    <Padding>
                                                        <Heading5
                                                            text={
                                                                emptyTableText
                                                            }
                                                        />
                                                    </Padding>
                                                </Center>
                                            </td>
                                        </tr>
                                    </TableBody>
                                )}
                            />
                        </StyledTable>

                        <StyledTablePagination
                            component="div"
                            count={
                                data.filter(n => this.rowShouldBeShown(n))
                                    .length
                            } //TODO OPTIMIZE
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                "aria-label": text.PreviousPage
                            }}
                            nextIconButtonProps={{
                                "aria-label": text.NextPage
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            labelRowsPerPage={text.RowsPerPage}
                        />
                    </TablePaper>
                )}
            />
        );
    }
}

DigitTable.displayName = "DigitTable";
DigitTable.propTypes = {
    /** The starting column to order rows by */
    startOrderBy: PropTypes.string.isRequired,
    /** The specified order of the columns. */
    columnsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** The column that has the id. */
    idProp: PropTypes.string.isRequired,
    /** The data. An array of objects where the object
     * has the keys specified in headerTexts.
     */
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** When the selected rows has been updated. The first argument is
     * the current array of selected rows. You need to keep
     * selected updated yourself.
     */
    onSelectedUpdated: PropTypes.func,
    /** An array of selected. When onSelectedUpdated is called,
     * you need to save the selected rows.*/
    selected: PropTypes.array,
    /** A key to text map, where the key are the column
     * and the text is what the user sees.s
     */
    headerTexts: PropTypes.objectOf(PropTypes.string).isRequired,
    /** The text that is shown if the table is emptyK */
    emptyTableText: PropTypes.string,
    /** The text of the title. */
    titleText: PropTypes.string,
    /** The text to show in the searchbar. */
    searchText: PropTypes.string,
    /** If true, then all the different props you can search for is
     * added to the search input field.
     */
    showSearchableProps: PropTypes.bool,
    /** If true, then there's a search input field. */
    search: PropTypes.bool
};

DigitTable.defaultProps = {
    search: false,
    showSearchableProps: false,
    searchText: "Sök",
    titleText: "",
    emptyTableText: "Tabellen är tom"
};

export default DigitTable;
