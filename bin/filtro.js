module.exports = {
  returnData: function ($) {
    var linksToOpenPopupPronunciation = $('.au'),
        files = [],
        au = function (file, word) {

          var result = {
            file: file,
            word: word,
            firstLetter: word[0]
          }

          result.completeUrl = 'http://media.merriam-webster.com/soundc11/'+ result.firstLetter +'/' + file + '.wav'

          return result
        }

    linksToOpenPopupPronunciation.each(function (index, element) {
      func = $(element).attr('onclick').replace('return', '')
      result = eval(func)
      files[result.word] = result
    })

    return {
      audios: files
    }
  }
}
