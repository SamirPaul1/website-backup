!function(e,t){"function"==typeof define&&define.amd?define(["exif-js"],t):"object"==typeof exports?module.exports=t(require("exif-js")):e.CanvasCompress=t(e.EXIF)}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return l.includes(e)?e:(console.warn("[canvas-compress]: unsupport MIME type "+e+", will fallback to default "+f),f)}function n(e,t){var r=e.width,i=e.height;switch(t){case 1:return{width:r,height:i,matrix:[1,0,0,1,0,0]};case 2:return{width:r,height:i,matrix:[-1,0,0,1,r,0]};case 3:return{width:r,height:i,matrix:[-1,0,0,-1,r,i]};case 4:return{width:r,height:i,matrix:[1,0,0,-1,0,i]};case 5:return{width:i,height:r,matrix:[0,1,1,0,0,0]};case 6:return{width:i,height:r,matrix:[0,1,-1,0,i,0]};case 7:return{width:i,height:r,matrix:[0,-1,-1,0,i,r]};case 8:return{width:i,height:r,matrix:[0,-1,1,0,0,r]}}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),u=window.URL||window.webkitURL,h=Math.log(2),s=4,c={PNG:"image/png",JPEG:"image/jpeg",WEBP:"image/webp"},l=Object.keys(c).map(function(e){return c[e]}),f=c.JPEG,g=.9,d={width:1e3,height:618},m={_Promise:window.Promise,get Promise(){if("function"!=typeof this._Promise)throw new Error("canvas-compress requires Promise");return this._Promise},set Promise(e){if("function"!=typeof e)throw new TypeError("Promise should be a function");this._Promise=e}},p=function v(){var e=this;r(this,v),this.promise=new m.Promise(function(t,r){e.resolve=t,e.reject=r})},w=function(){function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=void 0===t?f:t,o=e.width,a=void 0===o?d.width:o,u=e.height,h=void 0===u?d.height:u,s=e.quality,l=void 0===s?g:s;r(this,w),n=i(n),l=parseFloat(l);var m={width:parseFloat(a),height:parseFloat(h)};Object.defineProperties(this,{isJPEG:{value:n===c.JPEG},outputType:{get:function(){return n}},outputSize:{get:function(){return m}},outputQuality:{get:function(){return l}}})}return a(w,null,[{key:"usePromise",value:function(e){m.Promise=e}},{key:"isSupportedType",value:function(e){return l.includes(e)}}]),a(w,[{key:"_clear",value:function(e,t,r){1===e.nodeType&&(e=e.getContext("2d"),t=e.width,r=e.height),this.isJPEG?(e.fillStyle="#fff",e.fillRect(0,0,t,r)):e.clearRect(0,0,t,r)}},{key:"_getOriginalImage",value:function(e){var t=u.createObjectURL(e),r=new Image,i=new p;return r.onload=function(){i.resolve(r)},r.onerror=function(){i.reject("image load error")},r.src=t,i.promise}},{key:"_drawOriginalImage",value:function(r){var i=this,o=document.createElement("canvas"),a=o.getContext("2d"),h=new p;return e.getData(r,function(){var s=e.getTag(r,"Orientation")||1,c=n(r,s),l=c.width,f=c.height,g=c.matrix;o.width=l,o.height=f,a.save(),a.transform.apply(a,t(g)),i._clear(a,l,f),a.drawImage(r,0,0),a.restore(),u.revokeObjectURL(r.src),h.resolve(o)}),h.promise}},{key:"_resizeImage",value:function(e){var t=this.outputSize,r=e.width,i=e.height,n=Math.min(1,t.width/r,t.height/i);return m.Promise.resolve({source:e,scale:n})}},{key:"_drawImage",value:function(e){var t=e.source,r=e.scale;if(1===r)return m.Promise.resolve(t);var i=t.getContext("2d"),n=Math.min(s,Math.ceil(1/r/h)),o=Math.pow(r,1/n),a=document.createElement("canvas"),u=a.getContext("2d"),c=t.width,l=t.height;a.width=c,a.height=l;for(var f=0;f<n;){var g=c*o|0,d=l*o|0,p=void 0,w=void 0;if(f%2===0?(p=t,w=u):(p=a,w=i),this._clear(w,c,l),w.drawImage(p,0,0,c,l,0,0,g,d),f++,c=g,l=d,f===n){var v=p===t?a:t,y=w.getImageData(0,0,c,l);return v.width=c,v.height=l,w.putImageData(y,0,0),m.Promise.resolve(v)}}}},{key:"_compress",value:function(e){var t=this.outputType,r=this.outputQuality,i=e.width,n=e.height,o=e.toDataURL(t,r),a=atob(o.split(",")[1]).split("").map(function(e){return e.charCodeAt(0)}),u=new Blob([new Uint8Array(a)],{type:t});return m.Promise.resolve({blob:u,width:i,height:n})}},{key:"process",value:function(e){if(!e)return m.Promise.reject(new ReferenceError("file blob is required"));if(!e.type.match(/^image/))return m.Promise.reject(new TypeError("unsupport file type: "+e.type));var t={};return this._getOriginalImage(e).then(function(e){return t.width=e.width,t.height=e.height,e}).then(this._drawOriginalImage.bind(this)).then(this._resizeImage.bind(this)).then(this._drawImage.bind(this)).then(this._compress.bind(this)).then(function(r){return{source:o({blob:e},t),result:o({},r)}})}}]),w}();return w.MIME=o({},c,{JPG:c.JPEG}),w});
