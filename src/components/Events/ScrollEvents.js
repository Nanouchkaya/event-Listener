import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';

import iconArrowLeft from 'src/assets/images/icons/icons8-undefined-50-9.png';
import iconArrowRight from 'src/assets/images/icons/icons8-undefined-50-7.png';
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';
import eventImage from 'src/assets/images/test_evt.png';
import dataEvent from './data';

// One item component
// selected prop will be passed
const MenuItem = ({
  location, date, content, title, id,
}) => {
  const bannerStyle = {
    backgroundImage: `url(${eventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const route = `/evenements/${id}`;
  return (
    <div className="menu-item">
      <div className="menu-item-top" style={bannerStyle}>
        Image événement
      </div>
      <div className="menu-item-middle">
        <h3 className="menu-item-middle-title">{title}</h3>
        <p className="menu-item-middle-content">
          {content}
        </p>
        <NavLink to={route}>
          <img src={iconPlus} alt="plus" className="icon" />
        </NavLink>
      </div>
      <div className="menu-item-bot">
        <p className="menu-item-bot-location">{location}</p>
        <p className="menu-item-bot-date">{date}</p>
      </div>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (dataEvent) => dataEvent.map((evt) => {
  const {
    title, content, location, date, id,
  } = evt;
  return (
    <MenuItem
      date={date}
      location={location}
      content={content}
      title={title}
      key={id}
      id={id}
    />
  );
});

/**
 * Fleche directionnel
 */
const Arrow = ({ name, src, className }) => (
  <img
    alt={name}
    src={src}
    className={className}
  />
);

const ArrowLeft = Arrow({ name: '<', src: iconArrowLeft, className: 'arrow-prev icon' });
const ArrowRight = Arrow({ name: '>', src: iconArrowRight, className: 'arrow-next icon' });

/**
 * Class du Scroll
 */
// const selectDefault = '';

class ScrollEvents extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(dataEvent, this.state.select);
  }

  state = {
    select: '',
  };

  onSelect = (key) => {
    this.setState({
      select: key,
    });
  };

  render() {
    const { select } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div className="scrollMenu">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideSingleArrow
          select={select}
          onSelect={this.onSelect}
          translate="0"
          wheel={false}
          transition="0.5"
        />
      </div>
    );
  }
}

MenuItem.propTypes = {
  location: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
};

// == Export
export default ScrollEvents;
