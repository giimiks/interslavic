(()=>{"use strict";var e={5167:function(e,t){var a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var s,i=0,n=t.length;i<n;i++)!s&&i in t||(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.wordErrorTextMaxLength=t.captchaSiteKey=t.wordErrorsTypes=t.tableColumnsLetters=t.tablesData=t.validFields=t.basicFields=t.initialAddFields=t.initialFields=t.dataDelimiter=t.addLangs=t.langs=t.alphabetTypes=void 0,t.alphabetTypes=[{name:"latin",value:"latin"},{name:"cyrillic",value:"cyrillic"},{name:"glagolitic",value:"glagolitic"}],t.langs=["ru","be","uk","pl","cs","sk","sl","hr","sr","mk","bg"],t.addLangs=["de","nl","eo","cu","csb","dsb","hsb","ia","es","pt","fr","it","he","da"],t.dataDelimiter="<>",t.initialFields=["id","isv","addition","partOfSpeech","type","en","sameInLanguages","genesis"],t.initialAddFields=["type","sameInLanguages","genesis"],t.basicFields=a(a([],t.initialFields,!0),t.langs,!0),t.validFields=a(a([],t.basicFields,!0),t.addLangs,!0),t.tablesData=[{spreadsheetId:"1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY",sheetId:"1987833874",fields:t.basicFields},{spreadsheetId:"1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY",sheetId:"2005431854",fields:t.addLangs}],t.tableColumnsLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),t.wordErrorsTypes=["translate","synonym","interslavic"],t.captchaSiteKey="6Lccu5kdAAAAACvN1Cnl5THInIZPEmqIyJOMjkpe",t.wordErrorTextMaxLength=120},6970:function(e,t,a){var s=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var s,i=0,n=t.length;i<n;i++)!s&&i in t||(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var i=a(5167),n="interslavic-dictionary",r=s(s(["index.html","data/basic.txt","data/translateStatistic.json"],i.addLangs.map((function(e){return"data/".concat(e,".txt")})),!0),["manifest.json","grammarComponent.js","index.js","sw.js","styles/grammarComponent.css","styles/index.css"],!1);self.addEventListener("install",(function(e){e.waitUntil(caches.open(n).then((function(e){return e.addAll(r)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request,{ignoreSearch:-1!=e.request.url.indexOf("?")}).then((function(t){var a,s;return t?(a=new Date(t.headers.get("last-modified")))&&Date.now()-a.getTime()>6e5?(s=e.request.clone(),fetch(s).then((function(a){return a&&200===a.status?(caches.open(n).then((function(t){return t.put(e.request,a)})),a.clone()):t})).catch((function(){return t}))):t:fetch(e.request)})))}))}},t={};!function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}(6970)})();