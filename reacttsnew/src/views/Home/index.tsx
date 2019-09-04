import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';
import Module5 from './pages/Module5';
import Module6 from './pages/Module6';
import Module7 from './pages/Module7';
import Hello from '../../containers/Hello';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link, { LinkProps } from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';
import { Route, Switch, Redirect } from "react-router-dom";
import { Omit } from '@material-ui/types';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';

import CustomizedBreadcrumbs from '../../components/Breadcrumbs'
const drawerWidth = 240;
// interface RouterBreadcrumbsState {
//     readonly open: boolean;
// }

interface ListItemLinkProps extends LinkProps {
    to: string;
    open?: boolean;
    hasIcon: boolean;
    icon?: any;
    primary: string
}
// const breadcrumbNameMap: { [key: string]: string } = {
//     '/inbox': 'Inbox',
//     '/inbox/important': 'Important',
//     '/trash': 'Trash',
//     '/spam': 'Spam',
//     '/drafts': 'Drafts',
// };
function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
    const { to, open, hasIcon, icon, primary, ...other } = props;
    // const primary = breadcrumbNameMap[to];

    return (
        <li>
            <ListItem button component={RouterLink} to={to} {...other}>
                {hasIcon ? <ListItemIcon >{icon}</ListItemIcon> : <span style={{ display: 'inline-block', width: '70px' }}></span>}
                <ListItemText primary={primary} />
                {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export default function Home(props:any) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openNew, setOpenNew] = React.useState(false);
    function handleDrawerOpen() {
        setOpen(true);
    }
    function handleClick() {
        if (open) {
            setOpenNew(!openNew)
          }
    }
    function handleDrawerClose() {
        setOpen(false);
        setOpenNew(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Material-UI React-TypeScript
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemLink to={`${process.env.PUBLIC_URL}/module1/m1part`} primary='Module one' open={openNew} icon={<HomeIcon />} hasIcon={true} onClick={handleClick} />
                    <Collapse component="li" in={openNew} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            <ListItemLink to={`${process.env.PUBLIC_URL}/module1/m1part`} primary='Module1 Part' hasIcon={false} className={classes.nested} />
                            <ListItemLink to={`${process.env.PUBLIC_URL}/module1/m2part`} primary='Module2 Part' hasIcon={false} className={classes.nested} />
                            <ListItemLink to={`${process.env.PUBLIC_URL}/module1/m3part`} primary='Module3 Part' hasIcon={false} className={classes.nested} />
                        </List>
                    </Collapse>
                    <ListItemLink to={`${process.env.PUBLIC_URL}/module2`} primary='Module Two' icon={<CloudUploadIcon />} hasIcon={true} />
                    <ListItemLink to={`${process.env.PUBLIC_URL}/module3`} primary='Module Three' icon={<BarChartIcon />} hasIcon={true} />
                    <ListItemLink to={`${process.env.PUBLIC_URL}/module4`} primary='Module Four' icon={<AccountBalanceIcon />} hasIcon={true} />
                </List>
                <Divider />
                <List>
                    {['Module 5', 'Module 6', 'Module 7'].map((text, index) => (
                        <ListItemLink key={text} to={`${process.env.PUBLIC_URL}/${text.replace(/\s*/g, "").toLowerCase()}`} primary={text} icon={<BarChartIcon />} hasIcon={true} />
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
              <CustomizedBreadcrumbs props={props}></CustomizedBreadcrumbs>
         {/* <Hello></Hello> */}
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/module1`} component={Module1}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module2`} component={Module2}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module3`} component={Module3}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module4`} component={Module4}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module5`} component={Module5}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module6`} component={Module6}></Route>
                    <Route path={`${process.env.PUBLIC_URL}/module7`} component={Module7}></Route>
                    <Redirect path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/module1`}></Redirect>
                </Switch>
            </main>
        </div>
    );
}