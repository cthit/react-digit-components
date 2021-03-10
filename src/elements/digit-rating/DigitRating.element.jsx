import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { Text } from "../../styles/digit-text/DigitText.styles";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const DigitRating = ({
    upperLabel,
    name,
    onBlur,
    value,
    onChange,
    readOnly,
    large,
    precision
}) => {
    return (
        <Column>
            {upperLabel && <Text text={upperLabel} />}
            <Rating
                name={name}
                onChange={readOnly ? null : (e, newValue) => onChange(newValue)}
                value={value}
                readOnly={readOnly}
                onBlur={onBlur}
                size={large ? "large" : "medium"}
                precision={precision}
            />
        </Column>
    );
};

DigitRating.displayName = "DigitRating";

DigitRating.defaultProps = {
    readOnly: false,
    large: false,
    onChange: () => {},
    onBlur: () => {},
    precision: 1
};

DigitRating.propTypes = {
    /** Label that's over the stars */
    upperLabel: PropTypes.string,
    /** A unique name relative to a form. e.g. rating.*/
    name: PropTypes.string,
    /** The onBlur event occurs when DigitRating loses focus. Used if `readOnly` is false. */
    onBlur: PropTypes.func,
    /** A decimal number between 1 - 5. Precision is 0.5. */
    value: PropTypes.number.isRequired,
    /** Used if `readOnly` is false. */
    onChange: PropTypes.func,
    /** If false, then this component is an input with the normal value/onChange */
    readOnly: PropTypes.bool,
    /** If the stars should be larger */
    large: PropTypes.bool,
    /** The precision of the rating. 1 is per star. 0.5 is half a star. */
    precision: PropTypes.number
};

export default DigitRating;
