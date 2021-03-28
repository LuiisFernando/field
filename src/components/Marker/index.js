import React from 'react';

import * as Styled from './style';

function Marker({ network, onClick }) {

    return (
        <>
            <Styled.Wrapper
                alt={network.location.city}
                onClick={() => onClick(network)}
            />
        </>
    );
}

export default Marker;