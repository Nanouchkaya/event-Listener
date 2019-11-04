// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Event from 'src/components/Events/Event';
import EventsMap from 'src/components/Events/Map';

class SearchedEvents extends React.Component  {
  componentDidMount() {
    const { fetchEvents, handleQuickSearch } = this.props;
    const param = this.props.location.pathname.split('/');
    // fetch all events by city
    fetchEvents(param[2]);
    // fetch all events by pathname
    handleQuickSearch(param[2]);
  }
  render() {
    const { quickSearchData } = this.props;
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
                if (quickSearchData.length > 0 ) {
                  return (
                    <>
                    {quickSearchData.map((event) => <Event key={event.id} {...event} />)}
                      {/* <EventsMap /> */}
                    </>
                  )
                } else {
                  return <p>Aucun événement ne correspond à votre recherche</p>
                }
              })()
            }
                      
                      
                
          </div>
          </div>
        </section>
      </>
    );  
  }
}

export default SearchedEvents;
