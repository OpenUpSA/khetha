import { zip } from 'lodash';


const createItem = createContent => (props) => {
  const {
    title,
    description,
    answer,
    format,
    options,
    id,
  } = props;

  return {
    title,
    id,
    summary: answer,
    progress: !!answer,
    content: createContent({ format, description, options }),
    highlighted: !!answer,
  };
};

const filters = [
  () => true,
  answer => !answer,
  answer => !!answer,
];

const applyFilter = (filter, answers) => (value, index) => filters[filter](answers[index]);
const addIndex = (values, index) => [...values, index];


const buildCreateItems = props => (createContent) => {
  const { questions, answers, filter } = props;

  const result = zip(questions, answers)
    .map(addIndex)
    .filter(applyFilter(filter, answers))
    .map(([question, answer, index]) => ({ ...question, answer, id: index }))
    .map(createItem(createContent));

  return result;
};


export default buildCreateItems;
