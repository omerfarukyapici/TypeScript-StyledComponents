import styled from 'styled-components';

export const StyledContent = styled.div`
    display: flex;
    justify-content: center;

    background-color: black;

`;

const StyledContentChild = styled.div`
    background-color: red;
    width: 1200px;

    h1 {
        background-color: black;
        color: white;
    }

    &:hover {
        background-color: blue;
    }
`;

const Content = () => {
    return (
        <StyledContent >
            <StyledContentChild>
                <h1>This is a h1 tag</h1>
                Content
            </StyledContentChild>
        </StyledContent>
    )
}
export default Content;