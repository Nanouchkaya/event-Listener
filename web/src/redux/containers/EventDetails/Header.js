import { connect } from 'react-redux';
import Header from 'src/components/EventDetails/Header';


// action creators
import {
  changeHeartIcon,
  openShareLinksModal,
  closeShareLinksModal,
} from '../../actions/creators';
import { getEventStatus } from '../../actions/selectors';

const mapStateToProps = (state) => ({
  showModal: state.eventIcons.showModal,
  likeIcon: state.eventIcons.likeIcon,
  price: state.eventDetails.data.price,
  banner: state.eventDetails.data.url_image,
  title: state.eventDetails.data.title,
  dateStart: state.eventDetails.data.date_start,
  dateEnd: state.eventDetails.data.date_end,
  isOnline: state.eventDetails.data.is_online,
  urlLive: state.eventDetails.data.url_live,
  getEventStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeHeartIcon: () => dispatch(changeHeartIcon()),
  openShareModal: () => dispatch(openShareLinksModal()),
  closeShareModal: () => dispatch(closeShareLinksModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
