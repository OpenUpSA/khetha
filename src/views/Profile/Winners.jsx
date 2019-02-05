import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import t from 'prop-types';
import { Section } from './styled';
import SectionHeading from '../../components/SectionHeading';


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
          {name}
        </TableCell>
        <TableCell component="th" scope="row">
          {points}
        </TableCell>
        <TableCell component="th" scope="row">
          {rewards.find(({ id: objectId }) => objectId === prize).title}
        </TableCell>
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
              <TableCell>{text.points}</TableCell>
              <TableCell>{text.prize}</TableCell>
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
