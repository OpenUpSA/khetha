import React, { Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import SectionHeading from '../../components/SectionHeading';
import ProgressList from '../../components/ProgressList';
import CreateInput from './CreateInput';


const Section = styled.div`
  padding-bottom: 40px;
`;


const BodyText = styled(Typography)`
  && {
    color: #666;
    padding-bottom: 20px;
  }
`;


const createItems = (questions, answers) => {
  const result = questions.map((questionProp, index) => {
    const summary = answers.length >= index ? answers[index] : null;

    return {
      summary,
      title: questionProp.title,
      progress: !!summary,
      highlighted: !!summary,
      content: item => (
        <Fragment>
          <BodyText>{questionProp.description}</BodyText>
          <CreateInput
            {...{ index }}
            type={questionProp.format}
            value={summary}
            options={questionProp.options}
            next={item.next}
            focus={item.focusElement}
          />
        </Fragment>
      ),
    };
  });

  return result;
};


const Markup = (props) => {
  const {
    questions,
    answers,
    changeAnswer,
    onComplete,
  } = props;

  const items = createItems(questions, answers);
  return (
    <Section>
      <SectionHeading gutter text="Start this Task" />
      <ProgressList
        {...{ items, onComplete }}
        guided
        updateCallback={changeAnswer}
      />
    </Section>
  );
};


export default Markup;


Markup.propTypes = {
  answers: t.arrayOf(t.string),
  changeAnswer: t.func.isRequired,
  onComplete: t.func.isRequired,
  questions: t.arrayOf(
    t.shape({
      title: t.string,
      description: t.string,
      format: t.oneOf([
        'string',
        'text',
        'boolean',
        'select',
        'checkboxes',
        'gps',
      ]),
    }),
  ).isRequired,
};


Markup.defaultProps = {
  answers: [],
};
