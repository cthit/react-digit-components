import React from "react";

const MaxSizeDecorator = storyFn => (
    <div
        style={{
            maxWidth: "500px"
        }}
    >
        {storyFn()}
    </div>
);

export default MaxSizeDecorator;
