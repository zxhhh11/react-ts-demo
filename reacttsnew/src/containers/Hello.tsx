import Hello from '../components/Hello';
import * as actions from '../actions/index';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

const mapStateToProps = ({enthusiasmLevel,languageName}: StoreState) => {
    return {
        enthusiasmLevel,
        name:languageName
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        onIncrement:()=>{dispatch(actions.incrementEnthusiasm())},
        onDecrement:()=>{dispatch(actions.decrementEnthusiasm())},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello)