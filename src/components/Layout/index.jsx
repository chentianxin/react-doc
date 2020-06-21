import React  from 'react';
import styled from 'styled-components';
import { CssBaseline, Toolbar, } from '@material-ui/core';
import { Root, getHeader, getDrawerSidebar, getSidebarTrigger, getSidebarContent, getCollapseBtn, getContent, getFooter, getStandardScheme, } from '@mui-treasury/layout';
import 'fontsource-roboto';
import { useConcent } from 'concent';
import { NavContentMockUp } from '@mui-treasury/mockup/layout';
import HeaderContent from './HeaderContent';
import useStyles from "./style";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const standardScheme = getStandardScheme();

export default function Layout() {
  const { moduleComputed: { muiTheme } } = useConcent('theme');

  return (
    <Root
      theme = { muiTheme }
      scheme = { standardScheme }
    >
      <LayoutContent />
    </Root>
  )
}

function LayoutContent() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header>
        <Toolbar
          classes = {{
            root: classes.headerToolbarRoot,
          }}
        >
          <SidebarTrigger
            sidebarId = 'primarySidebar'
          />
          <HeaderContent  />
        </Toolbar>
      </Header>
      <DrawerSidebar
        sidebarId = 'primarySidebar'
        classes = {{
          paper: classes.drawerPaperRoot,
        }}
      >
        <SidebarContent
          className = { classes.sidebarContentRoot }
        >
          <NavContentMockUp />
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Content>
        {/*<ContentMockUp />*/}
      </Content>
      <Footer>
        {/*<FooterMockUp />*/}
      </Footer>
    </>
  )
}