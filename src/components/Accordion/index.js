import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import * as Styled from './styles';

function Accordion({ index, toggle, station }) {

    return (
        <Styled.Container>
            <div className={"containerAcc " + (station.open ? 'open' : '')} key={index} onClick={() => toggle(index)}>
                <div className="title">
                    <p>{station.name}</p>
                    {station.open ? (
                        <FiChevronUp color="#000" />
                    ) : (
                        <FiChevronDown color="#000" />
                    )}
                </div>
                <div className="content">
                    <p><span>Empty slot:</span> {station.empty_slots}</p>
                    <p><span>Free bikes:</span> {station.free_bikes}</p>
                    <p><span>Latitude:</span> {station.latitude}</p>
                    <p><span>Longitude:</span> {station.longitude}</p>
                    <p><span>ID:</span> {station.id}</p>
                    <p><span>TimeStamp:</span> {station.timestamp}</p>
                    <p><span>Station name:</span> {station.name}</p>
                </div>
            </div>
        </Styled.Container>
    );
}

export default Accordion;