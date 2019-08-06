import PropTypes from "prop-types";
import React from "react";
import { Grid } from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const DigitDisplayData = ({ data, keysText, keysOrder }) => (
    <Grid columns={`auto 1fr`} margin={"4px"}>
        {keysOrder
            .filter(keyOrder => Object.keys(data).includes(keyOrder))
            .map(keyOrder => (
                <React.Fragment key={keyOrder}>
                    <Text alignRight bold text={keysText[keyOrder]} />
                    <Text text={data[keyOrder]} />
                </React.Fragment>
            ))}
    </Grid>
);

DigitDisplayData.displayName = "DigitDisplayData";
DigitDisplayData.propTypes = {
    /** The data to display. It's an object with keys that represent a value.  */
    data: PropTypes.objectOf(PropTypes.any),
    /** The pretty text of the keys to display.  */
    keysText: PropTypes.objectOf(PropTypes.string),
    /** The order of the keys. An array of keys.  */
    keysOrder: PropTypes.arrayOf(PropTypes.string)
};

DigitDisplayData.defaultProps = {
    data: {},
    keysText: {},
    keysOrder: []
};

export default DigitDisplayData;
