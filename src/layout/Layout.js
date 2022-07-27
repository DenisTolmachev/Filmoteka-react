import { Outlet } from 'react-router-dom'
import {Header} from './common/Header/Header'
import { Container } from './Layout.style'

export const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}