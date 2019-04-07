const calcSummary = (nextDraw, text, progress, remaining) => {
  if (progress < 100) {
    return text.noQualify({ nextDraw, remaining });
  }

  return text.qualify({ nextDraw });
};


export default calcSummary;
