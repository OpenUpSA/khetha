import propsCheck, { PropTypes } from '../propsCheck';


const calcIfExternalLink = (props) => {
  propsCheck({ check: calcIfExternalLink, props })
  const { url } = props;
  const condition = new RegExp(`/${window.location.host}/`);
  return condition.test(url);
}


calcIfExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
};


export default propsCheck;
