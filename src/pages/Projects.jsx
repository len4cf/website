import styled from "styled-components"
import Title from "../components/Title"
import Card from "../components/Card"
import cardImage from "../assets/card.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`


const Wrapper = styled.div`

    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`




const Projects = () => {
    return (
        <Container id="projects">
            <Title title={'Meus projetos'}/>
            <Wrapper>
                <Card imageSrc={cardImage} />
                <Card imageSrc={cardImage} />
                <Card imageSrc={cardImage} />
                <Card imageSrc={cardImage} />
                <Card imageSrc={cardImage} />
                <Card imageSrc={cardImage} />
            </Wrapper>
        </Container>
    )
}

export default Projects