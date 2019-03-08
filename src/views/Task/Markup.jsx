import React, { Fragment } from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';
import Content from './Content';
import GradientButton from '../../components/GradientButton';
import GradientSelect from '../../components/GradientSelect';
import SectionHeading from '../../components/SectionHeading';
import ProgressList from '../../components/ProgressList';
import Modal from './Modal';
import logoSrc from './big-debate-logo.png';
import {
  Section,
  SubmitWrapper,
  FilterWrapper,
  Logo,
} from './styled';


const Markup = (props) => {
  const {
    title,
    changeAnswer,
    changeFilter,
    filter,
    points,
    modalProps,
    createItems,
    filterOptions,
    completeTask,
    completed,
    onMenuButtonPress,
    isolated,
    logo,
  } = props;

  const items = createItems(Content);

  const buildSubmit = () => (
    <SubmitWrapper>
      <GradientButton primary text="Submit Answers" resolve="long" onButtonPress={completeTask} />
    </SubmitWrapper>
  );

  return (
    <Fragment>
      <Modal {...modalProps} />
      <Layout {...{ points, onMenuButtonPress, isolated }}>
        {!!logo && <Logo src={logoSrc} alt="" />}
        <Section>
          <SectionHeading gutter text={title} />
          <FilterWrapper>
            <GradientSelect
              options={filterOptions}
              fullWidth
              placeholder="Filter questions"
              prefix="Filtering by"
              onSelectionChange={changeFilter}
            />
          </FilterWrapper>
          <ProgressList
            {...{ items }}
            advance={filter === 0 && !completed}
            onSaveAnswer={changeAnswer}
          />
        </Section>
        {completed && buildSubmit()}
      </Layout>
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  title: t.string.isRequired,
  changeAnswer: t.func.isRequired,
  changeFilter: t.func.isRequired,
  filter: t.shape({
    title: t.string,
    active: t.string,
    difficulty: t.arrayOf(t.string),
  }).isRequired,
  points: t.number,
  modalProps: t.node.isRequired,
  createItems: t.func.isRequired,
  filterOptions: t.arrayOf(t.string).isRequired,
  completeTask: t.func.isRequired,
  completed: t.bool,
  onMenuButtonPress: t.func.isRequired,
  isolated: t.bool,
  logo: t.bool,
};


Markup.defaultProps = {
  points: 0,
  completed: false,
  isolated: false,
  logo: false,
};
