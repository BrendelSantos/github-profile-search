import React, { useEffect, useState } from "react";

import { Container } from './styles';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import NotFounded from '../../components/NotFounded';
import UserInfo from '../../components/UserInfo';

import useGithub from "../../hooks/github-hooks";
import TabsRepositories from "../../components/TabsRepositories";

export default function User() {

  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

  }, [githubState.user.login]);

  if (githubState.loading) {

    return <Spinner style={{ alignSelf: 'center' }} />;

  }

  if (githubState.error) {

    return (

      <Container>
        <Header />
        <NotFounded />
      </Container>

    );

  }

  return (
    <Container>
      <Header />
      <UserInfo user={githubState.user} startsCount={githubState.starred.length} />
      <TabsRepositories repositories={githubState.repositories} starred={githubState.starred}/>
    </Container>
  );

}
