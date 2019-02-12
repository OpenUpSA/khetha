import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import t from 'prop-types';
import Layout from '../../components/Layout';
import ToggleContent from './ToggleContent';
import Hero from './Hero';
import Info from './Info';


const Animate = posed.div({
  start: { y: 0 },
  end: { y: -360 },
});


const Wrapper = styled(Animate)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Markup = (props) => {
  const {
    step,
    language,
    changeLanguage,
    nextStep,
    complete,
    translation,
  } = props;

  const toggleProps = {
    step,
    language,
    changeLanguage,
    nextStep,
    complete,
    text: translation,
  };


  return (
    <Layout header={false} footer={false}>
      <Wrapper pose={step >= 1 ? 'end' : 'start'}>
        <Hero />
        <Info
          title={step > 0 ? translation.prizes.title : translation.intro.title}
          description={step > 0 ? translation.prizes.description : translation.intro.description}
        >
          <ToggleContent {...toggleProps} />
        </Info>
      </Wrapper>
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  step: t.number.isRequired,
  changeLanguage: t.func.isRequired,
  nextStep: t.func.isRequired,
  complete: t.oneOfType([t.func, t.string]).isRequired,
  language: t.string,
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


Markup.defaultProps = {
  language: null,
};
