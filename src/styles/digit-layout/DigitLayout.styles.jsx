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
    flex: ${props => (props.fillElement ? "1" : "")};
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
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoColumns: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-24 */
    autoRows: PropTypes.string,
    /** https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-25 */
    autoFlow: PropTypes.string,
    /** Fill available layout with flex. */
    fillElement: PropTypes.bool
};

export const GridItem = styled.div`
  grid-column-start: ${props => props.columnStart || ""}
  grid-column-end: ${props => props.columnEnd || ""}
  grid-row-start: ${props => props.rowStart || ""}
  grid-row-end: ${props => props.rowEnd || ""}
  justify-self: ${props => props.justifySelf || ""};
  align-self: ${props => props.alignSelf || ""};
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
        fillElement
    }) => (
        <Grid
            columns={`repeat(auto-fit, minmax(${minItemWidth}, 1fr));`}
            margin={margin}
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
            fillElement={fillElement}
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
    autoFlow: PropTypes.string,
    /** Fill available layout with flex. */
    fillElement: PropTypes.bool
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
        fillElement,
        children,
        scroll,
        ...rest
    }) => (
        <Flex
            {...flexCenterHorizontal(center || centerHorizontal)}
            {...flexCenterVertical(center || centerVertical)}
            {...flexAlignLeftOrTop(topAlign, bottomAlign, reverse)}
            {...flexAlignRightOrBottom(topAlign, bottomAlign, reverse)}
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
    flex: ${props => (props.fillElement ? "1" : "")};
    overflow: ${props => (props.scroll ? "scroll" : "visible")};
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
    /** Fill available layout with flex. */
    fillElement: PropTypes.bool,
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
    scroll: PropTypes.bool
};

Column.defaultProps = {
    flexWrap: "nowrap",
    margin: "0px",
    marginVertical: "4px"
};

export const Row = styled(
    ({
        center,
        centerVertical,
        centerHorizontal,
        leftAlign,
        rightAlign,
        reverse,
        fillElement,
        children,
        scroll,
        marginHorizontal,
        ...rest
    }) => (
        <Flex
            {...flexCenterHorizontal(center || centerVertical)}
            {...flexCenterVertical(center || centerHorizontal)}
            {...flexAlignLeftOrTop(leftAlign, rightAlign, reverse)}
            {...flexAlignRightOrBottom(leftAlign, rightAlign, reverse)}
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
    flex: ${props => (props.fillElement ? "1" : "")};
    overflow: ${props => (props.scroll ? "scroll" : "visible")};
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
    /** Fill available layout with flex. */
    fillElement: PropTypes.bool,
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
    scroll: PropTypes.bool
};

Row.defaultProps = {
    flexWrap: "nowrap",
    margin: "0px",
    marginHorizontal: "4px"
};

export const DownRightPosition = styled.div`
    position: fixed;
    right: 16px;
    bottom: 16px;
`;

DownRightPosition.displayName = "DownRightPosition";

export const Fill = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;

    display: flex;
    flex-direction: column;
    padding: 0px;
`;

Fill.displayName = "Fill";

export const MarginTop = styled(Fill)`
    margin-top: 8px;
`;

MarginTop.displayName = "MarginTop";

export const MarginBottom = styled(Fill)`
    margin-bottom: 8px;
`;

MarginBottom.displayName = "MarginBottom";

export const MarginLeft = styled(Fill)`
    margin-left: 8px;
`;

MarginLeft.displayName = "MarginLeft";

export const MarginRight = styled(Fill)`
    margin-right: 8px;
`;

MarginRight.displayName = "MarginRight";

export const Margin = styled(Fill)`
    margin: 4px;
`;

Margin.displayName = "Margin";

export const Spacing = styled.div`
    display: block;
    width: 8px;
    height: 8px;
`;

Spacing.displayName = "Spacing";

export const Padding = styled(Fill)`
    padding: 4px;
`;

Padding.displayName = "Padding";

export const Center = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
`;

Center.displayName = "Center";

export const HideFill = styled(Fill)`
    display: ${props => (props.hidden ? "none" : "inherit")};
`;

HideFill.displayName = "HideFill";
HideFill.propTypes = {
    hidden: PropTypes.bool
};

export const Hide = styled.div`
    display: ${props => (props.hidden ? "none" : "inherit")};
`;

Hide.displayName = "Hide";
Hide.propTypes = {
    hidden: PropTypes.bool
};

export const Size = styled(Flex)`
    width: ${props => (props.absWidth != null ? props.absWidth : props.width)};
    height: ${props =>
        props.absHeight != null ? props.absHeight : props.height};

    max-width: ${props =>
        props.absWidth != null ? props.absWidth : props.maxWidth};
    max-height: ${props =>
        props.absHeight != null ? props.absHeight : props.maxHeight};

    min-width: ${props =>
        props.absWidth != null ? props.absWidth : props.minWidth};
    min-height: ${props =>
        props.absHeight != null ? props.absHeight : props.minHeight};

    overflow: ${props => (props.autoScroll ? "auto" : "visible")};
`;

Size.displayName = "Size";
Size.propTypes = {
    /** Sets minWidth, maxWidth and width to absWidth */
    absWidth: PropTypes.string,
    /** Sets minHeight, maxHeight and height to absHeight */
    absHeight: PropTypes.string,
    /** minWidth of the child */
    minWidth: PropTypes.string,
    /** minHeight of the child */
    minHeight: PropTypes.string,
    /** maxWidth of the child */
    maxWidth: PropTypes.string,
    /** maxHeight of the child */
    maxHeight: PropTypes.string,
    /** width of the child */
    width: PropTypes.string,
    /** height of the child */
    height: PropTypes.string
};

export const Order = styled(Flex)`
    order: ${props => props.order};
`;

Order.displayName = "Order";
Order.propTypes = {
    /** The order of the child  */
    order: PropTypes.number.isRequired
};
