import propsCheck, { PropTypes } from '../propsCheck';


const calcIfExternalLink = (props = {}) => {
  propsCheck({ check: calcIfExternalLink, props });
  const { url, forceDomain } = props;

  const linkInMemory = document.createElement('a');
  linkInMemory.href = url;
  const condition = new RegExp(`${window.location.host}|${forceDomain}`, 'i');

  return !linkInMemory.hostname.match(condition);
};


calcIfExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  forceHost: PropTypes.string,
};


calcIfExternalLink.defaultProps = {
  forceHost: null,
};

export default calcIfExternalLink;
