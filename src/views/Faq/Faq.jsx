
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';


const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const FlexQuestion = styled.div`
  flex-grow: 1;
`;


const ActionsBar = () => (
  <FlexWrapper>
    <FlexQuestion>
      Was this helpful?
    </FlexQuestion>
    <div>
      <Button size="small" color="primary">
        Yes
      </Button>
      <Button size="small" color="primary">
        No
      </Button>
    </div>
  </FlexWrapper>
);


const FaqCard = ({ title, body }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">
        {body}
      </Typography>
    </CardContent>
    <CardActions>
      <ActionsBar />
    </CardActions>
  </Card>
);


FaqCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const Faq = ({ faqs }) => (
  <Layout>
    {faqs.map(({ title, body }) => <FaqCard {...{ title, body }} key={title} />)}
  </Layout>
);


Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
};


export default Faq;
