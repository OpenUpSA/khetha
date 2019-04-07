import React, { Fragment } from 'react';
import t from 'prop-types';


import Panel from './Panel';


const Markup = (props) => {
  const {
    buttons,
    incremental,
    items,
    focused,
    changeFocus,
    advance,
    next,
  } = props;

  const createPanels = items.map((itemProps, index) => {
    const passedProps = {
      incremental,
      buttons,
      index,
      focused,
      changeFocus,
      advance,
      next: next(itemProps.id),
      id: itemProps.id,
      error: itemProps.error,
      progress: itemProps.progress,
      title: itemProps.title,
      summary: itemProps.summary,
      content: itemProps.content,
      highlighted: itemProps.highlighted,
    };

    return (
      <Panel
        {...passedProps}
        key={itemProps.title}
      />
    );
  });


  return (
    <Fragment>
      {createPanels}
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  focused: t.number,
  changeFocus: t.func.isRequired,
  incremental: t.bool,
  buttons: t.bool,
  next: t.func,
  items: t.arrayOf(
    t.shape({
      progress: t.oneOfType([t.number, t.bool]),
      title: t.string,
      summary: t.oneOfType([t.string, t.array]),
      content: t.oneOfType([t.node, t.func]),
      highlighted: t.bool,
    }),
  ),
};


Markup.defaultProps = {
  focused: null,
  incremental: false,
  buttons: false,
  items: null,
  next: null,
};
