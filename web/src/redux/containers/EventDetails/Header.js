import { connect } from 'react-redux';
import Header from 'src/components/EventDetails/Header';


// action creators
import {
  changeShareLinksModal,
  changeLikeToTheEvent,
} from '../../actions/creators';
import { getEventStatus } from '../../actions/selectors';

const mapStateToProps = (state) => ({
  showModal: state.eventDetails.showModal,
  price: state.eventDetails.data.price,
  banner: state.eventDetails.data.url_image,
  title: state.eventDetails.data.title,
  dateStart: state.eventDetails.data.date_start,
  dateEnd: state.eventDetails.data.date_end,
  isOnline: state.eventDetails.data.is_online,
  urlLive: state.eventDetails.data.url_live,
  isConnected: state.app.isConnected,
  liked: state.eventDetails.liked,
  getEventStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeShareLinksModal: () => dispatch(changeShareLinksModal()),
  changeLikeToTheEvent: (liked) => dispatch(changeLikeToTheEvent(liked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
