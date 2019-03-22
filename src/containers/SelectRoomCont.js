import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectRoom from 'components/SelectRoom/SelectRoom';
import { changeRoom } from 'actions';

const mapStateToProps = state => ({
  rooms: state.rooms.items,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({changeRoom}, dispatch)
);

const SelectRoomCont = connect(mapStateToProps, mapDispatchToProps)(SelectRoom);

export default SelectRoomCont;
