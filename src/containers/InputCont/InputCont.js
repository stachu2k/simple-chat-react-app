import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'components';
import { sendMessage } from 'actions';

const mapStateToProps = state => ({
  nickname: state.nickname,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({sendMessage}, dispatch)
);

const InputCont = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputCont;
