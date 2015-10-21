# enharmonics

[![Build Status](https://travis-ci.org/danigb/enharmonics.svg?branch=master)](https://travis-ci.org/danigb/enharmonics)
[![Test Coverage](https://codeclimate.com/github/danigb/enharmonics/badges/coverage.svg)](https://codeclimate.com/github/danigb/enharmonics/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/enharmonics/badges/gpa.svg)](https://codeclimate.com/github/danigb/enharmonics)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/enharmonics.svg)](https://www.npmjs.com/package/enharmonics)
[![array-notation](https://img.shields.io/badge/array--notation-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

Get the [enharmonics](https://en.wikipedia.org/wiki/Enharmonic) of a given note, simple and fast:

```js
var enharmonics = require('enharmonics')
enharmonics('C') // => ['B#', 'Cbb']
```

This is piece of a complete music manipulation library called [tonal](https://github.com/danigb/tonal)

## Usage 

You can install the module with npm: `npm i --save enharmonics`. If you need browser support use browserify or webpack.

### Examples

```js
var enharmonics = require('enharmonics')
enharmonics('C') // => ['B#', 'Dbb']
enharmonics('C2') // => ['B#1', 'Dbb2']
enharmonics('C#4') // => ['Db4', 'B##3']
enharmonics('Db2') // => ['C#2', 'B##1'])
```

## API

There's only one function:

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="enharmonics"><span class="type-signature"></span>enharmonics<span class="signature">(pitch, includeSource)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get all the enharmonics of a pitch (up to 4 alterations)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the pitch to get the enharmonics from</p></td>
</tr>
<tr>
<td class="name"><code>includeSource</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>(Optional) If true, the returned array
will contain the given pitch. False by default</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/enharmonics/blob/next/enharmonics.js">enharmonics.js</a>
<span>, </span>
<a href="https://github.com/danigb/enharmonics/blob/next/enharmonics.js#L8">lineno 8</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of pitches ordered by distance to the given one</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>enharmonics('C') // => ['B#', 'Dbb']
enharmonics('A') // => ['G##', 'Bbb']
enharmonics('C#4') // => ['B##3', 'Db4']
enharmonics('Db') // => ['C#', 'Ebbb'])</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
