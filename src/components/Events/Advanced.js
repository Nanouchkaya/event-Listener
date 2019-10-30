// == Import : npm
import React from 'react';


// == Import : local
import Inputs from 'src/redux/containers/Events/Inputs';


// == Data
const tagsValues = [
  { title: 'Tech', status: true },
  { title: 'Data', status: true },
  { title: 'Code', status: true },
  { title: 'Js', status: true },
  { title: 'React', status: true },
];

const priceValues = [
  { title: 'Gratuit', status: true },
  { title: 'Payant', status: false },
];

const liveValues = [
  { title: 'Oui', status: true },
  { title: 'Non', status: false },
];

const timeValues = [
  { title: 'Date de début', status: true },
  { title: 'Date de fin', status: true },
];


// == Composant Advanced
const Advanced = () => (
  <>
    <div className="advanced-filter">
      <div className="advanced-filter-tags">
        <h4 className="advanced-filter-name">Tags</h4>
        {tagsValues.map((tagValue) => <Inputs name="tag" status={tagValue.status} key={tagValue.title}>{tagValue.title}</Inputs>)}
      </div>

      <div className="advanced-filter-price">
        <h4 className="advanced-filter-name">Prix</h4>
        {priceValues.map((priceValue) => <Inputs name="price" status={priceValue.status} key={priceValue.title}>{priceValue.title}</Inputs>)}
      </div>

      <div className="advanced-filter-online">
        <h4 className="advanced-filter-name">Diffusion en ligne</h4>
        {liveValues.map((liveValue) => <Inputs name="is_online" status={liveValue.status} key={liveValue.title}>{liveValue.title}</Inputs>)}
      </div>


      <div className="advanced-filter-date">
        {timeValues.map((timeValue) => (
          <React.Fragment key={timeValue.title}><h4 className="advanced-filter-name">{timeValue.title}</h4>
            <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
          </React.Fragment>
        ))}
      </div>

      <div className="advanced-filter-location">
        <h4 className="advanced-filter-name">Localisation</h4>
        <input list="villes" id="advanced-filter-input" name="ville" />
      </div>
    </div>

    <input
      type="submit"
      className="form-button"
      value="Rechercher"
    />
  </>
);


// == Export
export default Advanced;
