// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Event from 'src/components/Events/Event';


class SearchedEvents extends React.Component {
  componentDidMount() {
    // props
    const {
      fetchEvents,
      handleQuickSearch,
      handleSubmit,
      addFilters,
    } = this.props;

    // allows to get only the desired param
    const param = this.props.location.pathname.split('/');
    // handles the quickSearchBar search
    if (param.length <= 3) {
      // fetch all events by city
      fetchEvents(param[2]);
      // fetch all events by pathname
      handleQuickSearch(param[2]);
    }
    // handles the searchForm on homepage
    if (param.length > 3) {
      const filter = [
        { address: `'%${param[2].trim()}%'` },
        { title: `'%${param[3].trim()}%'` },
      ];
      // add filters to an array
      addFilters(filter);
      // triggers the request by sending the filter array
      handleSubmit();
    }
  }

  render() {
    const { quickSearchData, homeFormData } = this.props;
    return (
      <>
        <section className="events">
          <h2 className="events-title">
            Résultat de recherche
          </h2>
          <div className="events-view-list">
            <div className="events-container">
              {
                (() => {
                  if (homeFormData.length === 0) {
                    return (
                      <>
                        {
                          quickSearchData.length > 0 ? quickSearchData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p>Aucun événement ne correspond à votre recherche</p>
                        }
                      </>
                    );
                  }
                  return (
                    <>
                      {
                        homeFormData.length > 0 ? homeFormData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p>Aucun événement ne correspond à votre recherche</p>
                      }
                    </>
                  );
                })()
              }
            </div>
          </div>
        </section>
      </>
    );
  }
}

// == PropTypes
SearchedEvents.propTypes = {
  quickSearchData: PropTypes.array.isRequired,
  homeFormData: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  handleQuickSearch: PropTypes.func.isRequired,
  addFilters: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


// == Export
export default SearchedEvents;
