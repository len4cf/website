import styled from 'styled-components'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-logo.png'
import { HashLink as Link } from 'react-router-hash-link'


const Icons = styled.div`
    display: flex;
    gap: 20px;
`

const Icon = styled.img`
    width: 20px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Links = styled.div`
    display: flex;
    gap: 20px;

`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #2D2D2D;
    position: relative;

    &::before { 
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: #A4CE95;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

`



const Navbar = () => {

    return (
        <Container>
            <Icons>
                <Icon src={github}/>
                <Icon src={linkedin}/>
            </Icons>
            <Links>
                <StyledLink smooth to="/#about">Sobre</StyledLink>
                <StyledLink smooth to="/#projects">Projetos</StyledLink>
                <StyledLink smooth to="/#contact">Contato</StyledLink>
            </Links>

        </Container>
    )

}

export default Navbar