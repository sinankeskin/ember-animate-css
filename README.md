# ember-animate-css

Ember addon for pure css animation [Animate.css](https://animate.style/) library.

## Compatibility

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-animate-css
```

## Usage

animate is an element modifier. Simply add to an element like;

```handlebars
<button type="button" {{animate 'bounce' 'faster' delay='1' repeat='3'}}>
  Bounce
</button>
```

- First positional parameter is for animation name. ( Required - For all names [click](https://animate.style/) )
- Second positional parameter is for speed. ( Optional - Possible values: ['slow', 'slower', 'fast', 'faster'] )
- One named parameter is delay time. ( Optional - Possible values: ['1', '2', '3', '4', '5'] )
- Another named parameter is repeat count. ( Optional - Possible values: ['infinite', '1', '2', '3'] )

For all animation names and other parameters [click](https://animate.style/).

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
