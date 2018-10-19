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
  display: PropTypes.oneOf(["flex", "inline-flex"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
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
  inline: PropTypes.bool,
  columns: PropTypes.string,
  rows: PropTypes.number,
  areas: PropTypes.string,
  padding: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  justifyItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf(["start", "end", "center", "stretch"]),
  justifyContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "stretch",
    "space-around",
    "space-between",
    "space-evenly"
  ]),
  alignContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "stretch",
    "space-around",
    "space-between",
    "space-evenly"
  ]),
  autoColumns: PropTypes.string,
  autoRows: PropTypes.string,
  autoFlow: PropTypes.string,
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
  columnStart: PropTypes.string,
  columnEnd: PropTypes.string,
  rowStart: PropTypes.string,
  rowEnd: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string
};

export const UniformGrid = styled(
  ({ minItemWidth, minItemHeight, children, ...rest }) => (
    <Grid columns={`repeat(auto-fit, minmax(${minItemWidth}, 1fr));`} {...rest}>
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
  minItemWidth: PropTypes.string,
  minItemHeight: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
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
  center: PropTypes.bool,
  centerVertical: PropTypes.bool,
  centerHorizontal: PropTypes.bool,
  topAlign: PropTypes.bool,
  bottomAlign: PropTypes.bool,
  reverse: PropTypes.bool,
  padding: PropTypes.string,
  fillElement: PropTypes.bool,
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
  center: PropTypes.bool,
  centerVertical: PropTypes.bool,
  centerHorizontal: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
  reverse: PropTypes.bool,
  padding: PropTypes.string,
  fillElement: PropTypes.bool,
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

export const Fill = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;

  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const VerticalFill = styled(Fill)`
  flex-direction: row;
  align-items: center;
`;

export const MarginTop = Fill.extend`
  margin-top: 8px;
`;

export const MarginBottom = Fill.extend`
  margin-bottom: 8px;
`;

export const MarginLeft = Fill.extend`
  margin-left: 8px;
`;

export const MarginRight = Fill.extend`
  margin-right: 8px;
`;

export const Margin = Fill.extend`
  margin: 4px;
`;

export const Spacing = styled.div`
  display: block;
  width: 8px;
  height: 8px;
`;

export const Padding = Fill.extend`
  padding: 8px;
`;

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
  absWidth: PropTypes.string,
  absHeight: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string
};

export const Order = styled(Flex)`
  order: ${props => props.order};
`;

Order.displayName = "Order";
Order.propTypes = {
  order: PropTypes.number.isRequired
};
