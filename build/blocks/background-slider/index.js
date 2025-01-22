(()=>{"use strict";var e,r={399:()=>{const e=window.wp.components,r=window.wp.blocks,l=JSON.parse('{"UU":"occ/rather-simple-background-slider"}'),a=window.wp.i18n,i=window.wp.blockEditor,o=window.wp.element,t=window.ReactJSXRuntime,s={from:[{type:"block",isMultiBlock:!0,blocks:["core/image"],transform:e=>{const l=e.filter((({url:e})=>e));return(0,r.createBlock)("occ/rather-simple-background-slider",{images:l.map((({id:e,url:r,alt:l,caption:a})=>({id:e,url:r,alt:l,caption:a.text})))})}}],to:[{type:"block",blocks:["core/image"],transform:e=>{if(e.images.length>0)return e.images.map((({id:e,url:l,alt:a,caption:i})=>(0,r.createBlock)("core/image",{id:e,url:l,alt:a,caption:i,sizeSlug:"full"})))}}]},{UU:n}=l,c={icon:{src:(0,t.jsxs)(e.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)(e.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,t.jsx)(e.G,{children:(0,t.jsx)(e.Path,{d:"M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"})})]}),foreground:"#ff8a00"},edit:r=>{const l=(0,i.useBlockProps)(),{attributes:{images:s,delay:n},setAttributes:c}=r,[d,p]=(0,o.useState)(0);function h(e){const r=e.map((e=>({id:e.id,url:e.url,alt:e.alt,caption:e.caption})));c({images:r}),p(0)}return(0,o.useEffect)((()=>{const e=setInterval((()=>{p((e=>(e+1)%s.length))}),1e3*n);return()=>clearInterval(e)}),[s,n]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.InspectorControls,{children:(0,t.jsx)(e.PanelBody,{title:(0,a.__)("Settings","rather-simple-background-slider"),children:(0,t.jsx)(e.RangeControl,{label:(0,a.__)("Delay","rather-simple-background-slider"),min:"1",max:"30",onChange:e=>{c({delay:e})},value:n,help:(0,a.__)("Set the delay between images in seconds.","rather-simple-background-slider")})})}),s.length>0&&(0,t.jsx)(i.BlockControls,{children:(0,t.jsx)(e.ToolbarGroup,{children:(0,t.jsx)(i.MediaUploadCheck,{children:(0,t.jsx)(i.MediaUpload,{allowedTypes:["image"],multiple:!0,gallery:!0,value:s.map((e=>e.id)),onSelect:h,render:({open:r})=>(0,t.jsx)(e.ToolbarButton,{onClick:r,children:(0,a.__)("Edit images","rather-simple-background-slider")})})})})}),(0,t.jsx)(i.MediaUploadCheck,{children:s.length>0?(0,t.jsx)("figure",{...l,children:(0,t.jsx)("div",{className:"wp-block-occ-rather-simple-background-slider__items",children:(e=>e.map(((e,r)=>(0,t.jsx)("figure",{className:"wp-block-occ-rather-simple-background-slider__item",children:(0,t.jsx)("img",{src:e.url,alt:e.alt,className:"wp-block-occ-rather-simple-background-slider__slide "+(r===d?"active":"")},e.id)},r))))(s)})}):(0,t.jsx)("div",{...l,children:(0,t.jsx)(i.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:h,multiple:!0,gallery:!0,addToGallery:!0,handleUpload:!0,labels:{title:(0,a.__)("Rather Simple Background Slider","rather-simple-background-slider")}})})})]})},transforms:s};(0,r.registerBlockType)(n,c)}},l={};function a(e){var i=l[e];if(void 0!==i)return i.exports;var o=l[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(r,l,i,o)=>{if(!l){var t=1/0;for(d=0;d<e.length;d++){for(var[l,i,o]=e[d],s=!0,n=0;n<l.length;n++)(!1&o||t>=o)&&Object.keys(a.O).every((e=>a.O[e](l[n])))?l.splice(n--,1):(s=!1,o<t&&(t=o));if(s){e.splice(d--,1);var c=i();void 0!==c&&(r=c)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,i,o]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={299:0,123:0};a.O.j=r=>0===e[r];var r=(r,l)=>{var i,o,[t,s,n]=l,c=0;if(t.some((r=>0!==e[r]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(n)var d=n(a)}for(r&&r(l);c<t.length;c++)o=t[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},l=globalThis.webpackChunkrather_simple_background_slider_block=globalThis.webpackChunkrather_simple_background_slider_block||[];l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l))})();var i=a.O(void 0,[123],(()=>a(399)));i=a.O(i)})();