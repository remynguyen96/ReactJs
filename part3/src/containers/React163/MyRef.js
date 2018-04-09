import React from 'react';

const MyRef = React.forwardRef((props, ref) => (
    <input type="text" ref={ref} {...props} />
));
export default MyRef;
