import styled from 'styled-components';
import posed from 'react-pose';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';


import removeProps from '../../helpers/removeProps';
import Icon from '../../components/Icon';


const Animate = posed.div();


const CardWrap = styled(Animate)`
  padding: 5px 0;
`;


const Section = styled.div`
  padding-bottom: 40px;
`;

const TasksWrap = styled.div`
  // padding-top: 15px;
`;


const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
  min-height: 37px;
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
  Section,
  TasksWrap,
  HeaderWrapper,
  Title,
  IconWrap,
  StyledIcon,
  Points,
  Description,
  CustomCard,
  Header,
};


export default {
  CardWrap,
  Section,
  TasksWrap,
  HeaderWrapper,
  Title,
  IconWrap,
  StyledIcon,
  Points,
  Description,
  CustomCard,
  Header,
};
