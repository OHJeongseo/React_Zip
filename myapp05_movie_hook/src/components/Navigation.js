import { Container, Navbar, Nav } from "react-bootstrap"
/*react-bootstrap의 Link는 실질적인 기능이 없다-> url이름(App.js 라우터 path="url"와 같아야한다),
 화면상이름을 표시 ("실제 구현은 App.js에서 설정한 라우터의 값으로 이동된다)*/
const Navigation= ()=>{  
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/index">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/list">Movie</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
}
export default Navigation