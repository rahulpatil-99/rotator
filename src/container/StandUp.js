import { connect } from 'react-redux';
import Standup from '../components/StandUp';
import choose from '../selectors/Choose';
import * as actions from './../actions/StandUp'

const mapStateToProps = state => ({
    name : choose(state.name)
})

const mapDispatchToProps = dispatch => ({
    spin: (name) => {
        dispatch(actions.remove(name));
    },

    reload: () => {
        dispatch(actions.reload)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Standup);