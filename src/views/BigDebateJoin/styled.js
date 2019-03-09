import styled from 'styled-components';
import posed from 'react-pose';
import { Typography } from '@material-ui/core';


import Icon from '../../components/Icon';
import { secondary } from '../../tokens/colors';


const Animate = posed.div({
  0: { y: 0 },
  1: { y: 0 },
  2: { y: 0 },
});


const Wrapper = styled(Animate)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
`;


const BlurbWrapper = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: ${({ order }) => (order === 0 ? '40px' : '0')}
`;


const Title = styled(Typography)`
  && {
    color: #00C77B;
    font-size: 15px;
    font-weight: bold;
  }
`;


const Description = styled(Typography)`
  && {
    line-height: 22px;
    font-size: 15px;
    color: #8C8C8C;
  }
`;


const IconWrap = styled.div`
  flex-basis: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
`;


const Image = styled.img`
  max-height: 250px;
  margin-bottom: 40px;
  border-radius: 4px;

  @media screen and (min-height: 700px) {
    display: block;
    max-height: 343px;
  }
`;

const HeroWrapper = styled.div`
  height: 270px;
  align-items: flex-start;
  overflow: hidden;
  background: #00C77B;
  flex-grow: 1;
  width: 100%;
  padding: 20px 20px 0;
  justify-content: center;
  display: none;

  @media screen and (min-height: 550px) {
    display: flex;
  }

  @media screen and (min-height: 700px) {
    padding: 100px 20px 0;
    height: 440px;
  }
`;


const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 40px 20px 15px;
`;


const Heading = styled(Typography)`
  && {
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
  }
`;

const InfoDescription = styled(Typography)`
  && {
    font-size: 16px;
    color: #8C8C8C;
    margin-bottom: 35px;
  }
`;


const ButtonWrapper = styled.div`
  padding: 25px;
`;


const ModalImage = styled.img`
  background: grey;
  max-width: 400px;
  height: 172px;
  width: 100%;
`;


const ImageWrapper = styled.div`
  height: 200px;
  align-items: center;
  justify-content: center;
  background: #9B9B9B;
  width: 100%;
  display: flex;
  margin-top: 20px;
`;


const PrizesWrapper = styled.div`
  margin-bottom: 35px;
`;


const GreenIcon = styled(Icon)`
  && {
    fill: ${secondary} !important;
  }
`;

export {
  Wrapper,
  BlurbWrapper,
  Title,
  Description,
  IconWrap,
  Image,
  HeroWrapper,
  InfoWrapper,
  Heading,
  InfoDescription,
  ButtonWrapper,
  ModalImage,
  ImageWrapper,
  PrizesWrapper,
  GreenIcon,
  Logo,
};


export default {
  Wrapper,
  BlurbWrapper,
  Title,
  Description,
  IconWrap,
  Image,
  HeroWrapper,
  InfoWrapper,
  Heading,
  InfoDescription,
  ButtonWrapper,
  ModalImage,
  ImageWrapper,
  PrizesWrapper,
  GreenIcon,
  Logo,
};
