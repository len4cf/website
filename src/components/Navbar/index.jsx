import styled from 'styled-components'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-logo.png'


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


const Navbar = () => {

    return (
        <Container>
            <Icons>
                <Icon src={github}/>
                <Icon src={linkedin}/>
            </Icons>
            <Links>
                <a href="">Sobre</a>
                <a href="">Sobre</a>
                <a href="">Sobre</a>
            </Links>

        </Container>
    )

}

export default Navbar