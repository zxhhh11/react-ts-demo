import React from 'react';
import { emphasize, withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: 24,
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(props:any) {
//   event.preventDefault();
props.props.history.push(`${process.env.PUBLIC_URL}/module2`)
console.log(props.props.location)

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    avatar: {
      background: 'none',
      marginRight: -theme.spacing(1.5),
    },
  }),
);

export default function CustomizedBreadcrumbs(props:any) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="Breadcrumb">
        <StyledBreadcrumb
          component="span"
        //   href="#"
          label="Module1"
          avatar={
            <Avatar className={classes.avatar}>
              <HomeIcon />
            </Avatar>
          }
      
          onClick={()=>handleClick(props)}
        />
        <StyledBreadcrumb  component="span" label="M1Part" onClick={()=>handleClick(props)} />
        {/* <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        /> */}
      </Breadcrumbs>
    </Paper>
  );
}
