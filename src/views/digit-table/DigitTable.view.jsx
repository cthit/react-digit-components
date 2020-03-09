import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import isEqual from "lodash/isEqual";
import PropTypes from "prop-types";
import React from "react";
import { Center } from "../../styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../styles/digit-text/DigitText.styles";
import translations from "./DigitTable.view.translations.json";
import DigitTableBody from "./elements/digit-table-body";
import DigitTableHeader from "./elements/digit-table-header";
import DigitTableToolbar from "./elements/digit-table-toolbar";
import styled from "styled-components";
import useDigitTranslations from "../../hooks/use-digit-translations";

const StyledTablePagination = styled(TablePagination)`
    overflow: visible;
`;

const TablePaper = styled(Paper)`
    overflow-x: auto;

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignself || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "0px" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "4px" }) =>
        (typeof margin === "string"
            ? margin
            : (margin.top || "0px") +
              " " +
              (margin.right || "0px") +
              " " +
              (margin.bottom || "0px") +
              " " +
              (margin.left || "0px")) + " !important"};
`;

//temp fix until DigitTable is rewritten
const DigitTableTranslations = ({ render }) => {
    const [text] = useDigitTranslations(translations);
    return render(text);
};

class DigitTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            searchInput: "",
            order: props.startOrderByDirection,
            orderBy: props.startOrderBy,
            page: 0,
            rowsPerPage: 10,

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
        const {
            selected,
            emptyTableText,
            headerTexts,
            flex,
            alignSelf,
            size,
            padding,
            margin
        } = this.props;
        const { data, order, orderBy, rowsPerPage, page } = this.state;

        return (
            <DigitTableTranslations
                render={text => (
                    <TablePaper
                        flex={flex}
                        alignself={alignSelf}
                        size={size}
                        padding={padding}
                        margin={margin}
                    >
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

                        <Table aria-labelledby="tableTitle">
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
                            {this.state.data.length > 0 && (
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

                            {this.state.data.length === 0 && (
                                <TableBody>
                                    <tr>
                                        <td colSpan="100">
                                            <Center>
                                                <Heading5
                                                    text={emptyTableText}
                                                />
                                            </Center>
                                        </td>
                                    </tr>
                                </TableBody>
                            )}
                        </Table>
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
    /** In what direction the start order should be */
    startOrderByDirection: PropTypes.oneOf(["desc", "asc"]),
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
    search: PropTypes.bool,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Function for rendering stuff to the left of the pagination controls */
    renderPaginationLeft: PropTypes.func
};

DigitTable.defaultProps = {
    search: false,
    showSearchableProps: false,
    searchText: "Search",
    titleText: "",
    emptyTableText: "The table is empty",
    size: {
        minWidth: "300px"
    },
    startOrderByDirection: "desc"
};

export default DigitTable;
