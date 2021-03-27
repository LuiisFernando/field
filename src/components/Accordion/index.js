import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import * as Styled from './styles';

function Accordion({ title, content, open, index, toggle }) {

    return (
        <Styled.Container>
            <div className={"containerAcc " + (open ? 'open' : '')} key={index} onClick={() => toggle(index)}>
                <div className="title">
                    <p>{title}</p>
                    {open ? (
                        <FiChevronUp color="#000" />
                    ) : (
                        <FiChevronDown color="#000" />
                    )}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </Styled.Container>
    );
}

export default Accordion;