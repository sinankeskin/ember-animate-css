import { isPresent } from '@ember/utils';
import { modifier } from 'ember-modifier';

export default modifier(function animate(element, [animation, speed], hash) {
  const prefix = 'animate__';

  element.classList.add(`${prefix}animated`, `${prefix}${animation}`);

  if (isPresent(speed)) {
    element.classList.add(`${prefix}${speed}`);
  }

  if (isPresent(hash['delay'])) {
    element.classList.add(`${prefix}delay-${hash['delay']}s`);
  }

  if (isPresent(hash['repeat'])) {
    if (hash['repeat'] === 'infinite') {
      element.classList.add(`${prefix}${hash['repeat']}`);
    } else {
      element.classList.add(`${prefix}repeat-${hash['repeat']}`);
    }
  }
});
