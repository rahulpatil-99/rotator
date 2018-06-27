import { connect } from 'react-redux';
import Standup from '../components/StandUp';
import choose from '../selectors/Choose';

const mapStateToProps = state => ({
    name : choose(state.name)
})

export default connect(mapStateToProps)(Standup);