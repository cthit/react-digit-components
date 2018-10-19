import React from "react";
import PropTypes from "prop-types";
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
  grid-column-gap: ${props => props.padding || props.columnGap || ""};
  grid-row-gap: ${props => props.padding || props.rowGap || ""};
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
  /** Padding between items. Will precedence columnGap and rowGap */
  padding: PropTypes.string,
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
    minItemHeight,
    children,
    inline,
    columns,
    rows,
    areas,
    padding,
    columnGap,
    rowGap,
    jusitfyItems,
    alignItems,
    justifyContent,
    alignContent,
    autoFlow,
    fillElement
  }) => (
    <Grid
      columns={`repeat(auto-fit, minmax(${minItemWidth}, 1fr));`}
      padding={padding}
      inline={inline}
      columns={columns}
      rows={rows}
      areas={areas}
      columnGap={columnGap}
      rowGap={rowGap}
      justifyItems={jusitfyItems}
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
  /** Padding between items. Will precedence columnGap and rowGap */
  padding: PropTypes.string,
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
    padding,
    fillElement,
    children,
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
    padding: ${props => (props.padding == null ? "8px" : props.padding)};
  }
  flex: ${props => (props.fillElement ? "1" : "")};
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
  /** Sets the padding between the children */
  padding: PropTypes.string,
  /** Fill available layout with flex. */
  fillElement: PropTypes.bool,
  /** All the children */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const Row = styled(
  ({
    center,
    centerVertical,
    centerHorizontal,
    leftAlign,
    rightAlign,
    reverse,
    padding,
    fillElement,
    children,
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
    padding: ${props => (props.padding == null ? "8px" : props.padding)};
  }
  flex: ${props => (props.fillElement ? "1" : "")};
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
  /** Sets the padding between the children */
  padding: PropTypes.string,
  /** Fill available layout with flex. */
  fillElement: PropTypes.bool,
  /** All the children */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const DownRightPosition = styled.div`
  position: absolute;
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

export const VerticalFill = styled(Fill)`
  flex-direction: row;
  align-items: center;
`;

VerticalFill.displayName = "VerticalFill";

export const MarginTop = Fill.extend`
  margin-top: 8px;
`;

MarginTop.displayName = "MarginTop";

export const MarginBottom = Fill.extend`
  margin-bottom: 8px;
`;

MarginBottom.displayName = "MarginBottom";

export const MarginLeft = Fill.extend`
  margin-left: 8px;
`;

MarginLeft.displayName = "MarginLeft";

export const MarginRight = Fill.extend`
  margin-right: 8px;
`;

MarginRight.displayName = "MarginRight";

export const Margin = Fill.extend`
  margin: 4px;
`;

Margin.displayName = "Margin";

export const Spacing = styled.div`
  display: block;
  width: 8px;
  height: 8px;
`;

Spacing.displayName = "Spacing";

export const Padding = Fill.extend`
  padding: 8px;
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
  width: PropTypes.width,
  /** height of the child */
  height: PropTypes.height
};

export const Order = styled(Flex)`
  order: ${props => props.order};
`;

Order.displayName = "Order";
Order.propTypes = {
  /** The order of the child  */
  order: PropTypes.number.isRequired
};
