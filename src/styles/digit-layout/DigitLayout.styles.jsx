import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/**
 * display: display {"flex" | "inline-flex"}
 * justify-content: justifyContent {"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"}
 * flex-wrap: flexWrap {"nowrap" | "wrap" | "wrap-reverse"}
 * align-items: alignItems {"flex-start" | "flex-end" | "center" | "baseline" | "stretch"}
 * align-content: alignContent {"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"}
 */
export const Flex = styled.div`
    display: ${props => (!props.inline ? "flex" : "inline-flex")};
    justify-content: ${props =>
        props.justifyContent != null ? props.justifyContent : ""};
    flex-wrap: ${props => (props.flexWrap != null ? props.flexWrap : "wrap")};
    align-items: ${props => (props.alignItems != null ? props.alignItems : "")};
    align-content: ${props =>
        props.alignContent != null ? props.alignContent : ""};

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};
    justify-self: ${props => props.justifySelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
        (typeof margin === "string"
            ? margin
            : (margin.top || "0px") +
              " " +
              (margin.right || "0px") +
              " " +
              (margin.bottom || "0px") +
              " " +
              (margin.left || "0px")) + " !important"};

    overflow: ${({ overflow }) => (overflow ? overflow : "visible")};
`;

Flex.displayName = "Flex";
Flex.propTypes = {
    /** https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2  */
    display: PropTypes.oneOf(["flex", "inline-flex"]),
    /** https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6 */
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4 */
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    /** https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7 */
    alignItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]),
    /** https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8 */
    alignContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch"
    ])
};
Flex.defaultProps = {
    size: {}
};

function flexAlignLeftOrTop(leftOrTopAlign, rightOrBottomAlign, reverse) {
    if (reverse ? rightOrBottomAlign : leftOrTopAlign) {
        return {
            justifyContent: "flex-start"
        };
    }
    return {};
}

function flexAlignRightOrBottom(leftOrTopAlign, rightOrBottomAlign, reverse) {
    if (reverse ? leftOrTopAlign : rightOrBottomAlign) {
        return {
            justifyContent: "flex-end"
        };
    }
    return {};
}

function flexCenterHorizontal(centerHorizontal) {
    if (centerHorizontal) {
        return {
            alignItems: "center",
            alignContent: "center"
        };
    }
    return {};
}

function flexCenterVertical(centerVertical) {
    if (centerVertical) {
        return {
            justifyContent: "center"
        };
    }
    return {};
}

export const Grid = styled.div`
    grid-column-start: ${props => props.gridColumn.start};
    grid-column-end: ${props => props.gridColumn.end};
    grid-row-start: ${props => props.gridRow.start};
    grid-row-end: ${props => props.gridRow.end};

    display: ${props => (props.inline ? "inline-grid" : "grid")};
    grid-template-columns: ${props => props.columns || ""};
    grid-template-rows: ${props => props.rows || ""};
    grid-template-areas: ${props => props.areas || ""};
    grid-column-gap: ${props => props.margin || props.columnGap || ""};
    grid-row-gap: ${props => props.margin || props.rowGap || ""};
    justify-items: ${props => props.justifyItems || "stretch"};
    align-items: ${props => props.alignItems || "stretch"};
    justify-content: ${props => props.justifyContent || ""};
    align-content: ${props => props.alignContent || ""};
    grid-auto-columns: ${props => props.autoColumns || ""};
    grid-auto-rows: ${props => props.autoRows || ""};
    grid-auto-flow: ${props => props.autoFlow || ""};

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};
    justify-self: ${props => props.justifySelf || ""};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
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

Grid.displayName = "Grid";
Grid.propTypes = {
    /** If true, then inline-grid. https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-12 */
    inline: PropTypes.bool,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13 */
    columns: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13 */
    rows: PropTypes.number,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14 */
    areas: PropTypes.string,
    /** Margin between items. Will precedence columnGap and rowGap */
    margin: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-16 */
    columnGap: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-16 */
    rowGap: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18 */
    justifyItems: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19 */
    alignItems: PropTypes.oneOf(["start", "end", "center", "stretch"]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21 */
    justifyContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-22 */
    alignContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoColumns: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoRows: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-25 */
    autoFlow: PropTypes.string
};
Grid.defaultProps = {
    size: {},
    gridColumn: {},
    gridRow: {}
};

export const GridItem = styled.div`
  grid-column-start: ${props => props.columnStart || ""}
  grid-column-end: ${props => props.columnEnd || ""}
  grid-row-start: ${props => props.rowStart || ""}
  grid-row-end: ${props => props.rowEnd || ""}
  flex: ${props => props.flex || "0 1 auto"};
  align-self: ${props => props.alignSelf || "auto"};
  justify-self: ${props => props.justifySelf || ""};

  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};

  max-width: ${props => props.maxWidth || "none"};
  max-height: ${props => props.maxHeight || "none"};

  min-width: ${props => props.minWidth || 0};
  min-height: ${props => props.minHeight || 0};
  
    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
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

