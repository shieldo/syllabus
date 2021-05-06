(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[2293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9166:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(4034),o=n(9973),i=(n(7294),n(3905)),r={id:"code-style-guide",title:"Code Style Guide",sidebar_label:"Code Style Guide"},l={unversionedId:"guides/code-style-guide",id:"guides/code-style-guide",isDocsHomePage:!1,title:"Code Style Guide",description:"Why should I read this?",source:"@site/docs/guides/code-style-guide.md",sourceDirName:"guides",slug:"/guides/code-style-guide",permalink:"/guides/code-style-guide",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/guides/code-style-guide.md",version:"current",sidebar_label:"Code Style Guide",frontMatter:{id:"code-style-guide",title:"Code Style Guide",sidebar_label:"Code Style Guide"}},s=[{value:"Why should I read this?",id:"why-should-i-read-this",children:[]},{value:"Before you start",id:"before-you-start",children:[{value:"Using Prettier to format code automatically",id:"using-prettier-to-format-code-automatically",children:[]}]},{value:"Essential",id:"essential",children:[{value:"Indent your code",id:"indent-your-code",children:[]},{value:"Don&#39;t leave lots of commented out code",id:"dont-leave-lots-of-commented-out-code",children:[]},{value:"Saving old versions with Git",id:"saving-old-versions-with-git",children:[]},{value:"Don&#39;t leave unused variables",id:"dont-leave-unused-variables",children:[]},{value:"Think of good names for your variables",id:"think-of-good-names-for-your-variables",children:[]},{value:"Use <code>camelCase</code>",id:"use-camelcase",children:[]},{value:"Avoid short names",id:"avoid-short-names",children:[]},{value:"Describe what the variable is/does",id:"describe-what-the-variable-isdoes",children:[]},{value:"Using <code>let</code>, <code>const</code> and <code>var</code>",id:"using-let-const-and-var",children:[]},{value:"Avoid Long Functions",id:"avoid-long-functions",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Remember your audience",id:"remember-your-audience",children:[]},{value:"Good scoping of your variables",id:"good-scoping-of-your-variables",children:[]}]}],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-should-i-read-this"},"Why should I read this?"),(0,i.kt)("p",null,"There are many different ways of writing code that achieve the same goal. However, programmers generally agree that there are some ways of writing code that are more understandable and ",(0,i.kt)("em",{parentName:"p"},"readable")," than other ways."),(0,i.kt)("p",null,"To help write more understandable code, programmers follow a ",(0,i.kt)("em",{parentName:"p"},"style guide"),". It provides guidelines for how to write code, how to structure it, common problems to avoid, etc."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("h3",{id:"using-prettier-to-format-code-automatically"},"Using Prettier to format code automatically"),(0,i.kt)("p",null,"Some of the guidelines are so common that there are automatic tools to do it for you! One of these tools is called Prettier. You should have installed this tool when you ",(0,i.kt)("a",{parentName:"p",href:"https://docs.codeyourfuture.io/course-processes/before-the-course/getting-setup#extensions"},"set up your VS Code extensions"),"."),(0,i.kt)("p",null,"Prettier is a tool that rearranges your code (called ",(0,i.kt)("em",{parentName:"p"},"formatting"),"). It follows a set of rules that programmers have agreed make your code easier to read and understand."),(0,i.kt)("p",null,"You might have a common problem when running Prettier. If you see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Invalid code with red highlight",src:n(8958).Z})),(0,i.kt)("p",null,"Then you have written some code that is invalid and Prettier can't format it. A common issue is a missing bracket, so try looking for that first."),(0,i.kt)("h2",{id:"essential"},"Essential"),(0,i.kt)("p",null,"From when you begin programming it is essential that you follow the guidelines below - a good habit is much easier to get in to when you start!"),(0,i.kt)("h3",{id:"indent-your-code"},"Indent your code"),(0,i.kt)("p",null,"You may have noticed that programmers tend to ",(0,i.kt)("em",{parentName:"p"},"indent")," their code by starting a line of code with some space."),(0,i.kt)("p",null,"Here's an example in HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <p>Hello world!</p>\n</div>\n")),(0,i.kt)("p",null,"And JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'if (isVegetarian) {\n  return "Macaroni and Cheese";\n} else {\n  return "Steak and Chips";\n}\n')),(0,i.kt)("p",null,"Indentation helps us to read our code by visually marking how the code is going to run. Programmers rely on this extra information to quickly read and understand code."),(0,i.kt)("p",null,"There are some guidelines about where to add indentation. For example, lines of code are indented when they are inside a function, an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement or a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop. Additionally, if any of those structures are inside another structure, then they are indented further."),(0,i.kt)("p",null,"The guidelines about where to add indentation can be complex, but the good news is that ",(0,i.kt)("strong",{parentName:"p"},"Prettier adds indentation automatically")," for us! However it is good to pay attention to where indentation is added, as you may find yourself writing code in an environment where Prettier is not installed."),(0,i.kt)("h3",{id:"dont-leave-lots-of-commented-out-code"},"Don't leave lots of commented out code"),(0,i.kt)("p",null,"When you are debugging a problem, you might comment out some sections of your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \ud83d\uded1 Don\'t do this!\nfunction addToShoppingList(item) {\n  // console.log("Shopping list before", shoppingList);\n  // console.log("Adding item", item);\n  shoppingList.add(item);\n  // console.log("Shopping list after", shoppingList);\n}\n')),(0,i.kt)("p",null,"In this example, there is some extra debugging information that is commented out."),(0,i.kt)("p",null,"Once you have solved the problem, you should remove large sections of commented out code. When you (or someone else) are reading your code, you want to know only the important pieces. Removing commented out code helps find the relevant code faster and easier."),(0,i.kt)("h3",{id:"saving-old-versions-with-git"},"Saving old versions with Git"),(0,i.kt)("p",null,'You might be worried about "losing" some experimental code that you want to "save" by commenting it out. However, this can cause confusion about which bits of code still work.'),(0,i.kt)("p",null,"If you want to save some code, remember that you can commit it using Git. It will then be saved it forever. If you decide to remove the code later you can delete it and make another commit. And if you want it back again, you can always look at the deleted code in the git history."),(0,i.kt)("h3",{id:"dont-leave-unused-variables"},"Don't leave unused variables"),(0,i.kt)("p",null,"As you write code, you may make changes to the variables that you are using. You may rename some variables, make some new variables or change how the variables are used. This may leave some variables that are ",(0,i.kt)("em",{parentName:"p"},"unused"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function orderTaxi(pickUpTime) {\n  let driverName = getDriverName();\n  let customerName = getCustomerName(); // \ud83d\uded1 Don't do this!\n\n  return `${driverName} will pick you up at ${pickUpTime}`;\n}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"customerName")," variable isn't used anywhere."),(0,i.kt)("p",null,"You should remove any variables that are unused. This is because if you (or someone else) is reading your code, it can be confusing if you see a variable and then find out later that it isn't used. It could make you think that there's a bug, because the variable must have been put there for a reason!"),(0,i.kt)("h3",{id:"think-of-good-names-for-your-variables"},"Think of good names for your variables"),(0,i.kt)("p",null,"Making our code understandable by others is critical to being a programmer. One of the main tools in our toolbox is good naming for our variables and function names."),(0,i.kt)("p",null,"There are no strict rules to follow when thinking of variable names, but there are some general guidelines."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When thinking about whether a variable name is good, try to imagine that you are reading the code again in the future and you have forgotten exactly how it works."),(0,i.kt)("p",{parentName:"div"},"Do the variable names help explain what the code is supposed to do?"))),(0,i.kt)("h3",{id:"use-camelcase"},"Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"camelCase")),(0,i.kt)("p",null,"When writing JavaScript, programmers tend to use a convention called ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"camelCase")),'. This means starting your variable name with a lower case letter, and then every "word" after that starts with an upper case letter.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startingLocation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeToDestination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trafficOnRoute"))),(0,i.kt)("p",null,'By doing this it makes it easier to read variable name that have multiple "words".'),(0,i.kt)("h3",{id:"avoid-short-names"},"Avoid short names"),(0,i.kt)("p",null,"Very short variable names can be difficult to understand since the purpose of the variable can be unclear. They are also difficult remember, especially if there are many similarly named variables. Try to avoid short names or abbreviations."),(0,i.kt)("p",null,"Here are some examples of ",(0,i.kt)("strong",{parentName:"p"},"bad")," names that you should avoid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single letters like ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"y")),(0,i.kt)("li",{parentName:"ul"},"Abbreviations like ",(0,i.kt)("inlineCode",{parentName:"li"},"evt")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"event")),(0,i.kt)("li",{parentName:"ul"},"Generic names like ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("h3",{id:"describe-what-the-variable-isdoes"},"Describe what the variable is/does"),(0,i.kt)("p",null,"A good variable name quickly explains what it represents to anyone reading the code. Try to describe what the variable is or what it does within in code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nlet song = true;\n\n// \u2705 This is better\nlet isPlaying = true;\n")),(0,i.kt)("p",null,"In this example, the variable name ",(0,i.kt)("inlineCode",{parentName:"p"},"song")," doesn't tell us what it is used for. The ",(0,i.kt)("inlineCode",{parentName:"p"},"isPlaying")," variable name is better since it tells us whether a song is playing or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction percentage() {\n  // ...\n}\n\n// \u2705 This is better\nfunction getPercentage() {\n  // ...\n}\n")),(0,i.kt)("p",null,'In this example, the function calculates a percentage and returns it. Therefore it is good to name it using the "get" verb to show that it returns something.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction isOldEnough(number) {\n  // ...\n}\n\n// \u2705 This is better\nfunction isOldEnough(yearOfBirth) {\n  // ...\n}\n")),(0,i.kt)("p",null,"Finally, parameters of functions should also have names that properly represent what is going to be received into the function."),(0,i.kt)("h3",{id:"using-let-const-and-var"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"let"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"const")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"var")),(0,i.kt)("p",null,"In JavaScript there are three ways to define a variable - ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),". The rules on using them at CodeYourFuture are as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var myAge = 21; // \ud83d\uded1 Do not use\nlet yourAge = 21; // \u2705 Use for values that change\nconst secondsInMinute = 60; // \u2705 Use for values that never change\n")),(0,i.kt)("h4",{id:"using-var"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"var")),(0,i.kt)("p",null,"You should ",(0,i.kt)("strong",{parentName:"p"},"never")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),". This is an outdated way of writing JavaScript code and it is always better to use ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,i.kt)("p",null,"The reason it still exists is because lots of code already uses it and so it can't be removed from JavaScript safely."),(0,i.kt)("h4",{id:"using-let"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"let")),(0,i.kt)("p",null,"You should use ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," for a variable that will change, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let buttonClickedCount = 0;\nbuttonClickedCount = buttonClickedCount + 1;\n")),(0,i.kt)("h4",{id:"using-const"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"const")),(0,i.kt)("p",null,"For other variables that will never change you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),", for example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const centimetersInMeter = 100;\n")),(0,i.kt)("h3",{id:"avoid-long-functions"},"Avoid Long Functions"),(0,i.kt)("p",null,"Sometimes writing long functions are unavoidable, however most of the time is better to split a long function into a few shorter ones. "),(0,i.kt)("p",null,"This will "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make your code easier to read"),(0,i.kt)("li",{parentName:"ol"},"Make your code easier to maintain"),(0,i.kt)("li",{parentName:"ol"},"Make your code easier to review by out volunteers")),(0,i.kt)("p",null,"When you writing code you should also try to keep in mind that you will only ever write the code once, but you will read the code many times. Always aim to write code that is readable. "),(0,i.kt)("p",null,"For more details you can read these useful articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(The Art of Writing Small and Plain Functions)","[https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/]")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"These additional rules may be harder for you to understand at the start of your programming journey however they are important concepts as your develop."),(0,i.kt)("h3",{id:"remember-your-audience"},"Remember your audience"),(0,i.kt)("p",null,"Remember that you are communicating with another programmer!"),(0,i.kt)("p",null,"Don't forget that the person reading your code probably has some understanding of the ",(0,i.kt)("em",{parentName:"p"},"context"),". If your function is named ",(0,i.kt)("inlineCode",{parentName:"p"},"getCustomer"),", it's probably fine to name variables ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),", etc instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"customerName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"customerAge"),". You don't need to explain ",(0,i.kt)("em",{parentName:"p"},"everything"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Naming variables is more of an art than a science"),". Often you need some experience reading other people's code before you get really good at it."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When reading other people's code, think about the variable names. If the names are not clear, make sure you understand the code first, then think about what names you would use instead."))),(0,i.kt)("h3",{id:"good-scoping-of-your-variables"},"Good scoping of your variables"),(0,i.kt)("p",null,"Define your variables with the narrowest scope they can have. This is easiest to explain with an example..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,5}","{3,5}":!0},'function findLongestFirstName(fullNames) {\n  let longest;\n  let firstName;\n  for (let i = 0; i < fullNames.length; i++) {\n    firstName = fullNames[i].split(" ")[0];\n    if (!longest || firstName.length > longest.length) {\n      longest = firstName;\n    }\n  }\n  return longest;\n}\n')),(0,i.kt)("p",null,"It is considered better code to combine the two highlighted lines into one like this..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},'function findLongestFirstName(fullNames) {\n  let longest;\n  for (let i = 0; i < fullNames.length; i++) {\n    let firstName = fullNames[i].split(" ")[0];\n    if (!longest || firstName.length > longest.length) {\n      longest = firstName;\n    }\n  }\n  return longest;\n}\n')),(0,i.kt)("p",null,"This is important as when a function (or your code more generally) becomes more complex it will be harder to keep track of what variable is used where."))}u.isMDXComponent=!0},8958:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prettier-error-dc799e008422aadc8087f716695b9ee5.png"}}]);