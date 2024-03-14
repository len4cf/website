import styled from "styled-components";

const StyledDownloadButton = styled.button`
    background-color: #A4CE95;
    width: 200px;
    border: none;
    padding: 15px;
    border-radius: 10px;
    color: #2D2D2D;
    font-family: 'Epilogue', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #86B77E;
        
    }

    @media (max-width: 768px) {
        width: 150px;
        padding: 10px;
        font-size: 0.8rem;
    
    }

`

const DownloadButton = ({label}) => {
    return ( 
        <StyledDownloadButton>{label}</StyledDownloadButton>
     );
}
 
export default DownloadButton;