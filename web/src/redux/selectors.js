// https://momentjs.com/docs/#/displaying/format/
import moment from 'moment';

// fonction pour définir si l'evt est en cours, à venir ou terminé (dans eventDetails)
export const getEventStatus = (dateStart, dateEnd) => {
  const now = new Date();
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  
  let eventState = 'A venir';
  if (moment(start).isBefore(now) && moment(end).isAfter(now)) {
    eventState = 'En cours';
  }
  if (moment(now).isAfter(end)) {
    eventState = 'Terminé';
  }
  return eventState;
};

// fonction pour afficher la date de fin d'un evt s'il dure plus d'un jour (dans eventDetails)
export const getEventDate = (dateStart, dateEnd) => {
  let start = new Date(dateStart);
  let end = new Date(dateEnd);
  
  start = moment(start, 'YYYY-MM-DD').locale('fr').format('dddd DD/MM/YYYY');
  end = moment(end, 'YYYY-MM-DD').locale('fr').format('dddd DD/MM/YYYY');

  if (end !== start) {
    return `Du ${start} au ${end}`;
  }
  return start;
};


/**
 * @param {number} totalElt nombre total d'éléments dans le slider
 * @param {number} slide valeur css left du bloc contenant les éléments
 * @param {number} width largeur d'un élément
 * @param {function} action à dispatcher
 * @param {string} dir direction
 */
export const slider = (totalElt, slide, width, action, dir) => {

  // pour slide vers la droite
  if (dir === 'right' && (totalElt * -width) !== slide) {
    slide -= width;
    action(slide);
  }

  // pour slide vers la gauche
  if (dir === 'left' && slide !== 0) {
    slide += width;
    action(slide);
  }
};

/**
 * @param {string} address
 * @var addressArray retourne un tableau de chaque ligne de l'adresse
 * @var lastIndex permet de récupérer le nombre d'elt du tableau - 1, soit le dernier index
 */
export const getCity = (address) => {
  const addressArray = address.split('<br />');
  const lastIndex = addressArray.length - 1;
  return addressArray[lastIndex];
};
