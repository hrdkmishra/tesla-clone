import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'; 

function Header() {
    const[burgerStatus, setBurgerStatus] = useState(false)
    
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" />
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model Y</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Solar Panel</div>
                <div>Solar Roof</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>               
                <a href="#">Login</a>               
                <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&response_type=code&client_id=ownership&scope=offline_access%20email&audience=https%3A%2F%2Fownership.tesla.com%2F">Signup</a>
                <MenuIconContainer onClick={() =>setBurgerStatus(true)} >
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BugerNav status ={burgerStatus}>
                <CLoseContainer onClick={() =>setBurgerStatus(false)} >
                    <Close>

                    </Close>
                </CLoseContainer>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BugerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-height : 60px;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    
`
const MenuGroup = styled.div`
    display:flex;
    text-transform: uppercase;
    div{
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BugerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform:${props => props.status ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;
        }
    }

`

const Close = styled(CloseIcon)`
    cursor: pointer;
`

const CLoseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`