// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Event from 'src/components/Events/Event';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';


const override = css`
  display: block;
  margin: 10rem 30rem ;
  border-color: #6942e4;
`;



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
      //fetchEvents(param[2]);

      // fetch all events by pathname
      handleQuickSearch(param[2]);
    }
      
    
    // handles the searchForm on homepage
    if (param.length === 4) {
      const filter = [
        { address: `'%${param[2].trim()}%'` },
        { title: `'%${param[3].trim()}%'` },
      ];
      // add filters to an array
      addFilters(filter);
      // triggers the request by sending the filter array
      handleSubmit();
    }

    // handles the request from footer links
    if (param.length > 4 ) {
      fetchEvents(param[4])
    }
  }

  render() {
    const { quickSearchData, homeFormData, locationSearchData } = this.props;
    return (
      <>
        <section className="events">
          <h2 className="events-title">
            Résultat de recherche
          </h2>
          <div className="events-view-list events-view-list--single">
            <div className="events-container">
              {
                (() => {
                  if (homeFormData.length === 0 && locationSearchData.length === 0 && quickSearchData.length === 0) {
                    return (
                      <>
                      <div className="sweet-loading">
                  <ClipLoader
                    css={override}
                    sizeUnit="px"
                    size={150}
                    color="#123abc"
                    loading={true}
                  />
                </div>
                      </>
                    )
                  }
                  if (homeFormData.length === 0 && locationSearchData.length === 0) {
                    return (
                      <>
                        {
                          quickSearchData.length > 0 ? quickSearchData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p> Aucun événement ne correspond à votre recherche</p>
                        }
                      </>
                    )
                  }
                  if (homeFormData.length === 0 && quickSearchData.length === 0) {
                    return (
                      <>
                        {
                          locationSearchData.length > 0 ? locationSearchData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p>Aucun événement ne correspond à votre recherche</p>
                        }
                      </>
                    )
                  }
                  if (locationSearchData.length > 0 && quickSearchData.length === 0) {
                    return (
                      <>
                        {
                          locationSearchData.length > 0 ? locationSearchData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p> Aucun événement ne correspond à votre recherche</p>
                        }
                      </>
                    )
                  }
                  if (homeFormData.length === 0) {
                    return (
                      <>
                        {
                          locationSearchData.length > 0 ? locationSearchData.map((event) => <Event key={event.id} {...event} jsxFor="list" />) : <p> Aucun événement ne correspond à votre recherche</p>
                        }
                      </>
                    )
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
