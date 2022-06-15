import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  padding: 16px;
  user-select: none;
  z-index: 99999;
  margin: 8px;
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 5px solid ${(props) => props.theme.primary};
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const Repositories = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizeBig};
  color: ${(props) => props.theme.secondary};
  margin-bottom: 8px;
  margin-top: 0;
`;
