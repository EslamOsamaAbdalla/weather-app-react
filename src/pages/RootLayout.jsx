import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
const Header = styled.header`
    background-color: var(--blue-color);
    color: var(--red-color);
    width: 100%;
    height: 12vh;
    padding: 15px 0;
    h1{
        padding: 0 15px;
        text-transform: capitalize;
        user-select: none;
    }
`
function RootLayout() {
    return (
        <>
        <Header>
            <h1>wether app</h1>
        </Header>
            <Outlet/>
        </>
    )
}
export default RootLayout