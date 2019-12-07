// == Types == //
/* Action */
export const GET_EVENT_IN_PROGRESS = 'GET_EVENT_IN_PROGRESS';
export const GET_EVENT_DETAILS = 'GET_EVENT_DETAILS';
export const CHANGE_SHARE_LINKS_MODAL = 'CHANGE_SHARE_LINKS_MODAL';

/* Get */
export const FETCH_EVENT_IN_PROGRESS = 'FETCH_EVENT_IN_PROGRESS';
export const FETCH_NEXT_EVENTS = 'FETCH NEXT EVENTS';
export const FETCH_EVENT_DETAILS = 'FETCH_EVENT_DETAILS';
export const NEXT_EVENTS = 'NEXT_EVENTS';


// == Creators == //
/* Action */
export const getEventInProgress = () => ({
  type: GET_EVENT_IN_PROGRESS,
});
export const getEventDetails = (id = 10) => ({
  type: GET_EVENT_DETAILS,
  id,
});
export const changeShareLinksModal = () => ({
  type: CHANGE_SHARE_LINKS_MODAL,
});

/* Get */
export const fetchEventInProgress = (event) => ({
  type: FETCH_EVENT_IN_PROGRESS,
  event,
});
export const fetchNextEvents = (data) => ({
  type: FETCH_NEXT_EVENTS,
  data,
});
export const fetchEventDetails = (data) => ({
  type: FETCH_EVENT_DETAILS,
  data,
});
export const nextEvents = () => ({
  type: NEXT_EVENTS,
});
