import styled from "styled-components";


const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #2D2D2D;
    margin: 15% 0 0 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-top: 40%;
    }

`

const Title = ({title}) => {
    return ( 
        <StyledTitle>{title}</StyledTitle>
     );
}
 
export default Title;