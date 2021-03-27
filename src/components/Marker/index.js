import React, { useState } from 'react';

import * as Styled from './style';

function Marker({ city, network, onClick, country }) {

    return (
        <>
            <Styled.Wrapper
                alt={city}
                onClick={() => onClick(network)}
            />
        </>
    )

    // return (
    //     <div onClick={() => markerClick()}>
    //         <img src="https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg" style={{ width: 15, height: 15 }} alt="marker-img" />
    //         <div style={{ width: 200, height: 100, background: '#FFF', display: show ? 'flex' : 'none', marginRight: -50 }}>
    //         </div>


    //     </div>
    // );
}

export default Marker;