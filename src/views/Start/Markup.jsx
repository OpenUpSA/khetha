import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import CircularProgress from '@material-ui/core/CircularProgress';


const CustomCard = (props) => {
  const {
    title,
    points,
    description,
  } = props;

  return (
    <Card style={{ margin: '2rem' }}>
      <CardContent>
        <span>{`${points} Kheta Points`}</span>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <p>
          {description}
        </p>
        <div style={{ background: 'red', height: '10px', width: '100%' }} />
      </CardContent>
    </Card>
  );
};


const createTasks = () => tasks.map(passedProps => <CustomCard {...passedProps} />);
const createLoading = () => <CircularProgress />


export default ({ tasks, loading }) => (
  <Layout>
    {loading ? createLoading : createTasks}
  </Layout>
);
