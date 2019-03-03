import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import t from 'prop-types';


import LevelBadge from '../../components/LevelBadge';
import SectionHeading from '../../components/SectionHeading';
import {
  Section,
  OptionalCell,
  NameWrapper,
  NameText,
} from './styled';


const Winners = ({ winners, rewards, text = {} }) => {
  const createRow = (rowProps) => {
    const {
      id,
      name,
      points,
      prize,
    } = rowProps;

    return (
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          <NameWrapper>
            <LevelBadge {...{ points }} size="small" />
            <NameText>{name}</NameText>
          </NameWrapper>
        </TableCell>
        <OptionalCell component="th" scope="row">
          {points}
        </OptionalCell>
        <OptionalCell component="th" scope="row">
          {rewards.find(({ id: objectId }) => objectId === prize).title}
        </OptionalCell>
      </TableRow>
    );
  };

  return (
    <Section>
      <SectionHeading text={text.title} gutter />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{text.name}</TableCell>
              <OptionalCell>{text.points}</OptionalCell>
              <OptionalCell>{text.prize}</OptionalCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {winners.map(createRow)}
          </TableBody>
        </Table>
      </Paper>
    </Section>
  );
};


export default Winners;


Winners.propTypes = {
  winners: t.arrayOf(t.shape({
    id: t.string,
    name: t.string,
    points: t.number,
    prize: t.string,
  })).isRequired,
  rewards: t.arrayOf(
    t.shape({
      id: t.string,
      points: t.number,
      title: t.string,
      description: t.string,
      dates: t.arrayOf(t.string),
    }),
  ).isRequired,
  text: t.shape({
    points: t.string,
    filter: t.shape({
      title: t.string,
      active: t.bool,
      difficulty: t.arrayOf(t.string),
    }),
    more: t.shape({
      title: t.string,
      description: t.string,
    }),
  }).isRequired,
};
