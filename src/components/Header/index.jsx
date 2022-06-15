import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { BackButton, Container } from './styles';
import logoh from '../../assets/logoh.svg';
import back from '../../assets/back.svg';

export default function Header() {

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    
    <Container>
      <Fade duration={500}>
        <Slide direction="down">
          <Link to="/">
            <img src={logoh} alt="Github Search" />
          </Link>
          <BackButton onClick={handleBack}>
            <img src={back} alt="Back" width="35" />
          </BackButton>
        </Slide>
      </Fade>
    </Container>
  );

}
