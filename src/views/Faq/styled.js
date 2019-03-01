import styled from 'styled-components';


const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    align-items: center;
  }
`;

const FlexQuestion = styled.div`
  flex-grow: 1;
  font-family: Roboto;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  color: #01C98B;
  padding-bottom: 16px;

  @media screen and (min-width: 450px) {
    padding-bottom: none;
  }
`;


export {
  FlexWrapper,
  FlexQuestion,
};


export default {
  FlexWrapper,
  FlexQuestion,
};
