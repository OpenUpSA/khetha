import { debounce } from 'lodash';


class ScrollDirectionListener {
  constructor(direction, callback, delay = 100) {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    this.lastPosition = position || 0;
    this.callback = callback;
    this.direction = direction || 'down';
    this.debouncedScroll = debounce(this.onScroll, delay);

    window.addEventListener('scroll', this.debouncedScroll, false);
  }

  stop = () => {
    window.removeEventListener('scroll', this.debouncedScroll, false);
  }

  onScroll = () => {
    const position = window.scrollY;
    const scrollingDown = position > this.lastPosition;

    if (scrollingDown && this.direction === 'down') {
      this.lastPosition = position;
      return this.callback(true);
    }

    this.lastPosition = position;
    return this.callback(false);
  }
}


export default ScrollDirectionListener;
