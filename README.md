filtro-merriam-audio
====================

This filtro module returns the audios of words from Merriam Webster website

## Install

`npm install filtro-merriam-audio`

## Usage

Require filtro package
```
var filtro = require('filtro').filtro
```

Call the function filtro using `merriam-audio` module
```js
var word = 'write';

filtro({
  url: 'http://www.merriam-webster.com/dictionary/' + encodeURI(word),
  modules: ['merriam-audio'],
  onError: function (error) {
    console.log('Error: ', error);
  },
  onContent: function (result) {
    console.log('All audios found in this page ', result)
    console.log(result['merriam-audio'].audios[word])
  }
});
```

The `result` will look like this:
```json
{
  'merriam-audio': {
    audios: [
      write: {
        file: 'write001',
        word: 'write',
        firstLetter: 'w',
        completeUrl: 'http://media.merriam-webster.com/soundc11/w/write001.wav'
      },
      wrote: {
        file: 'wrote001',
        word: 'wrote',
        firstLetter: 'w',
        completeUrl: 'http://media.merriam-webster.com/soundc11/w/wrote001.wav'
      },
      written: {
        file: 'writte01',
        word: 'written',
        firstLetter: 'w',
        completeUrl: 'http://media.merriam-webster.com/soundc11/w/writte01.wav'
      },
      writ: {
        file: 'writ0002',
        word: 'writ',
        firstLetter: 'w',
        completeUrl: 'http://media.merriam-webster.com/soundc11/w/writ0002.wav'
      },
      writing: {
        file: 'writin01',
        word: 'writing',
        firstLetter: 'w',
        completeUrl: 'http://media.merriam-webster.com/soundc11/w/writin01.wav'
      }
    ]
  }
}
```

## Alert

If you use this filtro module, make sure to inform your users that the content is from [Merriam Webster](http://www.merriam-webster.com/)


 ---
 > :warning: This is a [Filtro](http://github.com/felquis/filtro) module.
 ---