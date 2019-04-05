import { tasks } from '../../data/old-tasks-object';

const checkIfPropExists = prop => localStorage.getItem(prop) !== null;
const getProp = prop => JSON.parse(localStorage.getItem(prop));
const createProp = data => localStorage.setItem('30_03_2019', JSON.stringify(data));

const convertOldInfoToNewInfo = ({ info, storage: { synced } }) => ({
  ...info,
  synced,
});

const createAnswerObject = key => ({ value, answered, ...otherValues }, index) => {
  const [{ eng: { questions } }] = tasks.filter(({ id }) => id === key);
  const { title: question } = questions[index];  

  return {
    ...otherValues,
    answer: value,
    firstAnswered: answered,
    question,
  };
};

const convertOldAnswersToStartedTasks = oldTasks => (result, key) => {
  const { completed: lastEdit, started, data } = oldTasks[key];

  return {
    ...result,
    [key]: {
      lastEdit,
      started,
      answers: data.map(createAnswerObject(key)),
    },
  };
};

const convertOldSchemaToNewSchema = () => {
  const oldStore = getProp('06_03_2019');

  const keys = Object.keys(oldStore.answers);

  const newStore = {
    info: convertOldInfoToNewInfo(oldStore),
    startedTasks: keys.reduce(convertOldAnswersToStartedTasks(oldStore.answers), {}),
  };

  createProp(newStore);
};

const main = () => {
  if (!checkIfPropExists('30_03_2019') && checkIfPropExists('06_03_2019')) {
    convertOldSchemaToNewSchema();
  }
};

export default main();
