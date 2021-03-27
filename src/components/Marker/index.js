import React from 'react';

import * as Styled from './style';

function Marker({ city, network, onClick, country }) {

    return (
        <>
            <Styled.Wrapper
                alt={city}
                onClick={() => onClick(network)}
            />
        </>
    );
}

export default Marker;