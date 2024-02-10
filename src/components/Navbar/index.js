import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { AppBar, Typography } from '@mui/material';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <AppBar color='secondary' position='fixed'>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <SensorOccupiedIcon size="4rem" /> <Typography sx={{pl: 1, fontWeight: 'bold' }}>Portfolio</Typography>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems style={{alignContent: 'right'}}>
          <NavLink href="#about" style={{ display: "flex", color: "white", marginBottom: '20;', cursor: 'pointer' }}>About</NavLink>
          <NavLink href='#skills' style={{ display: "flex", color: "white", marginBottom: '20;', cursor: 'pointer' }}>Skills</NavLink>
          <NavLink href='#experience' style={{ display: "flex", color: "white", marginBottom: '20;', cursor: 'pointer' }}>Experience</NavLink>
          <NavLink href='#projects' style={{ display: "flex", color: "white", marginBottom: '20;', cursor: 'pointer' }}>Projects</NavLink>
          <NavLink href='#education' style={{ display: "flex", color: "white", marginBottom: '20;', cursor: 'pointer' }}>Education</NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer> */}
        {
          isOpen &&
          <MobileMenu variant='contained' isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            {/* <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
          </MobileMenu>
        }
      </NavbarContainer>
    </AppBar>
  )
}

export default Navbar