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
        height: 70vh;
        background: #f2f2f2;
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

            h2 {
                padding-left: 25px;
                margin-bottom: 20px;
                font-size: 20px;
                margin-top: 40px;
            }
            h2.no-station {
                display: none;
            }
        }

        .info-container {
            padding-left: 25px;

            span {
                font-weight: bold;
            }

            p {
                margin-bottom: 10px;
                font-size: 14px;
            }

            h2 {
                text-align: center;
                margin-bottom: 20px;
                font-size: 30px;
            }
        }

        .station-container {
            width:100%;
            max-height: 95%;
            height: 95%;
            overflow-x: hidden;
            overflow-y: scroll;
            z-index: 1;
            display: flex;
            flex: 1;
            flex-wrap: wrap;


            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1; 
            }
            
            ::-webkit-scrollbar-thumb {
                background: #888; 
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #555; 
            }
        }

        .no-station {
            margin: 150px auto;

            .station-title {
                display: none;
            }
        }

    }

`;