import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface Props {
    name: string,
    enthusiasmLevel: number,
    onIncrement?: () => void;
    onDecrement?: () => void
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }),
);

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    const classes = useStyles();
    if (enthusiasmLevel < 0) {
        throw new Error('You could be a little more enthusiastic. :D')
    }
    return (
        <div>

            <div>
                Hello  {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <Button variant="contained" className={classes.button} onClick ={onIncrement}>
                    Increment
                 </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick ={onDecrement}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}

export default Hello;

