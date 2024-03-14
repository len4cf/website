import styled from "styled-components";
import Title from "../components/Title";
import typescriptIcon from "../assets/ts-icon.png"
import reactIcon from "../assets/react-icon.png"
import cssIcon from "../assets/css-icon.png"
import javascriptIcon from "../assets/js-icon.png"
import htmlIcon from "../assets/html-icon.png"
import phpIcon from "../assets/php-icon.png"
import graphqlIcon from "../assets/graph-ql.png"
import Divider from "../components/Divider";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const SkillList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
`

const Skill = styled.img`
    width: 5%;

    &:hover {
        transform: scale(1.6);
        transition: 0.5s ease-in-out;
    }

`

const Skills = () => {
    return ( 
        <Container>
            <Title title={'SKILLS'}/>
            <SkillList>
                <Skill src={typescriptIcon}/>
                <Skill src={javascriptIcon}/>
                <Skill src={htmlIcon}/>
                <Skill src={cssIcon}/>
                <Skill src={reactIcon}/>
                <Skill src={phpIcon}/>
                <Skill src={graphqlIcon}/>
            </SkillList>
            <Divider/>
        </Container>
     );
}
 
export default Skills;
