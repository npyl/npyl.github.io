import woofmark from 'woofmark';

woofmark(document.querySelector('#ta'), {
    parseMarkdown: megamark,
    parseHTML: domador
});