// == Import : npm
import React from 'react';


// == Import : local
import Inputs from './Inputs';


// == Data
const tagsValues = [
  'Tech',
  'Data',
  'Code',
  'Js',
  'React',
];

const priceValues = [
  'Gratuit',
  'Payant',
];

const liveValues = [
  'Oui',
  'Non',
];

const timeValues = [
  'Date de début',
  'Date de fin',
];


// == Composant Advanced
const Advanced = () => (
  <>
    <div className="advanced-filter">
      <div className="advanced-filter-tags">
        <h4 className="advanced-filter-name">Tags</h4>
        {tagsValues.map((tagValue) => <Inputs key={tagValue}>{tagValue}</Inputs>)}
      </div>

      <div className="advanced-filter-price">
        <h4 className="advanced-filter-name">Prix</h4>
        {priceValues.map((priceValue) => <Inputs key={priceValue}>{priceValue}</Inputs>)}

      </div>

      <div className="advanced-filter-online">
        <h4 className="advanced-filter-name">Diffusion en ligne</h4>
        {liveValues.map((liveValue) => <Inputs key={liveValue}>{liveValue}</Inputs>)}
      </div>


      <div className="advanced-filter-date">
        {timeValues.map((timeValue) => (
          <React.Fragment key={timeValue}><h4 className="advanced-filter-name">{timeValue}</h4>
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
