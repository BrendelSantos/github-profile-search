import React from 'react';
import { WrapperTabs, WrapperTabList, WrapperTab, WrapperTabPanel, Repositories, Title } from './styles';
import Repository from '../../components/Repository';
import PropTypes from 'prop-types';

export default function TabsRepositories(props) {

    const { repositories, starred } = props;

    return (

        <WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected">
            <WrapperTabList>
                <WrapperTab>
                    <Title>
                        Repositories
                    </Title>
                </WrapperTab>
                <WrapperTab>
                    <Title>
                        Starred
                    </Title>
                </WrapperTab>
            </WrapperTabList>
            <WrapperTabPanel>
                <Repositories>
                    {repositories
                        .map((repository) => (
                            <Repository key={repository.name} repository={repository} />
                        ))}
                </Repositories>
            </WrapperTabPanel>
            <WrapperTabPanel>
                <Repositories>
                    {starred
                        .map((repository) => (
                            <Repository key={repository.name} repository={repository} />
                        ))}
                </Repositories>
            </WrapperTabPanel>
        </WrapperTabs>
    );

}

TabsRepositories.propTypes = {

    repositories: PropTypes.arrayOf(PropTypes.object),
    starred: PropTypes.arrayOf(PropTypes.object)

}