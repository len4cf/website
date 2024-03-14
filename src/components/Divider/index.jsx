import styled from "styled-components";

const StyledDivider = styled.hr`
    width: 100%;
    border: none;
    height: 2px;
    background: #D2D2D2;
    margin: 30% 0  2% 0;
`


const Divider = () => {
    return ( 
        <StyledDivider />
     );
}
 
export default Divider;
