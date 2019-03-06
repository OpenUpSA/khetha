import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';


import { FlexWrapper, FlexQuestion } from './styled';


const actionsMarkup = (
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
      {actionsMarkup}
    </CardActions>
  </Card>
);


const Faq = ({ faqs = [], points, onMenuButtonPress }) => (
  <Layout {...{ points, onMenuButtonPress }}>
    {faqs.map(({ title, body }) => <FaqCard {...{ title, body }} key={title} />)}
  </Layout>
);


export default Faq;


Faq.propTypes = {
  /** Array of questions and answers, including the title and body associated with each card */
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
  /** The point value associated with each card */
  points: PropTypes.number,
  /** Function that is passed on button click. Feedback (helpful or not) will be sent */
  onMenuButtonPress: PropTypes.func,
};


Faq.defaultProps = {
  faqs: [],
  points: 0,
  onMenuButtonPress: null,
};


FaqCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
