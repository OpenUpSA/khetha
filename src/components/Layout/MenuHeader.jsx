import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const HeadingTitle = styled.div`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 38.13%;
        right: 6.75%;
        top: 4.57%;
        font-weight: bold;
        line-height: 32px;
        font-size: 26px;
        text-align: right;
        color: #5F5F5F;
        opacity: 0.8;     
`;

const MenuHeader = ({text}) => (
      <HeadingTitle>
            {text}
     </HeadingTitle>
);

export default MenuHeader;

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
