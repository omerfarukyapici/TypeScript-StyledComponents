import styled from 'styled-components';

const Container = styled.div({
    display: "flex",
    justifyContent: "center"
})

const Title = styled.h1({
    width: "1200px",
    backgroundColor: "blue",
    color: "red",
})

const Header = () => {
    return (
        <Container>
            <Title >
                Header
            </Title>
        </Container>
    )
}
export default Header;