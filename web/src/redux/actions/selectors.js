// https://momentjs.com/docs/#/displaying/format/
import moment from 'moment';

// fonction pour définir si l'evt est en cours, à venir ou terminé (dans eventDetails)
export const getEventStatus = (dateStart, dateEnd) => {
  const now = moment().format('DD MMM YYYY');
  let eventState = 'A venir';

  if (moment(dateStart).isBefore(now) && moment(dateEnd).isAfter(now)) {
    eventState = 'En cours';
  }
  if (moment(now).isAfter(dateEnd)) {
    eventState = 'Terminé';
  }
  return eventState;
};

// fonction pour afficher la date de fin d'un evt s'il dure plus d'un jour (dans eventDetails)
export const getEventDate = (dateStart, dateEnd) => {
  const start = moment(dateStart).format('DD MMM YYYY');
  const end = moment(dateEnd).format('DD MMM YYYY');

  if (end !== start) {
    return `Du ${start} au ${end}`;
  }
  return moment(start).format('ddd DD MMM YYYY');
};