GridItem.displayName = "GridItem";
GridItem.propTypes = {
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27 */
    columnStart: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27 */
    columnEnd: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27 */
    rowStart: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27 */
    rowEnd: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-30 */
    justifySelf: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-31 */
    alignSelf: PropTypes.string
};
GridItem.defaultProps = {
    size: {}
};

export const UniformGrid = styled(
    ({
        minItemWidth,
        children,
        inline,
        rows,
        areas,
        margin,
        columnGap,
        rowGap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
        autoFlow,
        flex,
        alignSelf,
        size,
        padding
    }) => (
        <Grid
            columns={`repeat(auto-fit, minmax(${minItemWidth}, 1fr));`}
            inline={inline}
            rows={rows}
            areas={areas}
            columnGap={columnGap}
            rowGap={rowGap}
            justifyItems={justifyItems}
            alignItems={alignItems}
            justifyContent={justifyContent}
            alignContent={alignContent}
            autoFlow={autoFlow}
            flex={flex}
            alignSelf={alignSelf}
            size={size}
            margin={margin}
            padding={padding}
        >
            {children}
        </Grid>
    )
)`
    & > * {
        min-height: ${props => props.minItemHeight || ""};
    }
`;

UniformGrid.displayName = "UniformGrid";
UniformGrid.propTypes = {
    /** the minimum allowed width for the items whitin the grid. */
    minItemWidth: PropTypes.string,
    /** the minimum allowed height for the items whitin the grid. */
    minItemHeight: PropTypes.string,
    /** All the children */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    /** If true, then inline-grid. https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-12 */
    inline: PropTypes.bool,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13 */
    columns: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13 */
    rows: PropTypes.number,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14 */
    areas: PropTypes.string,
    /** Margin between items. Will precedence columnGap and rowGap */
    margin: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-16 */
    columnGap: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-16 */
    rowGap: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18 */
    justifyItems: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19 */
    alignItems: PropTypes.oneOf(["start", "end", "center", "stretch"]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21 */
    justifyContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-22 */
    alignContent: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
    ]),
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoColumns: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoRows: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-25 */
    autoFlow: PropTypes.string
};

UniformGrid.defaultProps = {
    size: {}
};

