import { Outlet } from 'react-router-dom'
import {Header} from '../Header/Header'
import { Container } from './Layout.style'

export const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}