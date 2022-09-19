
import styled from 'styled-components';

export const WrapperLogReg = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;


    background-color: transparent;
    padding-top: 200px;

    Form {
        padding: 20px;
        width: 50%;
        border: 10px solid black;
        border-radius: 50px;

        &:hover {
            border: 10px solid blue;
        
        }
    }


    @media screen and (max-width: 880px) {
        padding-top: 80px;
        
        Form{
            width: 90%;

        }
    }
`;