export const Column = styled(
    ({
        center,
        centerVertical,
        centerHorizontal,
        topAlign,
        bottomAlign,
        reverse,
        marginVertical,
        children,
        scroll,
        flexWrap,
        size,
        margin,
        padding,
        flex,
        alignSelf,
        ...rest
    }) => (
        <Flex
            {...flexCenterHorizontal(center || centerHorizontal)}
            {...flexCenterVertical(center || centerVertical)}
            {...flexAlignLeftOrTop(topAlign, bottomAlign, reverse)}
            {...flexAlignRightOrBottom(topAlign, bottomAlign, reverse)}
            flexWrap={flexWrap}
            {...rest}
        >
            {children}
        </Flex>
    )
)`
    flex-direction: ${props => (!props.reverse ? "column" : "column-reverse")};
    > * {
        margin-top: ${props => props.marginVertical};
        margin-bottom: ${props => props.marginVertical};
    }
    overflow: ${props => (props.scroll ? "scroll" : "visible")};

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};
    justify-self: ${props => props.justifySelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
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

Column.displayName = "Column";
Column.propTypes = {
    /** If true, then centerVertical and centerHorizontal is true */
    center: PropTypes.bool,
    /** If true, then aligns center vertically */
    centerVertical: PropTypes.bool,
    /** If true, then aligns center horizontal */
    centerHorizontal: PropTypes.bool,
    /** If true, then aligns top */
    topAlign: PropTypes.bool,
    /** If true, then align bottom */
    bottomAlign: PropTypes.bool,
    /** If true, then reverses the order */
    reverse: PropTypes.bool,
    /** All the children */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default column properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2
     */
    display: PropTypes.oneOf(["flex", "inline-flex"]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default column properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6
     */
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default column properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4
     */
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default column properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7
     */
    alignItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default column properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8
     */
    alignContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch"
    ]),
    /** If true, then overflow will show a scrollbar. */
    scroll: PropTypes.bool,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
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
    ])
};

Column.defaultProps = {
    flexWrap: "nowrap",
    margin: "0px",
    marginVertical: "4px",
    size: {}
};

export const Row = styled(
    ({
        center,
        centerVertical,
        centerHorizontal,
        leftAlign,
        rightAlign,
        reverse,
        children,
        scroll,
        marginHorizontal,
        flexWrap,
        size,
        margin,
        padding,
        flex,
        alignSelf,
        justifySelf,
        ...rest
    }) => (
        <Flex
            {...flexCenterHorizontal(center || centerVertical)}
            {...flexCenterVertical(center || centerHorizontal)}
            {...flexAlignLeftOrTop(leftAlign, rightAlign, reverse)}
            {...flexAlignRightOrBottom(leftAlign, rightAlign, reverse)}
            flexWrap={flexWrap}
            {...rest}
        >
            {children}
        </Flex>
    )
)`
    flex-direction: ${props => (!props.reverse ? "row" : "row-reverse")};
    > * {
        margin-right: ${props => props.marginHorizontal};
        margin-left: ${props => props.marginHorizontal};
    }
    overflow: ${props => (props.scroll ? "scroll" : "visible")};

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};
    justify-self: ${props => props.justifySelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
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

Row.displayName = "Row";
Row.propTypes = {
    /** If true, then centerVertical and centerHorizontal is true */
    center: PropTypes.bool,
    /** If true, then aligns center vertically */
    centerVertical: PropTypes.bool,
    /** If true, then aligns center horizontal */
    centerHorizontal: PropTypes.bool,
    /** If true, aligns the items left */
    leftAlign: PropTypes.bool,
    /** If true, aligns the items right */
    rightAlign: PropTypes.bool,
    /** If true, reverses the order of the children*/
    reverse: PropTypes.bool,
    /** All the children */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default row properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2
     */
    display: PropTypes.oneOf(["flex", "inline-flex"]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default row properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6
     */
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default row properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4
     */
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default row properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7
     */
    alignItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]),
    /**
     * Should be avoided, only use if you feel comfortable in flex. Try to use any of the other default row properties.
     * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8
     */
    alignContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch"
    ]),
    /** If true, then overflow will show a scrollbar. */
    scroll: PropTypes.bool,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
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
    ])
};

Row.defaultProps = {
    flexWrap: "nowrap",
    margin: "0px",
    marginHorizontal: "4px",
    size: {}
};

export const DownRightPosition = styled.div`
    position: fixed;
    right: 16px;
    bottom: 16px;
`;

DownRightPosition.displayName = "DownRightPosition";

export const Spacing = styled.div`
    display: block;
    width: 8px;
    height: 8px;
`;

Spacing.displayName = "Spacing";

export const Center = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;

    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};
    justify-self: ${props => props.justifySelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
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

Center.displayName = "Center";
Center.defaultProps = {
    flex: "1",
    size: {}
};

export const Hide = styled.div`
    display: ${props => (props.hidden ? "none" : "inherit")};
`;

Hide.displayName = "Hide";
Hide.propTypes = {
    hidden: PropTypes.bool
};

export const Order = styled(Flex)`
    order: ${props => props.order};
`;

Order.displayName = "Order";
Order.propTypes = {
    /** The order of the child  */
    order: PropTypes.number.isRequired
};
