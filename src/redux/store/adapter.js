import { tasks } from '../../data/old-tasks-object';

const checkIfPropExists = prop => localStorage.getItem(prop) !== null;
const getProp = prop => JSON.parse(localStorage.getItem(prop));
const createProp = data => localStorage.setItem('30_03_2019', JSON.stringify(data));

const convertOldInfoToNewInfo = ({ info, storage: { synced } }) => Object.assign(info, { synced });

const convertOldAnswersToStartedTasks = ({ answers }) => {
  const keys = Object.keys(answers);

  return keys.map((key) => {
    const { completed, started, data } = answers[key];
    const [{ eng: { questions } }] = tasks.filter(({ id }) => id === key);

    // eslint-disable-next-line object-curly-newline
    const newAnswers = data.map(({ answered, edits, lastEdit, value }, index) => ({
      question: questions[index].title,
      answer: value,
      firstAnswered: answered,
      edits,
      lastEdit,
    }));

    return {
      id: key,
      lastEdit: completed,
      started,
      answers: newAnswers,
    };
  });
};

const convertOldSchemaToNewSchema = () => {
  const oldStore = getProp('06_03_2019');

  const newStore = {
    info: convertOldInfoToNewInfo(oldStore),
    startedTasks: convertOldAnswersToStartedTasks(oldStore),
  };

  createProp(newStore);
};

const main = () => {
  if (!checkIfPropExists('30_03_2019') && checkIfPropExists('06_03_2019')) {
    convertOldSchemaToNewSchema();
  }
};

export default main();
