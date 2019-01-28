
import React, { Component } from 'react';
import styled from 'styled-components';
import ProgressCards from '../components/ProgressCards';
import Footer from '../components/Footer';
import SubHeading from '../components/SubHeading';
import Card from '@material-ui/core/Card';
import FilledButton from '../components/FilledButton';
import MenuHeader from '../Components/Layout/MenuHeader';
import PageWrapper from '../Components/Layout/PageWrapper';


const FaqPageWrapper = styled.div`
    font-family: Roboto;
   font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;  
    color: rgba(0, 0, 0, 0.54);
     margin: 0;
     height: 100%;
     overflow: hidden;



  span {
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
  }

  p {
    font-size: 14px;
    height: 58.79px;
    left: 4.17%;
    right: 80.23%;
    top: 23.35px;
  }

  &&& contained {
    height: 400px,
    position: absolute;
left: 3.2%;
right: 3.2%;
top: 26.84%;
bottom: 45.88%;

background: #FFFFFF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.24);
  },

`;

const CustomCard = styled(Card)`
    border: 10px solid red;
`;

class Faq extends Component {
  // const;
  render() {
    return (

      <FaqPageWrapper>
        <MenuHeader />
        <span>10 Points required to level up</span>

        <FilledButton text={"FILTER TASKS: <br /> Easy"} />

        <CustomCard variant="contained" color="primary" component="p"
          style={{
            height: '200px', width: '94%', marginLeft: '12px'
          }}>
          1. Kheta Point
          <br />
          <h3>Introductory Questions</h3>
          <p> Tell us a bit about yourself, we are interested in <br />
            your age, gender and preferences. This will help <br />
            us get a better idea of who is filling in the <br />
            questions.


          </p>
        </CustomCard>

        <Footer />
      </FaqPageWrapper>

    );
  }
}

export default Faq;

