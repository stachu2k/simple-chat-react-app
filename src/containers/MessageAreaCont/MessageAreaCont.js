import { connect } from 'react-redux';
import MessageArea from 'components/MessageArea/MessageArea';

const mapStateToProps = state => ({
  messages: state.messages,
});

const MessageAreaCont = connect(mapStateToProps)(MessageArea);

export default MessageAreaCont;
