import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';
import SubHeading from '../../components/SectionHeading';
import GradientButton from '../../components/GradientButton'


import { FlexWrapper, FlexQuestion } from './styled';

const CardWrapper = styled(Card)`
  margin-top: 20px;
  padding: 10px;

  @media screen and (min-width: 450px) {
    padding: 20px;
  }
`;

const Title = styled(Typography)`
  padding-bottom: 36px;
  && {
    color: #565656;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 500;
    line-height: normal;
  }
`;

const Paragraph = styled(Typography)`
  padding-bottom: 24px;

  && {
    font-family: Roboto;
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.541327);
  }
`;

const ButtonsGroup = styled.div`
  width: 100%;

  @media screen and (min-width: 450px) {
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: 450px) {
    margin-bottom: none;
  }
`;

const ConfusingContainer = styled.div`
  margin-top: 50px;
`;

const ConfuseButtonContainer = styled.div`
  margin-top: 15px;;
`;

const actionsMarkup = (
  <FlexWrapper>
    <FlexQuestion>
      Was this helpful?
    </FlexQuestion>
    <ButtonsGroup>
      <ButtonContainer>
        <GradientButton text="Yes" fullWidth />
      </ButtonContainer>
      <ButtonContainer>
        <GradientButton text="No" fullWidth />
      </ButtonContainer>
    </ButtonsGroup>
  </FlexWrapper>
);


const FaqCard = ({ title, body }) => (
  <CardWrapper>
    <CardContent>
      <Title gutterBottom variant="h5" component="h2">
        {title}
      </Title>
      <Paragraph component="p">
        {body}
      </Paragraph>
    </CardContent>
    <CardActions>
      {actionsMarkup}
    </CardActions>
  </CardWrapper>
);

const callConfusingSection = () => (
  <ConfusingContainer>
    <SubHeading text="Still confused?" />
    <ConfuseButtonContainer>
      <GradientButton text="USE OUR ONLINE CHAT" fullWidth />
    </ConfuseButtonContainer>
  </ConfusingContainer>
);


const Faq = ({ faqs = [], points }) => (
  <Layout {...{ points }}>
    <SubHeading text="Frequently Asked Questions" />
    {faqs.map(({ title, body }) => <FaqCard {...{ title, body }} key={title} />)}
    {callConfusingSection()}
  </Layout>
);


export default Faq;


Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};


Faq.defaultProps = {
  faqs: [],
};


FaqCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
