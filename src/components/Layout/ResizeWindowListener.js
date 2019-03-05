import { debounce } from 'lodash';


class ResizeWindowListener {
  constructor(dimension, callback, delay = 300) {
    this.callback = callback;
    this.direction = dimension || 'width';
    this.debouncedResize = debounce(this.onResize, delay);

    window.addEventListener('resize', this.debouncedResize, false);
    this.onResize();
  }

  stop = () => {
    window.removeEventListener('resize', this.debouncedResize, false);
  }

  onResize = () => {
    const size = this.dimensions === 'width' ? window.innerWidth : window.innerHeight;
    return size;
  }
}


export default ResizeWindowListener;
