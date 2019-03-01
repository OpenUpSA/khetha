import React from 'react';
import t from 'prop-types';
import GradientButton from '../../components/GradientButton';


const getGpsString = () => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => resolve(`${coords.latitude}, ${coords.longitude}`),
  );
});


const createNextEvent = ({ index, next }) => getGpsString.then(val => next(index, val));


const Gps = ({ index, next }) => {
  const clickAction = createNextEvent({ index, next });

  return (
    <GradientButton
      {...{ clickAction }}
      filled
      text="Calculate Location via GPS"
    />
  );
};


export default Gps;


Gps.propTypes = {
  index: t.number.isRequired,
  next: t.func.isRequired,
};
