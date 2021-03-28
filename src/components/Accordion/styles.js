import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    background: #FFF;
    /* margin-bottom: 1.25rem; */
    /* padding: 0 20px; */
    /* margin: 0 100px 1.25rem 20px; */
    margin-bottom: 1.25rem;
    margin-right: 20px;
    margin-left: 20px;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;

    .containerAcc .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.4s ease;
    }

    .containerAcc.open .title {
        margin-bottom: 1.25rem;
    }

    .content {
        opacity: 0;
        max-height: 0;
        overflow-y: hidden;
        transition: all 0.4s ease;
        background: #FFF;

        span {
            font-weight: bold;
        }

        p {
            margin-bottom: 10px;
            font-size: 14px;
        }
    }

    .containerAcc.open .content {
        max-height: 1000px;
        opacity: 1;
    }
`;