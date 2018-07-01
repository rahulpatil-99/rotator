import { connect } from 'react-redux';
import Standup from '../components/StandUp';
import choose from '../selectors/Choose';

const mapStateToProps = state => ({
    name : choose(state.name)
})

const mapDispatchToProps = dispatch => ({
    spin: () => {
        dispatch({type: 'SPIN'})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Standup);