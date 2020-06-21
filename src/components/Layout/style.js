import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerToolbarRoot: {
    justifyContent: 'space-between',
  },
  drawerPaperRoot: {
    overflow: 'hidden',
  },
  sidebarContentRoot: {
    'div&': {
      overflowX: 'hidden',
    },
  },
})

export default useStyles;

export const useHeaderContentStyles = makeStyles(({ breakpoints, spacing }) => ({
  title: {
    minWidth: 0,
    fontSize: 18,
    fontWeight: 900,
  },
  paletteTypeText: {
    margin: `0 ${ spacing(.5) }px 0 ${ spacing() }px`,
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'block',
    },
  },
}))
