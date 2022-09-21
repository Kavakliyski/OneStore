
import styled from 'styled-components';

export const OutletContainer = styled.div`
    background-color: transparent ;
    padding: 100px;

    h1{
        text-align: center;
        font-weight: bold;
        font-size: 84px;
    }

    h3{
        margin: 50px;
    }

    .OutletInnerWrapper{
        background-color: white;
        border-radius: 20px;
    }

    @media screen and (max-width: 880px) {
        padding: 10px;
    }
`

