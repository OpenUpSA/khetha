import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import posed from 'react-pose';
import Card from '@material-ui/core/Card';

import removeProps from '../../helpers/removeProps';
import Icon from '../../components/Icon';


const Animate = posed.div();


const SubmitWrap = styled.div`
  padding-top: 20px;
`;


const Section = styled.div`
  padding-bottom: 40px;
`;


const BodyText = styled(Typography)`
  && {
    color: #666;
    padding-bottom: 20px;
  }
`;


const ModalButtonWrap = styled.div`
  padding: 5px 20px;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: auto;
    padding: 0 5px;
  }
`;


const ActionsWrapper = styled(DialogActions)`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

const FilterWrapper = styled.div`
  margin-bottom: 16px;
`;


const SubmitWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;


const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
`;


const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
  min-height: 37px;
`;


const CardWrap = styled(Animate)`
  padding: 5px 0;
`;


const TasksWrap = styled.div`
  // padding-top: 15px;
`;


const Title = styled(Typography)`
  && {
    color: #666;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
  }
`;


const IconWrap = styled.div`
  fill: #0575E6;
`;


const StyledIcon = styled(Icon)`
  && {
    fill: #0575E6;
    margin-left: 20px;
  }
`;

const Points = styled(Typography)`
  && {
    font-size: 12px;
    color: #0575E6;
    font-weight: bold;
  }
`;

const Description = styled(Typography)`
  && {
    color: #757575;
    line-height: 20px;
    font-size: 14px;
  }
`;


const SanitisedCard = removeProps({ blacklist: 'transparent', component: Card });


const CustomCard = styled(SanitisedCard)`
  && {
    ${({ transparent }) => transparent && 'border: 1px solid #A6A6A6;'}
    ${({ transparent }) => transparent && 'background: none;'}
    ${({ transparent }) => transparent && 'box-shadow: none;'}
  }
`;


const Header = styled.div`
  flex-grow: 1;
`;


export {
  CardWrap,
  TasksWrap,
  IconWrap,
  Points,
  Description,
  Header,
  CustomCard,
  SubmitWrap,
  Section,
  BodyText,
  ModalButtonWrap,
  ActionsWrapper,
  SubmitWrapper,
  FilterWrapper,
  Logo,
  HeaderWrapper,
  Title,
  StyledIcon,
};

export default {
  CardWrap,
  TasksWrap,
  IconWrap,
  Points,
  Description,
  Header,
  CustomCard,
  SubmitWrap,
  Section,
  BodyText,
  ModalButtonWrap,
  ActionsWrapper,
  SubmitWrapper,
  FilterWrapper,
  Logo,
  HeaderWrapper,
  Title,
  StyledIcon,
};
