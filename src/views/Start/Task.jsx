import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography } from '@material-ui/core';
import t from 'prop-types';
import removeProps from '../../helpers/removeProps';
import Icon from '../../components/Icon';


const Wrapper = styled.div`
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


const buildPoints = points => (
  <Points component="span">
    {`${points} Khetha Points`}
  </Points>
);


const buildTitle = title => (
  <Title component="h2">
    {title}
  </Title>
);


const buildIcon = icon => (
  <IconWrap>
    <StyledIcon size="huge" type={icon} color="blue" />
  </IconWrap>
);


const SanitisedCard = removeProps({ blacklist: 'transparent', component: Card });

const CustomCard = styled(SanitisedCard)`
  && {
    ${({ transparent }) => transparent && 'border: 1px solid #A6A6A6;'}
    ${({ transparent }) => transparent && 'background: none;'}
    ${({ transparent }) => transparent && 'box-shadow: none;'}
  }
`;


const HeaderWrapper = styled.div`
  flex-grow: 1;
`;


const Heading = (props) => {
  const {
    points,
    title,
    icon = 'Grade',
  } = props;

  return (
    <Wrapper>
      <HeaderWrapper>
        {points && buildPoints(points)}
        {title && buildTitle(title)}
      </HeaderWrapper>
      {icon && buildIcon(icon)}
    </Wrapper>
  );
};


Heading.propTypes = {
  points: t.number,
  title: t.string.isRequired,
  icon: t.string,
};


Heading.defaultProps = {
  icon: null,
  points: null,
};


const ComponentWrapper = ({ source: Source, children }) => <Source>{children}</Source>;


ComponentWrapper.propTypes = {
  source: t.oneOfType([t.func, t.string]).isRequired,
  children: t.node.isRequired,
};


const Task = (props) => {
  const {
    points,
    title,
    description,
    icon,
    transparent,
    clickAction,
    id,
  } = props;

  const onClick = () => id && clickAction && clickAction(id);

  return (
    <CustomCard {...{ transparent, onClick }}>
      <ComponentWrapper source={transparent ? 'div' : CardActionArea}>
        <CardContent>
          <Heading {...{ title, icon, points }} />
          <Description component="p">
            {description}
          </Description>
        </CardContent>
      </ComponentWrapper>
    </CustomCard>
  );
};


export default Task;


Task.propTypes = {
  title: t.string.isRequired,
  description: t.string.isRequired,
  icon: t.string,
  transparent: t.bool,
  id: t.string.isRequired,
  points: t.number,
  clickAction: t.func,
};


Task.defaultProps = {
  icon: null,
  transparent: null,
  points: null,
  clickAction: null,
};
