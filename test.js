var filtro = require('filtro').filtro,
    word   = 'write';

filtro({
  url: 'http://www.merriam-webster.com/dictionary/' + encodeURI(word),
  modules: ['merriam-audio'],
  onError: function (error) {
    console.log('Error: ', error);
  },
  onContent: function (result) {
    console.log('All audios found in this page ', result['merriam-audio'])
    console.log(result['merriam-audio'].audios[word])
  }
});