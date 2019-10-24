// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';

// == Composant
class Advanced extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { search : '' };

    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buttonClick = () => {
    event.preventDefault();
    console.log('bouton cliqué');
    this.setState({
      clicked : !this.state.clicked
    });
    console.log(this);
    // effectuer ici une recherche par mot-clef
  }

  handleChange(event) {
    this.setState({search: event.target.search});
  }

  handleSubmit(event) {
    console.log('test : ' + this.state.search);
  }

  render() {
    let Form = this.props.Form;
    return (
      <div className="advanced-filter">
        <h3>Filtres avancés</h3>
        <div className="advanced-filter-tags">
          <h4 className="advanced-filter-name">
            Tags
          </h4>
          METTRE EN PLACE LISTE DE CHOIX MULTIPLE
        </div>

        <div className="advanced-filter-price">
          <h4 className="advanced-filter-name">
            Prix
          </h4>
          <input type="radio" id="gratuit" className="advanced-filter-input" name="prix" value="gratuit" />
          <label htmlFor="gratuit">Gratuit</label>
          <input type="radio" id="payant" className="advanced-filter-input" name="prix" value="payant" />
          <label htmlFor="payant">Payant</label>
        </div>

        <div className="advanced-filter-online">
          <h4 className="advanced-filter-name">
            Diffusion en ligne
          </h4>
          <input type="radio" id="oui" className="advanced-filter-input" name="diffusion" value="oui" />
          <label htmlFor="oui">Oui</label>
          <input type="radio" id="non" className="advanced-filter-input" name="diffusion" value="non" />
          <label htmlFor="non">Non</label>
        </div>


        <div className="advanced-filter-date">
          <h4 className="advanced-filter-name">
            Date de début
          </h4>
          <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
        </div>

        <div className="advanced-filter-location">
          <h4 className="advanced-filter-name">
            Lieu
          </h4>
          <input list="villes" id="advanced-filter-input" name="ville" />
        </div>
      </div>
    );
  }
}

// == Export
export default Advanced;
