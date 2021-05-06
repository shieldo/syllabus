(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[310],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9502:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=o(4034),n=o(9973),a=(o(7294),o(3905)),i={id:"level-350",title:"Level 350",sidebar_label:"Level 350"},s={unversionedId:"js-core-3/tv-show-dom-project/level-350",id:"js-core-3/tv-show-dom-project/level-350",isDocsHomePage:!1,title:"Level 350",description:"Switch to fetching live data!",source:"@site/docs/js-core-3/tv-show-dom-project/level-350.md",sourceDirName:"js-core-3/tv-show-dom-project",slug:"/js-core-3/tv-show-dom-project/level-350",permalink:"/js-core-3/tv-show-dom-project/level-350",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/tv-show-dom-project/level-350.md",version:"current",sidebar_label:"Level 350",frontMatter:{id:"level-350",title:"Level 350",sidebar_label:"Level 350"},sidebar:"JavaScriptCore3",previous:{title:"Level 300",permalink:"/js-core-3/tv-show-dom-project/level-300"},next:{title:"Level 400",permalink:"/js-core-3/tv-show-dom-project/level-400"}},l=[{value:"Switch to fetching <em>live</em> data!",id:"switch-to-fetching-live-data",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Note on fetching the list of episodes",id:"note-on-fetching-the-list-of-episodes",children:[]},{value:"Learn about the API from its documentation",id:"learn-about-the-api-from-its-documentation",children:[]},{value:"Loading a different show - just for fun",id:"loading-a-different-show---just-for-fun",children:[]}]}],p={toc:l};function c(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"switch-to-fetching-live-data"},"Switch to fetching ",(0,a.kt)("em",{parentName:"h2"},"live")," data!"),(0,a.kt)("p",null,"(This is a short level to help you transition to using live data.)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pre-req"),": For this level you will have to have learned to use fetch() to ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," JSON content from an API."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Complete all requirements from level 300"),(0,a.kt)("li",{parentName:"ol"},"When your page loads, it must load the episodes (for the SAME show) from TVMaze API, using ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),", NOT from the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"getAllEpisodes"),' function. (See below for the API "endpoint" (URL) to fetch.)'),(0,a.kt)("li",{parentName:"ol"},"Your search and episode selector must continue to work as specified in level 300."),(0,a.kt)("li",{parentName:"ol"},"Your page MUST NOT re-fetch the episodes every time the user types a character into your search field!")),(0,a.kt)("h3",{id:"note-on-fetching-the-list-of-episodes"},"Note on fetching the list of episodes"),(0,a.kt)("p",null,"To get the episodes for the Game of Thrones TV show, you would make a GET request for this URL: ",(0,a.kt)("a",{parentName:"p",href:"https://api.tvmaze.com/shows/82/episodes"},"https://api.tvmaze.com/shows/82/episodes"),", using fetch."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Try that link in the browser. It just returns a plain text file, containing JSON.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Notice the structure. Is the top level an array? An object?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You ",(0,a.kt)("strong",{parentName:"p"},"should")," notice that the JSON returned is exactly what was originally provided for you by the function in ",(0,a.kt)("inlineCode",{parentName:"p"},"episodes.js"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now you are seeing where we originally obtained the data from!"))),(0,a.kt)("h3",{id:"learn-about-the-api-from-its-documentation"},"Learn about the API from its documentation"),(0,a.kt)("p",null,"You can see that this endpoint has been documented here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.tvmaze.com/api#show-episode-list"},"https://www.tvmaze.com/api#show-episode-list")),(0,a.kt)("h3",{id:"loading-a-different-show---just-for-fun"},"Loading a different show - just for fun"),(0,a.kt)("p",null,"From the documentation above you can see that the show id is mentioned in the URL."),(0,a.kt)("p",null,"Try changing that number and obtaining an episode list for other tv shows."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/82/episodes"},"https://api.tvmaze.com/shows/82/episodes")," - Game Of Thrones"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/527/episodes"},"https://api.tvmaze.com/shows/527/episodes")," - The Sopranos"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/22036/episodes"},"https://api.tvmaze.com/shows/22036/episodes")," - Planet Earth II"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/5/episodes"},"https://api.tvmaze.com/shows/5/episodes")," - True Detective"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/582/episodes"},"https://api.tvmaze.com/shows/582/episodes")," - Fresh Prince"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/179/episodes"},"https://api.tvmaze.com/shows/179/episodes")," - The Wire"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/379/episodes"},"https://api.tvmaze.com/shows/379/episodes")," - Mythbusters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tvmaze.com/shows/4729/episodes"},"https://api.tvmaze.com/shows/4729/episodes")," - Scrapheap Challenge")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/level-300"},"<< level 300")," - ",(0,a.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/readme"},"top")," - ",(0,a.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/level-400"},"level 400 >>")))}c.isMDXComponent=!0}}]);