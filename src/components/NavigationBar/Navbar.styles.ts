
import styled from "styled-components";

import { Link } from 'react-router-dom';


export const Wrapper = styled.div`

`

export const NavigationLink = styled(Link)`

    text-decoration: none;
    underline: none;
    padding: 10px;

    border: 2px solid transparent;
    border-radius: 2px;

    &:hover {
        border: 2px solid blue;
        border-radius: 20px;
        transition: 0.3s;
    }

`;