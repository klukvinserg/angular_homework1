function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Q/4p":function(n,t,e){"use strict";e.r(t),e.d(t,"NewsModule",(function(){return h}));var o,r,i=e("ofXK"),c=e("tyNb"),a=e("fXoL"),s=e("S0FS"),b=((r=function(){function n(t){_classCallCheck(this,n),this.newsService=t,this.restList=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.restList=this.newsService.getNews()}}]),n}()).\u0275fac=function(n){return new(n||r)(a.Fb(s.a))},r.\u0275cmp=a.zb({type:r,selectors:[["app-item-news"]],inputs:{item:"item"},decls:9,vars:3,consts:[[1,"card"],["src","https://www.latestfreestuff.co.uk/wp-content/uploads/2019/11/free-mcdonalds-fries.jpg","alt","MD",2,"width","100%"],[3,"routerLink"]],template:function(n,t){1&n&&(a.Ib(0,"div",0),a.Gb(1,"img",1),a.Ib(2,"h1"),a.Wb(3),a.Hb(),a.Ib(4,"p"),a.Wb(5),a.Hb(),a.Ib(6,"p"),a.Ib(7,"button",2),a.Wb(8,"More..."),a.Hb(),a.Hb(),a.Hb()),2&n&&(a.wb(3),a.Xb(t.item.title),a.wb(2),a.Yb("Author: ",t.item.author,""),a.wb(2),a.Rb("routerLink","card/",t.item.id,""))},directives:[c.b],styles:[".main[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:center;text-align:center}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);margin:20px;padding:10px;font-family:arial}.price[_ngcontent-%COMP%]{color:grey;font-size:22px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:#000;text-align:center;cursor:pointer;width:100%;font-size:18px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}"]}),r),l=((o=function(){function n(t,e){_classCallCheck(this,n),this.activateRoute=t,this.newsService=e,this.currentId=+this.activateRoute.snapshot.params.id,this.currentNews=this.newsService.getNewsById(this.currentId)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)(a.Fb(c.a),a.Fb(s.a))},o.\u0275cmp=a.zb({type:o,selectors:[["app-news-card"]],decls:13,vars:5,consts:[[1,"main"],[1,"fakeimg",2,"height","200px"]],template:function(n,t){1&n&&(a.Ib(0,"div",0),a.Ib(1,"h2"),a.Wb(2),a.Hb(),a.Ib(3,"h2"),a.Wb(4),a.Hb(),a.Ib(5,"h3"),a.Wb(6),a.Hb(),a.Ib(7,"h5"),a.Wb(8),a.Hb(),a.Ib(9,"div",1),a.Wb(10,"Image"),a.Hb(),a.Ib(11,"p"),a.Wb(12),a.Hb(),a.Hb()),2&n&&(a.wb(2),a.Yb("Title: ",t.currentNews.title,""),a.wb(2),a.Yb("Author: ",t.currentNews.author,""),a.wb(2),a.Yb("Id: ",t.currentNews.id,""),a.wb(2),a.Yb("Date: ",t.currentNews.date,""),a.wb(4),a.Yb("Description: ",t.currentNews.description,""))},styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;margin:0}.header[_ngcontent-%COMP%]{padding:80px;text-align:center;background:#1abc9c;color:#fff}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.navbar[_ngcontent-%COMP%]{overflow:hidden;background-color:#333}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;display:block;color:#fff;text-align:center;padding:14px 20px;text-decoration:none}.navbar[_ngcontent-%COMP%]   a.right[_ngcontent-%COMP%]{float:right}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd;color:#000}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.side[_ngcontent-%COMP%]{flex:30%;background-color:#f1f1f1}.main[_ngcontent-%COMP%], .side[_ngcontent-%COMP%]{padding:20px}.main[_ngcontent-%COMP%]{flex:70%;background-color:#fff}.fakeimg[_ngcontent-%COMP%]{background-image:url(https://blog.trud.com/wp-content/uploads/2013/12/doors-1767564_960_720.png);background-size:contain;padding:20px}"]}),o);function p(n,t){1&n&&a.Gb(0,"app-item-news",2),2&n&&a.Qb("item",t.$implicit)}var d,f,u,g=[{path:"",component:(d=function(){function n(t){_classCallCheck(this,n),this.newsService=t,this.restList=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.restList=this.newsService.getNews()}}]),n}(),d.\u0275fac=function(n){return new(n||d)(a.Fb(s.a))},d.\u0275cmp=a.zb({type:d,selectors:[["app-news-list"]],decls:2,vars:1,consts:[[1,"main"],[3,"item",4,"ngFor","ngForOf"],[3,"item"]],template:function(n,t){1&n&&(a.Ib(0,"div",0),a.Vb(1,p,1,1,"app-item-news",1),a.Hb()),2&n&&(a.wb(1),a.Qb("ngForOf",t.restList))},directives:[i.h,b],styles:[".main[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:center;text-align:center}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:20%;margin:20px;padding:10px;font-family:arial}.price[_ngcontent-%COMP%]{color:grey;font-size:22px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:#000;text-align:center;cursor:pointer;width:100%;font-size:18px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}"]}),d)},{path:"card/:id",component:l},{path:"item-news",component:b}],w=((u=function n(){_classCallCheck(this,n)}).\u0275mod=a.Db({type:u}),u.\u0275inj=a.Cb({factory:function(n){return new(n||u)},imports:[[c.d.forChild(g)],c.d]}),u),h=((f=function n(){_classCallCheck(this,n)}).\u0275mod=a.Db({type:f}),f.\u0275inj=a.Cb({factory:function(n){return new(n||f)},imports:[[i.b,w]]}),f)}}]);