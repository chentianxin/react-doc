import React, { useState, useCallback, } from 'react';
import { Typography, Button, Menu, MenuItem } from "@material-ui/core";
import Brightness6Icon from '@material-ui/icons/Brightness6';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useConcent } from 'concent';
import { useHeaderContentStyles } from './style';

export default function HeaderContent() {
  const classes = useHeaderContentStyles();
  const [ themeTypeAnchorEl, setThemeTypeAnchorEl ] = useState(null);
  const handleThemeTypeOpen = useCallback(({ currentTarget }) => setThemeTypeAnchorEl(currentTarget), []);
  const handleThemeTypeClose = useCallback(() => setThemeTypeAnchorEl(null), []);
  const { dispatch, moduleComputed, state, } = useConcent('theme');
  const handleMenuItemClose = useCallback(async ({ currentTarget: { dataset: { paletteType } } }) => {
    handleThemeTypeClose();
    await dispatch('changePaletteType', paletteType / 1);
  }, [dispatch, handleThemeTypeClose]);

  return (
    <>
      <Typography
        noWrap
        color = 'textSecondary'
        className = { classes.title }
      >
        React 教程
      </Typography>

      <div>
        <Button
          onClick = { handleThemeTypeOpen }
        >
          <Brightness6Icon />
          <span
            className = { classes.paletteTypeText }
          >
            { moduleComputed.paletteTypeText }
          </span>
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          keepMounted
          anchorEl = { themeTypeAnchorEl }
          open = { !!themeTypeAnchorEl }
          onClose = { handleThemeTypeClose }
        >
          <MenuItem
            onClick = { handleMenuItemClose }
            selected = { state.paletteType === 0 }
            data-palette-type = '0'
          >
            浅色模式
          </MenuItem>
          <MenuItem
            onClick = { handleMenuItemClose }
            selected = { state.paletteType === 1 }
            data-palette-type = '1'
          >
            深色模式
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}