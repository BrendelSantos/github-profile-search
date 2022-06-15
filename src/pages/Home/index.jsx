import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Slide, Fade } from 'react-awesome-reveal';

import { Container, LogoContainer, FormContainer } from './styles';
import logov from '../../assets/logov.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useGithub from "../../hooks/github-hooks";

export default function Home() {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();
    const navigate = useNavigate();

    const submitGetUser = (e) => {
        
        e.preventDefault();

        if (!usernameForSearch) return;
        getUser(usernameForSearch);
        navigate(`/users/${usernameForSearch}`);

    };

    return (

        <Container>
            <Slide direction="down" duration={500}>
                <Fade>
                    <LogoContainer>
                        <img src={logov} alt="Github Search" />
                    </LogoContainer>
                </Fade>
            </Slide>
            <Slide direction="up" duration={500}>
                <Fade>
                    <FormContainer onSubmit={submitGetUser}>
                        <Input
                            type="text"
                            placeholder="Enter the username"
                            onChange={(event) => setUsernameForSearch(event.target.value)}
                        />
                        <Button>Search</Button>
                    </FormContainer>
                </Fade>
            </Slide>
        </Container>

    );
}
