const calcSubtitleColor = (error, highlighted) => {
  if (error) {
    return 'red';
  }

  if (highlighted) {
    return '#0B5FFF';
  }

  return '#666';
};


export default calcSubtitleColor;
