import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const QuestionWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow: scroll;
  height: 90vh;
  position: relative;
  top: 60px;
  padding: 0px 15px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    padding: 0px;
  }
`;

const QuestionList = styled.ol`
  padding: 0 0 0 25px;
  margin: 10px 0;
`;

const ListItem = styled.li`
  font-weight: bold;
  margin-bottom: 20px;
`;

const Answer = styled.input`
  margin-left: -15px;
  width: 100%;
  background-color: #fafafa;
  border: none;
  height: 44px;
`;

const QuestionNotice = styled.div`
  background-color: #e2e3e5;
  margin: 0px 10px 10px 10px;
  padding: 20px;
  border-radius: 4px;
`;

const QuestionActions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const GreenButton = styled(Button)`
  && {
    background: #73c619;
    color: white;
  }
`;

class StoryTemplate extends Component {

  sendEmail(e) {
    e.preventDefault();

    const email = 'test@test.com';
    const emailBody = 'This is a test message';
    const subject = 'This is a test subject';
    const mailto = `mailto:${email}?subject=${subject}&body=${emailBody}`;

    window.open(mailto, '_blank');
  }

  sendWhatsapp(e) {
    e.preventDefault();

    const message = 'This is a test message';
    const whatsapp = 'https://api.whatsapp.com/send';
    const sendTo = `${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(sendTo, '_blank');
  }

  deleteStory(e) {
      e.preventDefault();
      alert('Clicked delete!')
  };

  render() {
    const questions = this.props.questions;

    return (
      <Fragment>
        <QuestionWrapper>
          <QuestionList>
            {questions.map((questionItem, index) => (
              <ListItem key={index}>
                {questionItem.question}
                <Answer placeholder={questionItem.description}/>
              </ListItem>
            ))}
          </QuestionList>
          <QuestionNotice>
            <p style={{margin: 0}}>If email submission does not work please change to the latest version of Chrome</p>
          </QuestionNotice>
          <QuestionActions>
            <Button onClick={this.sendEmail}>
              Email Story
            </Button>
            <GreenButton variant="contained" onClick={this.sendWhatsapp}>
              Send Story and media via whatsapp
            </GreenButton>
            <Button color="secondary" onClick={this.deleteStory}>
              Delete story
            </Button>
          </QuestionActions>
        </QuestionWrapper>

      </Fragment>
    )
  }
};

export default StoryTemplate;