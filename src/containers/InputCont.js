import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from 'components/Input/Input';
import { sendMessage } from 'operations';

const mapStateToProps = state => ({
  nickname: state.nickname,
  selectedRoom: state.selectedRoom,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({sendMessage}, dispatch)
);

const InputCont = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputCont;
