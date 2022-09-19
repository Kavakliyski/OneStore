
import styled from 'styled-components';

export const WrapperLogReg = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;


    padding-top: 200px;

    .LogRegbackground{
        background-color: white;
        opacity: 0.8;
        border: 1px solid black;
        border-radius: 20px;
        
    }

    Form {
        padding: 20px;
        width: 100%;        
        &:hover {
        
        }
    }


    @media screen and (max-width: 880px) {
        padding-top: 80px;
        padding-right: 25px;
        
        Form{
            width: auto;
            padding: 13px;
        }
    }
`;