import styled from "styled-components";
import DownloadButton from "../components/Buttons/DownloadButton";
import Divider from "../components/Divider";
import Skills from "./Skills";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 10%;
`

const Title = styled.h1`
    font-size: 3rem;
    color: #2D2D2D;
    margin: 15% 0 0 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-top: 40%;
    }

`

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #2D2D2D;
    margin: auto 0;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

`

const Paragraph = styled.p`
    margin-bottom: 5%;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    
    }

`



const About = () => {
    return ( 
        <Container>
            <Title id="about">HELENA CARVALHO</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <Paragraph>Olá, bem vindo(a) ao meu portfolio!<br/>Aqui te mostro um pouco sobre meu trabalho.<br/>Explore-o e descubra como minhas ideias ganham<br/> vida através dos meus projetos.</Paragraph>
            <DownloadButton label={'Download CV'}/>
            <Divider/>
            <Skills/>
        </Container>
     );
}
 
export default About;