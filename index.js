require('./index.css');
require('highlight.js/styles/idea.css');

var highlight = require('highlight.js/lib/highlight');
highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
highlight.registerLanguage('html', require('highlight.js/lib/languages/xml'));
highlight.registerLanguage('css', require('highlight.js/lib/languages/css'));

requestAnimationFrame(function () {
    Array.prototype.slice.call(document.querySelectorAll('pre code')).forEach(function (node) {
        highlight.highlightBlock(node);
    });
});
