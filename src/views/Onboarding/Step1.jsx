import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Modal from './Modal';


const Step1 = (props) => {
  const { 
    translation,
    progressOnboarding,
    alert,
  } = props;

  const {
    title,
    description,
    primary,
    list,
  } = translation.prizes;

  return (
    <Fragment>
      <h2>{title}</h2>
      <Modal
        open={alert}
        title={translation.alert.title}
        description={translation.alert.description}
        primary={translation.alert.primary}
        progressOnboarding={progressOnboarding}
      />
      <p>{description}</p>
      <ul>
        <li>
          <h3>{list[0].title}</h3>
          <p>{list[0].description}</p>
        </li>
        <li>
          <h3>{list[1].title}</h3>
          <p>{list[1].description}</p>
        </li>
      </ul>

      <Button onClick={progressOnboarding}>{primary}</Button>
    </Fragment>
  );
};


export default Step1;
