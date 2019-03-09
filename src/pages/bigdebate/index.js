import { Component } from 'react';
import { navigate } from 'gatsby';

class Page extends Component {
  componentDidMount() {
    return navigate('/bigdebatepoll');
  }
}
