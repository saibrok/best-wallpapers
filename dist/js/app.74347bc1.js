(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,h=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"35a3":function(t,e,a){"use strict";a("c512")},"372b":function(t,e,a){},"38e0":function(t,e,a){"use strict";a("4ba1")},"4ba1":function(t,e,a){},5614:function(t,e,a){"use strict";a("e169")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("5c0b"),a("2877")),s={},c=Object(i["a"])(s,n,o,!1,null,null,null),l=c.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"galery"},[a("header",{staticClass:"galery__header"},[a("h1",{staticClass:"galery__title"},[t._v("Галерея фотографий")]),a("a",{ref:"randomPhotoLink",staticClass:"card__current-screen-download-link link",attrs:{href:"",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.openRandomPhoto(e)}}},[t._v(" I'll be lucky ")])]),a("ul",{staticClass:"galery__list photo-list"},t._l(t.photoList,(function(e){return a("li",{key:e.id,staticClass:"photo-item"},[a("PhotoCard",{attrs:{photo:e,currentPage:t.pages.currentPage}})],1)})),0),a("BasePaginator",{staticClass:"paginator",attrs:{pages:t.pages},on:{clickOnPagination:t.changePage}})],1)},h=[],d=(a("99af"),a("caad"),a("2532"),a("9911"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paginator"},[a("div",{staticClass:"paginator__page"},[a("div",{staticClass:"paginator__link",class:{disabled:!t.pages.hasPrevPage},on:{click:function(e){return t.openPageByNumber(1)}}},[t._v(" << ")])]),a("div",{staticClass:"paginator__page"},[a("div",{staticClass:"paginator__link",class:{disabled:!t.pages.hasPrevPage},on:{click:function(e){return t.openPageByNumber(t.pages.currentPage-1)}}},[t._v(" < ")])]),a("ul",{staticClass:"paginator__page-list"},t._l(t.pageNumbersList,(function(e){return a("li",{key:e,staticClass:"paginator__page"},[a("div",{staticClass:"paginator__link",class:{active:t.pages.currentPage===e},on:{click:function(a){return t.openPageByNumber(e)}}},[t._v(" "+t._s(e)+" ")])])})),0),a("div",{staticClass:"paginator__page"},[a("div",{staticClass:"paginator__link",class:{disabled:!t.pages.hasNextPage},on:{click:function(e){return t.openPageByNumber(t.pages.currentPage+1)}}},[t._v(" > ")])]),a("div",{staticClass:"paginator__page"},[a("div",{staticClass:"paginator__link",class:{disabled:!t.pages.hasNextPage},on:{click:function(e){return t.openPageByNumber(t.pages.totalNumberOfPages)}}},[t._v(" >> ")])])])}),g=[],_=(a("4de4"),{props:{pages:Object},computed:{pageNumbersList:function(){for(var t=this,e=[],a=this.pages.currentPage-2;a<=this.pages.currentPage+2;a++)e.push(a);return e.filter((function(e){return e>0&&e<=t.pages.totalNumberOfPages}))}},methods:{openPageByNumber:function(t){this.$emit("clickOnPagination",t)}}}),f=_,v=(a("38e0"),Object(i["a"])(f,d,g,!1,null,"2de3248a",null)),m=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"photo-link",attrs:{to:{name:"card",params:{id:parseInt(t.photo.id),prevPageNumber:t.currentPage}}}},[a("div",{staticClass:"photo-link__image-wrapper"},[a("img",{staticClass:"photo-link__image",attrs:{src:t.getPreviewUrl(t.photo.download_url),alt:"Фотография"}})]),a("div",{staticClass:"photo-link__description"},[a("div",{staticClass:"photo-link__author photo-link__col"},[t._v(t._s(t.photo.author))]),a("div",{staticClass:"photo-link__number photo-link__col"},[t._v("№ "+t._s(t.photo.id))])])])},P=[],w=(a("a9e3"),a("ac1f"),a("1276"),a("a15b"),{props:{photo:Object,currentPage:Number},methods:{getPreviewUrl:function(t){var e=t.split("/"),a=300,r=200;return e[e.length-2]=a,e[e.length-1]=r,e.join("/")}}}),k=w,C=(a("64d2"),Object(i["a"])(k,b,P,!1,null,"3f961495",null)),y=C.exports,N=(a("d3b7"),a("bc3a")),O=a.n(N),x=O.a.create({baseURL:"https://picsum.photos",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),L={getPhotos:function(t,e){return x.get("/v2/list?page=".concat(t,"&limit=").concat(e))},getPhotoById:function(t){return x.get("/id/".concat(t,"/info"))},getNumberOfPages:function(t){var e=1e3;return Promise.resolve(parseInt(e/t))}},j={components:{PhotoCard:y,BasePaginator:m},props:["number"],data:function(){return{photoList:[],pages:{hasPrevPage:!1,hasNextPage:!1,totalNumberOfPages:0,currentPage:parseInt(this.number),photoLimitPerPage:12},show:!0}},methods:{openRandomPhoto:function(){open("https://picsum.photos/seed/".concat(Date.now(),"/").concat(window.screen.width,"/").concat(window.screen.height))},changePage:function(t){this.pages.currentPage=t,this.$router.push({name:"list",params:{number:t}})},getPhotos:function(){var t=this;L.getPhotos(this.pages.currentPage,this.pages.photoLimitPerPage).then((function(e){t.pages.hasPrevPage=e.headers.link.includes('rel="prev"'),t.pages.hasNextPage=e.headers.link.includes('rel="next"'),t.photoList=e.data})).catch((function(t){console.log(t)}))},getTotalNumberOfPages:function(t){var e=this;L.getNumberOfPages(t).then((function(t){return e.pages.totalNumberOfPages=t}))}},created:function(){this.getPhotos(),this.getTotalNumberOfPages(this.pages.photoLimitPerPage)},beforeRouteUpdate:function(t,e,a){this.getPhotos(),a()}},B=j,I=(a("5614"),Object(i["a"])(B,p,h,!1,null,"11876133",null)),$=I.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("header",{staticClass:"card__header"},[a("router-link",{staticClass:"card__header-link link",attrs:{title:"Галерея фотографий",to:{name:"list",params:{number:isNaN(t.prevPageNumber)?1:t.prevPageNumber}}}},[t._v(" Назад к Фотолист ")])],1),a("div",{staticClass:"card__info"},[a("div",{ref:"preview",staticClass:"card__preview",class:{"full-screen":t.isOpen},on:{click:t.toggleFullScreen}},[a("img",{ref:"photo",staticClass:"card__preview-image",attrs:{src:t.photo.lowQualityUrl,alt:"Фотография"},on:{load:t.onImgLoad}}),t.isLoading?a("div",{staticClass:"card__preview-loader-wrapper"},[a("BaseLoader",{staticClass:"card__preview-loader"})],1):t._e(),t.isError?a("div",{staticClass:"card__preview-error"},[t._v(" ОШИБКА ЗАГРУЗКИ ФОТОРГАФИИ ")]):t._e()]),t.isError?t._e():a("div",{staticClass:"card__description"},[a("div",{staticClass:"card__author"},[a("b",[t._v("Автор:")]),t._v(" "+t._s(t.photo.author)+" :: "),a("i",[t._v("Фото №:")]),t._v(" "+t._s(t.photo.id)+" ")]),a("a",{staticClass:"card__description-link link",attrs:{href:t.photo.url,target:"_blank"}},[t._v(" Подробнее ")]),t._v(" | "),a("a",{staticClass:"card__preview-link link",attrs:{href:t.photo.download_url,target:"_blank"}},[t._v(" Скачать оригинал "+t._s(t.photo.width)+"x"+t._s(t.photo.height)+" ")]),t._v(" | "),a("a",{staticClass:"card__current-screen-download-link link",attrs:{href:t.currentScreenDownloadLink,target:"_blank"}},[t._v(" Ваше разрешение "+t._s(t.screenWidth)+"x"+t._s(t.screenHeight)+" ")])])]),a("div",{staticClass:"card__buttons"},[this.id>0?a("button",{staticClass:"button-prev button",on:{click:t.prevPage}},[t._v(" < Предыдущая ")]):t._e(),this.id<1084?a("button",{staticClass:"button-next button",on:{click:t.nextPage}},[t._v(" Следующая > ")]):t._e()]),a("div",{staticClass:"card__text"},[a("h3",{staticClass:"card__text-title"},[t._v(t._s(t.photo.title))]),a("div",{staticClass:"card__text-description",domProps:{innerHTML:t._s(t.photo.description)}})])])},S=[],U=(a("5319"),a("a4d3"),a("e01a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-ellipsis"},[a("div"),a("div"),a("div"),a("div")])}],R=(a("8491"),{}),M=Object(i["a"])(R,U,T,!1,null,"0026e132",null),D=M.exports,H={components:{BaseLoader:D},props:{id:Number,prevPageNumber:Number},data:function(){return{photo:{},screenWidth:window.screen.width,screenHeight:window.screen.height,currentPhotoNumber:0,isLoading:!0,isError:!1,isOpen:!1}},computed:{currentScreenDownloadLink:function(){return"https://picsum.photos/id/".concat(this.id,"/").concat(this.screenWidth,"/").concat(this.screenHeight)}},methods:{getLowQualityUrl:function(t,e,a){var r=t.split("/"),n=800,o=e/n,i=parseInt(a/o);return r[r.length-2]=n,r[r.length-1]=i,r.join("/")},setAspectRatio:function(t,e){var a=t/e,r=100/a;this.$refs.preview.style.paddingTop="".concat(r,"%")},toggleFullScreen:function(){this.isOpen=!this.isOpen},nextPage:function(){this.currentPhotoNumber=+this.id+1,this.$router.replace({name:"card",params:{id:this.currentPhotoNumber,prevPageNumber:this.prevPageNumber}})},prevPage:function(){this.currentPhotoNumber=+this.id-1,this.$router.replace({name:"card",params:{id:this.currentPhotoNumber,prevPageNumber:this.prevPageNumber}})},getPhotoById:function(t){var e=this;this.isLoading=!0,this.isError=!1,L.getPhotoById(t).then((function(t){e.photo=t.data,e.photo.lowQualityUrl=e.getLowQualityUrl(e.photo.download_url,e.photo.width,e.photo.height),e.setAspectRatio(e.photo.width,e.photo.height)})).then((function(){O.a.get("https://fish-text.ru/get?type=title&number=1&format=json").then((function(t){e.photo.title=t.data.text}))})).then((function(){O.a.get("https://fish-text.ru/get?type=paragraph&number=3&format=html").then((function(t){e.photo.description=t.data}))})).catch((function(t){e.isError=!0,e.onImgLoad(),e.photo={},console.log(t)}))},onImgLoad:function(){this.isLoading=!1}},beforeRouteUpdate:function(t,e,a){this.getPhotoById(this.currentPhotoNumber),a()},created:function(){this.getPhotoById(this.id)}},Q=H,A=(a("35a3"),Object(i["a"])(Q,E,S,!1,null,"4f3e0e9b",null)),W=A.exports;r["a"].use(u["a"]);var F=[{path:"/page/:number",name:"list",component:$,props:!0},{path:"/photo/:id",name:"card",component:W,props:!0},{path:"/",redirect:{name:"list",params:{number:1}}}],J=new u["a"]({mode:"history",base:"",routes:F}),q=J,z=a("2f62");r["a"].use(z["a"]);var G=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("fb98");r["a"].config.productionTip=!1,new r["a"]({router:q,store:G,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"64d2":function(t,e,a){"use strict";a("b711")},8491:function(t,e,a){"use strict";a("372b")},"9c0c":function(t,e,a){},b711:function(t,e,a){},c512:function(t,e,a){},e169:function(t,e,a){},fb98:function(t,e,a){}});
//# sourceMappingURL=app.74347bc1.js.map