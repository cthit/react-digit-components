import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Checkbox, TableRow, TableCell, TableBody } from "@material-ui/core";
import { Text } from "../../../../styles/digit-text/DigitText.styles";
import DigitIfElseRendering from "../../../../declaratives/digit-if-else-rendering";

const StyledCheckbox = styled(Checkbox)`
  text-align: center;
`;

const StyledTableRow = styled(TableRow)`
  display: block;
  height: auto;
  margin-top: 10px;
  background-color: white;

  @media (min-width: 600px) {
    height: 48px;
    display: table-row;
    border: 0;
  }
`;

const StyledTableCell = styled(TableCell)`
  display: block;
  padding: 12px;
  font-size: 14px;
  text-align: right;
  border: 0;

  &:before {
    content: attr(datatitle);
    font-weight: 500;
    float: left;
    color: #000;
  }

  @media (min-width: 600px) {
    display: table-cell;
    padding: 20px 24px;
    font-size: 14px;
    text-align: left;
    border-bottom: 1px solid rgba(244, 244, 244, 1);

    &:before {
      content: "";
      display: none;
    }
  }

  //For some reason TableCell likes to do this.
  &:last-child {
    padding-right: 12px;
  }
`;

const DigitTableBody = ({
  page,
  rowsPerPage,
  data,
  isSelected,
  handleClick,
  rowShouldBeShown,
  headerTexts,
  columnsOrder,
  idProp
}) => (
  <TableBody>
    {data
      .filter(n => {
        return rowShouldBeShown(n);
      })
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(n => {
        const selected = isSelected(n[idProp]);
        return (
          <StyledTableRow
            hover
            key={n[idProp]}
            role="checkbox"
            aria-checked={selected}
            tabIndex={-1}
            selected={selected}
          >
            <DigitIfElseRendering
              test={headerTexts.__checkbox != null}
              ifRender={() => (
                <StyledTableCell>
                  <StyledCheckbox
                    onClick={event => handleClick(event, n[idProp])}
                    checked={selected}
                  />
                </StyledTableCell>
              )}
            />

            {columnsOrder.map(column => (
              <StyledTableCell key={column} datatitle={headerTexts[column]}>
                <Text text={n[column]} />
              </StyledTableCell>
            ))}

            <DigitIfElseRendering
              test={headerTexts.__link != null}
              ifRender={() => (
                <DigitIfElseRendering
                  test={n.__link != null}
                  ifRender={() => (
                    <StyledTableCell datatitle={headerTexts.__link}>
                      <DigitLink to={n.__link}>
                        <DigitButton text={headerTexts.__link} raised />
                      </DigitLink>
                    </StyledTableCell>
                  )}
                  elseRender={() => <StyledTableCell />}
                />
              )}
            />
          </StyledTableRow>
        );
      })}
  </TableBody>
);

DigitTableBody.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  isSelected: PropTypes.func,
  handleClick: PropTypes.func,
  rowShouldBeShown: PropTypes.func,
  headerTexts: PropTypes.objectOf(PropTypes.string),
  columnsOrder: PropTypes.arrayOf(PropTypes.string),
  idProp: PropTypes.string
};

export default DigitTableBody;
