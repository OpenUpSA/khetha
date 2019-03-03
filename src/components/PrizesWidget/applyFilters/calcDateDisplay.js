import moment from 'moment';


const calcDateDisplay = (dateString) => {
  const remaining = moment(new Date(dateString));
  const nextWeek = moment().add(7, 'days');
  const timestamp = remaining.valueOf();

  return {
    dateString,
    remaining: timestamp,
    text: remaining.fromNow(true),
    past: remaining.valueOf() < moment().valueOf(),
    lessThanWeek: remaining.valueOf() < nextWeek.valueOf(),
  };
};


export default calcDateDisplay;
