import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.65);
`

export const Navv = styled.nav`
    margin: auto;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 1044px;
`

export const Link =  styled(NavLink)`
    text-decoration: none;
    color: black;
    margin-right: 20px;
    font-weight: 700;

    &.active {
        color: #c92c17;
    }
`;