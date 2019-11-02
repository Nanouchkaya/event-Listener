// https://momentjs.com/docs/#/displaying/format/
import moment from 'moment';

// fonction pour définir si l'evt est en cours, à venir ou terminé (dans eventDetails)
export const getEventStatus = (dateStart, dateEnd) => {
  const now = moment().format("YYYY-MM-DD");
  dateStart = moment(dateStart, "YYYY-MM-DD");
  dateEnd = moment(dateEnd, "YYYY-MM-DD");
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
  dateStart = moment(dateStart, "YYYY-MM-DD").format('DD MMM YYYY');
  dateEnd = moment(dateEnd, "YYYY-MM-DD").format('DD MMM YYYY');
  console.log(dateEnd)

  if (dateEnd !== dateStart) {
    return `Du ${dateStart} au ${dateEnd}`;
  }
  return moment(dateStart, "DD MMM YYYY").format('ddd DD MMM YYYY');
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
  if(dir === 'right' && (totalElt * -width) !== slide) {
    slide -= width;
    action(slide);
  }
    
  // pour slide vers la gauche
  if (dir === 'left' && slide !== 0) {
    slide += width;
    action(slide);
  }
};
