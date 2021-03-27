import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    display: ${(props) => props.visible ? 'flex' : 'none'};

    .container {
        position: relative;
        max-width: 900px;
        width: 900px;
        height: 80vh;
        background: gainsboro;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 100px;
        display: flex;
        flex-direction: column;

        .modal-title {
            width: 100%;
            height: 50px;
            padding-top: 15px;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            svg {
                cursor: pointer;
            }
        }

        .modal-body {
            width: 100%;
            max-height: 90%;
            z-index: 2;
            display: flex;
            flex-direction: column;
        }
        .station-container {
            margin-top: 40px;
            width:100%;
            max-height: 95%;
            height: 95%;
            overflow-x: hidden;
            overflow-y: scroll;
            z-index: 1;
            display: flex;
            flex: 1;
            flex-wrap: wrap;
        }

    }

`;