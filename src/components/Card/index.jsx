import styled from "styled-components"

const StyledCard = styled.img`
    width: 200px;
`   

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
`




const Card = ({imageSrc}) => {


    return (
        <>
            <CardContainer>
                <StyledCard src={imageSrc}/>
                <button>oii</button>
            </CardContainer>
        </>
    )
}

export default Card