import { createElement, Component } from 'react';
import { navigate, } from 'gatsby';
import Loading from '../../views/Loading';


import Task from '../../views/Task';


class Page extends Component {

  componentDidMount() {
      return navigate('/bigdebatepoll');
  }

  render() {
    return createElement(Loading, {});
  }
}

export default Page;

