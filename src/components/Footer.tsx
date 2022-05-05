import styled from 'styled-components';

const StyledFooter = styled.div({
    display: "flex",
    justifyContent: "center"
})

const StyledFooterChild = styled.div({
    width: "1200px",
    backgroundColor: "blue" 
})

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterChild>
                Footer
            </StyledFooterChild>
        </StyledFooter>
    )
}
export default Footer;