import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageArea from 'components/MessageArea/MessageArea';
import { fetchMessages } from 'operations';
import { getIsFetching, getMessages, getSelectedRoom } from 'selectors';

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  messages: getMessages(state),
  selectedRoom: getSelectedRoom(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchMessages}, dispatch)
);

const MessageAreaCont = connect(mapStateToProps, mapDispatchToProps)(MessageArea);

export default MessageAreaCont;
