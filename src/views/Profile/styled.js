import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';


const Section = styled.div`
  padding-bottom: 40px;
`;


const OptionalCell = styled(TableCell)`
  && {
    display: none;

    @media screen and (min-width: 750px) {
      display: table-cell;
    }
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;


const NameText = styled.div`
  padding-left: 10px;
`;


export {
  Section,
  OptionalCell,
  NameWrapper,
  NameText,
};


export default {
  Section,
  OptionalCell,
  NameWrapper,
  NameText,
};
