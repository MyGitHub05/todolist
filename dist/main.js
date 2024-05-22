(()=>{"use strict";var n={183:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"#content {\n  /* border: 1px solid red; */\n  border-top-left-radius: 30px;\n  padding: 5px;\n  width: 100%;\n}\n#listNavigation {\n  margin-top: 25px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  margin-bottom: 30px;\n}\n\n.navBtn {\n  background-color: white;\n  border: none;\n  height: 100%;\n  min-width: 150px;\n  font-size: 20px;\n  font-weight: bolder;\n  cursor: pointer;\n}\n.navBtn:hover {\n  border-bottom: 1px solid;\n}\n\n#mainContent {\n  width: 100%;\n  height: 550px;\n  justify-content: center;\n}\n\n#todoListForm {\n  border: 1px solid hsla(0, 0%, 0%, 0.34);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 100px;\n}\n#todoListForm div {\n  display: flex;\n  flex-direction: column;\n}\n\n#todoListForm label {\n  font-size: 16px;\n  color: hsla(0, 0%, 0%, 0.765);\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n#todoListForm input {\n  border: 1px solid hsla(0, 0%, 0%, 0.34);\n  width: 300px;\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n}\n#todoListForm select {\n  width: 300px;\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#todoSubmitBtn {\n  padding: 10px;\n  width: 150px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  background-color: rgb(23, 146, 12);\n  color: white;\n}\n#todoSubmitBtn:hover {\n  background-color: rgb(21, 255, 0);\n}\n\n#todoList {\n  height: 100vh;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  overflow: auto;\n}\n#todoList li {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: hsla(52, 100%, 50%, 0.314);\n}\n\n#todoList li .todoInfoDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  padding: 5px;\n  color: hsla(0, 0%, 0%, 0.352);\n}\n#todoList li .todoInfoDiv span {\n  font-size: 14px;\n  color: black;\n}\n\n.TodoBtn {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  width: 100px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.edit {\n  background-color: rgba(42, 41, 41, 0.489);\n  color: white;\n}\n.edit:hover {\n  background-color: rgba(42, 41, 41, 0.828);\n}\n\n.delete {\n  background-color: #ff5f5f;\n  color: white;\n}\n.delete:hover {\n  background-color: #ff1f1f;\n}\n.metadata {\n  font-size: 12px;\n  color: hsla(0, 0%, 0%, 0.352);\n  margin-top: 10px;\n}\n.metadata p {\n  font-size: 14px;\n  color: black;\n}\n",""]);const d=a},716:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".editInfoDiv {\n  z-index: 100;\n  border: 1px solid;\n  width: 90%;\n  height: 500px;\n  padding: 10px;\n  position: absolute;\n  background-color: white;\n  top: 10px;\n  left: 100px;\n  border-radius: 10px;\n}\n\n.editForm {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.leftSide,\n.rightSide {\n  display: flex;\n  height: 400px;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.leftSide div,\n.rightSide div {\n  display: flex;\n  flex-direction: column;\n}\n\n.leftSide div label,\n.rightSide div label {\n  font-size: 25px;\n}\n\n.leftSide div input {\n  font-size: 16px;\n  padding: 10px;\n  outline: none;\n  border-radius: 2px;\n}\n\n.leftSide div select {\n  font-size: 16px;\n  padding: 10px;\n  outline: none;\n}\n\n.rightSide textarea {\n  outline: none;\n  font-size: 16px;\n  padding: 10px;\n  height: 130px;\n  border-radius: 2px;\n}\n\n.exit {\n  background-color: #ff5f5f;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.exit:hover {\n  background-color: #ff1f1f;\n}\n",""]);const d=a},249:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"* {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid; */\n}\nbody {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  border-radius: 5px;\n}\n",""]);const d=a},991:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"#dashboard {\n  padding: 5px;\n  height: 100vh;\n  width: 300px;\n  background-color: #fcfaf6;\n  overflow: auto;\n}\n.userDiv {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.profile {\n  border: 1px solid;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.profile img {\n  width: 100%;\n}\n.userDiv p {\n  font-size: 20px;\n  margin-left: 10px;\n}\n.addCategoriesDiv {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.addCategoriesDiv form {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.addCategoriesDiv form input {\n  height: 30px;\n  font-size: 16px;\n  margin-left: 10px;\n  outline: none;\n  padding-left: 5px;\n  width: 100%;\n}\n\n.addCatergoriesBtn {\n  height: 30px;\n  width: 30px;\n  background-color: rgba(0, 128, 0, 0.558);\n  color: white;\n  font-size: 20px;\n  border-radius: 100%;\n  cursor: pointer;\n  border: none;\n}\n\n.addCatergoriesBtn:hover {\n  background-color: rgb(0, 128, 0);\n}\n\n.addCategoriesDiv label {\n  font-size: 16px;\n  margin-left: 10px;\n}\n\n.submitCategoryBtn {\n  margin-left: 10px;\n  height: 30px;\n  width: 50px;\n  border-radius: 2px;\n  border: none;\n  background-color: #ff5f5f;\n  color: white;\n  font-size: 12px;\n  font-weight: bolder;\n  cursor: pointer;\n}\n.submitCategoryBtn:hover {\n  background-color: #ff1f1f;\n}\n\n.trashbinBtn {\n  height: 25px;\n  width: 50px;\n  overflow: hidden;\n  background-color: #ff5f5f;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.trashbinBtn:hover {\n  background-color: #ff1f1f;\n}\n.trashbinBtn img {\n  margin-top: 2px;\n  height: 16px;\n}\n.addCategoriesDiv .categoriesDiv div h1 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n",""]);const d=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var l=n[d],s=o.base?l[0]+o.base:l[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var l=o(n,r),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),d=t(56),l=t.n(d),s=t(540),c=t.n(s),p=t(113),u=t.n(p),f=t(249),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;var g=t(991),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),e()(g.A,h),g.A&&g.A.locals&&g.A.locals;var v=t(183),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),e()(v.A,b),v.A&&v.A.locals&&v.A.locals;var x=t(716),y={};function w(n){localStorage.removeItem(n)}function S(n,e){localStorage.setItem(n,JSON.stringify(e))}function T(n){return JSON.parse(localStorage.getItem(n))}function L(){for(let n=0;n<localStorage.length;n++){const e=localStorage.key(n),t=localStorage.getItem(e);console.log(`Key: ${e}, Value: ${t}`)}}function C(){return{deleteInLocalStorage:w,saveToLocalStorage:S,getToLocalStorage:T,iterateLocalStorage:L}}y.styleTagTransform=u(),y.setAttributes=l(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=c(),e()(x.A,y),x.A&&x.A.locals&&x.A.locals,t.p,t.p,t.p;const E=C();document.addEventListener("DOMContentLoaded",(()=>{const n=function(){const n=()=>{const t=document.querySelector(".forAllCategories");t.innerHTML="";const o=document.createElement("div");o.className="categoriesDiv";for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t),i=(localStorage.getItem(r),document.createElement("div")),a=document.createElement("h1"),d=document.createElement("button"),l=document.createElement("img");l.src="./images/trashbin.png",d.classList.add("trashbinBtn"),a.textContent=r,d.addEventListener("click",(()=>{E.deleteInLocalStorage(r),n(),e()})),d.appendChild(l),i.appendChild(a),a.appendChild(d),o.appendChild(i)}t.appendChild(o)},e=()=>{const n=document.getElementById("navigation");n.innerHTML="";for(let e=0;e<localStorage.length;e++){const r=localStorage.key(e),i=localStorage.getItem(r),a=document.createElement("button");a.classList.add("navBtn"),a.id=i,a.textContent=r,a.addEventListener("click",(()=>{t(r),o(r)})),n.appendChild(a)}},t=n=>{const e=document.getElementById("todolistFormDiv");e.innerHTML="",e.innerHTML='\n      <form action="todoList-form" id="todoListForm">\n            <div>\n              <label for="todo">Todo</label>\n              <input type="text" name="todo" id="todo" />\n            </div>\n\n            <div>\n              <label for="dateTime">Duedate </label>\n              <input type="datetime-local" name="dateTime" id="dateTime" />\n            </div>\n\n            <div>\n              <label for="priority">Priority</label>\n              <select id="priority">\n                <option value="low">low</option>\n                <option value="high">high</option>\n              </select>\n            </div>\n\n            <div>\n              <button type="submit" id="todoSubmitBtn">add</button>\n            </div>\n          </form>\n    ',document.getElementById("todoListForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("todo").value.trim(),r=document.getElementById("dateTime").value,i=document.getElementById("priority").value;if(t&&r&&i){const e={todo:t,dateTime:r,priority:i,description:"",notes:""},a=E.getToLocalStorage(n);a.push(e),E.saveToLocalStorage(n,a),o(n)}else console.warn("you need to put some data")}))},o=n=>{const e=document.getElementById("todoList");e.innerHTML="",E.getToLocalStorage(n).forEach((t=>{const i=document.createElement("li");i.innerHTML=`\n      <li>\n            <div class="todoInfoDiv">\n              <p>Title: <span>${t.todo}</span></p>\n              <p>Duedate: <span>${t.dateTime}</span></p>\n              <p>Priority: <span>${t.priority}</span></p>\n              <div>\n                <button class="TodoBtn edit">edit</button>\n                <button class="TodoBtn delete">Delete</button>\n              </div>\n            </div>\n            <div>\n              <p class="metadata">Description:</p>\n              <p>\n                ${t.description}\n              </p>\n              <p class="metadata">Notes:</p>\n              <p>\n                ${t.notes}\n              </p>\n            </div>\n          </li>\n      `;const a=i.querySelector(".edit"),d=i.querySelector(".delete");a.addEventListener("click",(()=>{r()})),d.addEventListener("click",(()=>{const e=E.getToLocalStorage(n).filter((n=>n.todo!==t.todo));localStorage.setItem(n,JSON.stringify(e)),o(n)})),e.appendChild(i)}))},r=()=>{const n=document.createElement("div");n.classList.add("editInfoDiv"),n.innerHTML='\n       <h1>Edit todo</h1>\n      <form class="editForm" action="submit-newInfo">\n        <div class="leftSide">\n          <div>\n            <label for="todo">todo</label>\n            <input type="text" name="todo" id="todo" />\n          </div>\n          <div>\n            <label for="duedate">duedate</label>\n            <input type="datetime-local" name="duedate" id="duedate" />\n          </div>\n          <div>\n            <label for="todo">priority</label>\n            <select name="priority" id="priority">\n              <option value="low">low</option>\n              <option value="high">high</option>\n            </select>\n          </div>\n        </div>\n\n        <div class="rightSide">\n          <div>\n            <label for="description">description</label>\n            <textarea name="description" id="description"></textarea>\n          </div>\n          <div>\n            <label for="notes">notes</label>\n            <textarea name="notes" id="notes"></textarea>\n          </div>\n        </div>\n\n        <button type="button" class="exit">X</button>\n      </form>\n    ',n.querySelector(".exit").addEventListener("click",(()=>{n.remove()})),document.body.appendChild(n)};return{addNewCategoryForm:()=>{const n=document.createElement("div");return n.innerHTML='\n       <form id="newCategoryForm" action="category-form">\n        <input type="text" name="categoryTitle" id="categoryTitle" />\n        <button type="submit" class="submitCategoryBtn">Add</button>\n      </form>\n    ',n},renderCategory:n,renderNav:e,renderTodoForm:t,renderTodoList:o,renderEditForm:r}}(),e=C(),t=document.querySelector(".formDiv"),o=document.querySelector(".addCatergoriesBtn");document.getElementById("content"),document.getElementById("mainContent"),o.addEventListener("click",(o=>{o.preventDefault(),t.innerHTML="";const r=n.addNewCategoryForm();t.appendChild(r),r.addEventListener("submit",(t=>{t.preventDefault();let o=r.querySelector("#categoryTitle"),i=o.value.trim();i?(e.saveToLocalStorage(i,[]),o.value="",n.renderCategory(),n.renderNav()):console.warn("Category name cannot be empty.")}))})),n.renderCategory(),n.renderNav(),n.renderTodoForm("todays"),n.renderTodoList("todays")}))})()})();