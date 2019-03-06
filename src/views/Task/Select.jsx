return (
  <GradientSelect
    value={value}
    filled
    options={options.map(text => ({
      text,
      callback: () => {
        next(index, text);
      },
    }))}
  />
);
