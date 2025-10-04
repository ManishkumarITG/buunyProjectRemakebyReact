import Header from "./Header";
import Footer from "./Footer";
import Container from '../components/Container'
import { Outlet } from "react-router-dom"
export default function LeyOut() {
    return (
        <>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </>
    )
} 