const calcIfExternalLink = (props = {}) => {
  const { url, forceDomain } = props;

  const linkInMemory = document.createElement('a');
  linkInMemory.href = url;
  const condition = new RegExp(`${window.location.host}|${forceDomain}`, 'i');

  return !linkInMemory.hostname.match(condition);
};

export default calcIfExternalLink;
