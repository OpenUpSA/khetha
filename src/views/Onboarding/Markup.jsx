import React from 'react';
import t from 'prop-types';


import GradientButton from '../../components/GradientButton';
import Layout from '../../components/Layout';
import Hero from './Hero';
import Info from './Info';
import Prizes from './Prizes';
import pushImage from './prompt-example.png';
import { Wrapper, Image } from './styled';


const Markup = (props) => {
  const {
    step,
    nextStep,
    translation,
  } = props;


  return (
    <Layout isolated fullscreen>
      <Wrapper pose={step}>
        <Hero />
        <Info
          title={translation[step].title}
          description={translation[step].description}
        >
          {step === 1 && <Prizes text={translation[1].list} />}
          {step === 2 && <Image alt="" src={pushImage} />}
          <GradientButton
            primary
            text={translation[step].primary}
            onButtonPress={nextStep}
            resolve={step > 1 ? 'infinite' : 'short'}
          />
        </Info>
      </Wrapper>
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  step: t.number.isRequired,
  nextStep: t.func.isRequired,
  translation: t.shape({
    intro: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
    }),
    prizes: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
      list: t.arrayOf(t.shape({
        title: t.string,
        description: t.string,
      })),
    }),
    alert: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
    }),
  }).isRequired,
};
