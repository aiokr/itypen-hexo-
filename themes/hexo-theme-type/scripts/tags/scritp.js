/**
 * center-quote.js | https://theme-next.org/docs/tag-plugins/
 */

/* global hexo */

'use strict';
/*

function aspectRatio(args, content) {
  return '<div class="aspect-ratio">'
       + hexo.render.renderSync({text: content, engine: 'markdown'})
       + '</div>';
};
hexo.extend.tag.register('标签名', 函数名, {ends: true});

*/

function aspectRatio(args, content) {
  return '<div class="aspect-ratio">'
    + hexo.render.renderSync({ text: content, engine: 'markdown' })
    + '</div>';
};
hexo.extend.tag.register('bili', aspectRatio, { ends: true });

function chartJs(args, content) {
  return '<canvas id="myChart"><script>'
    + hexo.render.renderSync({ text: content, engine: 'html' })
    + '</script></canvas>';
};
hexo.extend.tag.register('chartJs', chartJs, { ends: true });

function antvG2(args, content) {
  return `<div id="${args.join(' ')}" class="itpAntv"></div>
          <script>
            ${ hexo.render.renderSync({ text: content, engine: 'html' })}
          </script>`;
};
hexo.extend.tag.register('antvG2', antvG2, { ends: true });

function postNote(args, content) {
  return `<div class="note ${args.join(' ')}">
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`;
}

hexo.extend.tag.register('note', postNote, { ends: true });
hexo.extend.tag.register('subnote', postNote, { ends: true });


