import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sources from './sources';


const sizes = {
  small: '17px',
  default: '24px',
  large: '30px',
  huge: '40px',
  massive: '60px',
};


const convertToPixels = size => sizes[size];


const addSize = ({ content, fill }) => styled(content)`
  && {
    display: block;
    width: ${({ size = 'default' }) => convertToPixels(size)};
    height: ${({ size = 'default' }) => convertToPixels(size)};
    fill: ${fill};
  }
`;


const calcFill = (color) => {
  switch (color) {
    case 'green': return '#01C98B';
    case 'blue': return '#0B5FFF';
    case 'red': return 'red';
    case 'grey': return 'grey';
    case 'light-grey': return '#AFAFAF';
    case 'white': return 'white';
    default: return 'black';
  }
};


const Icon = ({ type, color, ...props }) => {
  const Svg = addSize({ content: sources[type], fill: calcFill(color) });
  return <Svg {...props} />;
};


const list = [
  'OfflineBolt',
  'Public',
  'School',
  'Poll',
  'Person',
  'People',
  'Face',
  'Notifications',
  'FreeBreakfast',
  'FitnessCenter',
  'ChildFriendly',
  'Casino',
  'BusinessCenter',
  'AirportShuttle',
  'Wifi',
  'Wc',
  'TimeToLeave',
  'Power',
  'Cancel',
  'Train',
  'Traffic',
  'StoreMallDirectory',
  'Restaurant',
  'Place',
  'LocalShipping',
  'LocalPostOffice',
  'LocalPlay',
  'LocalPhone',
  'LocalTaxi',
  'LocalHospital',
  'ShoppingCart',
  'LocalGasStation',
  'Flight',
  'WbSunny',
  'Timelapse',
  'Image',
  'FlashOn',
  'ColorLens',
  'Audiotrack',
  'Security',
  'PhoneIphone',
  'KeyboardVoice',
  'Weekend',
  'Report',
  'Mail',
  'HowToVote',
  'VpnKey',
  'VolumeUp',
  'Work',
  'Grade',
  'Info',
  'Phone',
  'Mystery',
  'Check',
  'Close',
  'CheckBoxOutlineBlank',
  'CheckBox',
  'Warning',
];


export { list };
export default Icon;


Icon.propTypes = {
  /** Specify the type of icon (see 'Types' demo below for examples of types) */
  type: PropTypes.oneOf(list).isRequired,
  /** Specify the size that the icon should be rendered at. */
  size: PropTypes.oneOf([
    'small',
    'standard',
    'large',
    'huge',
    'massive',
  ]),
  color: PropTypes.oneOf([
    'green',
    'blue',
    'red',
    'grey',
    'light-grey',
    'white',
    'black',
  ]),
};


Icon.defaultProps = {
  size: 'standard',
  color: 'black',
};
