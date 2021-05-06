(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[6543],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(4034),r=n(9973),o=(n(7294),n(3905)),i={id:"coding-101",title:"Coding 101",sidebar_label:"Coding 101"},l={unversionedId:"guides/coding-101",id:"guides/coding-101",isDocsHomePage:!1,title:"Coding 101",description:"What we will learn today?",source:"@site/docs/guides/coding-101.md",sourceDirName:"guides",slug:"/guides/coding-101",permalink:"/guides/coding-101",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/guides/coding-101.md",version:"current",sidebar_label:"Coding 101",frontMatter:{id:"coding-101",title:"Coding 101",sidebar_label:"Coding 101"}},s=[{value:"What is a computer program",id:"what-is-a-computer-program",children:[]},{value:"Getting started with JavaScript",id:"getting-started-with-javascript",children:[]},{value:"Variables and assignments",id:"variables-and-assignments",children:[]},{value:"Simple data types &amp; Expressions",id:"simple-data-types--expressions",children:[{value:"Numbers",id:"numbers",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Booleans",id:"booleans",children:[]},{value:"From REPL to console.log",id:"from-repl-to-consolelog",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What we will learn today?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is a computer program?"),(0,o.kt)("li",{parentName:"ul"},"Getting started with JavaScript")),(0,o.kt)("h2",{id:"what-is-a-computer-program"},"What is a computer program"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Intro to programming logic \u2013 Making a sandwich (Source:\n",(0,o.kt)("a",{parentName:"p",href:"http://static.zerorobotics.mit.edu/docs/team-activities/ProgrammingPeanutButterAndJelly.pdf"},"http://static.zerorobotics.mit.edu/docs/team-activities/ProgrammingPeanutButterAndJelly.pdf"),")")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ask the trainees what they think a program is at its most basic level",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Guide, if necessary, towards the idea that its instructions or an action\netc."))),(0,o.kt)("li",{parentName:"ol"},"Focus on the idea of instructions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Explain that like with a physical activity - tools and steps are required\nto carry out instructions"),(0,o.kt)("li",{parentName:"ul"},"Introduce the group activity of programming the activity of making a\nsandwich"))),(0,o.kt)("li",{parentName:"ol"},"Ask the trainees what items we will need to make a sandwich:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As they shout them out list them on the screen for the whole class to see"),(0,o.kt)("li",{parentName:"ul"},"Introduce the concept of objects and classes. Tie into the idea of how in a\nprogram these would be the 'tools' required for an activity and how for our\nsandwich making task the items we have listed previously are our classes"))),(0,o.kt)("li",{parentName:"ol"},"Now that we have all of the tools we need to make a sandwich ask the trainees\nto shout out what they think the first step or instruction is:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Write the instruction out on the screen and ask the trainees which object\nwould be needed to carry out that instruction"),(0,o.kt)("li",{parentName:"ul"},"Copy the instruction and place it under the object that the trainees have\ndecided is responsible for it and introduce the idea of methods"),(0,o.kt)("li",{parentName:"ul"},"Continue asking the trainees for instructions and listing them under the\nobjects that would be responsible for them (in the case where two objects\nare required to carry out an instruction try and break it down further with\nthe trainees until only one object is responsible for any one instruction \u2013\ncould be a good way to introduce the idea of how specific you need to be in\nprogramming and the concepts that are detailed in the source example of\nthis exercise)"))),(0,o.kt)("li",{parentName:"ol"},"Once the trainees are satisfied with the instructions take the best formed\nclass and ask the trainees to come up with a one word summary for each\ninstruction that is has. Explain the benefits of well named methods in\nprogramming and (maybe?) touch on naming conventions.")),(0,o.kt)("h2",{id:"getting-started-with-javascript"},"Getting started with JavaScript"),(0,o.kt)("p",null,"We will spend most of this lesson in Codepen. To get started, go to\n",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/pen"},"https://codepen.io/pen"),' to create a new Pen. On the bottom left,\nclick the "Console" button to open the console.'),(0,o.kt)("p",null,"You can place your cursor right behind the ",(0,o.kt)("inlineCode",{parentName:"p"},">")," sign. Type a simple expression,\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"2 + 2")," and hit enter. You will see expression, as well as its result,\nin the window above."),(0,o.kt)("p",null,"You will be able to follow most of this session along just entering expressions\nin the console like this."),(0,o.kt)("h2",{id:"variables-and-assignments"},"Variables and assignments"),(0,o.kt)("p",null,"For an expression or a value to be of any use to us, we need to store it in a\nvariable."),(0,o.kt)("p",null,"Variables have a name (",(0,o.kt)("em",{parentName:"p"},"identifier"),") that we can use to refer to a value. You\ncan assign a value to a variable with the following statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var x = 3;\n^   ^ ^ ^\n|   | | value\n|   | assignment operator\n|   identifier\ndeclaration statement\n")),(0,o.kt)("p",null,"Let's break this statement down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"var"),": With the ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," statement we tell the JavaScript engine that ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is now\na variable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),": The variable name/identifier. It can be short or long, but must not\ncontain spaces and must not start with a number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"="),": The equal sign is the assigmnent operator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3"),": The value that we assign to the variable. This can be any number, string\nor boolean, or any more complex data type that we will introduce later. You\ncan also use an existing variable here."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},";"),": THe semicolon is not strictly needed, but is generally used to terminate\na statement.")),(0,o.kt)("p",null,"Now you can use the identifier instead of the actual value in an expression:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x + x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"x * x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(x)")),(0,o.kt)("h2",{id:"simple-data-types--expressions"},"Simple data types & Expressions"),(0,o.kt)("h3",{id:"numbers"},"Numbers"),(0,o.kt)("p",null,"Let's start with something seemingly simple - numbers. Here are some:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"1;\n15;\n3195803798;\n1.4;\n0.0000005;\n0 - 23;\n")),(0,o.kt)("p",null,"You will see that there are whole numbers (no decimal point) and real numbers\n(decimal point), which in JavaScript are so-called \u201cfloating point\u201d numbers.\nNumbers can be positive or negative and they support all the basic math\noperators that you would expect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"2 + 2; // 4\n2 - 5; // -3\n2 * 3; // 6\n10 / 2; // 5\n3 * -2; // -6\n")),(0,o.kt)("p",null,"Operators have the same precedence as in algebra: ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," have higher\nprecedence than ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TODO:")," Do math exercise"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TODO:")," What about Infinity, Math.PI, IEEE floating points, NaN")),(0,o.kt)("h3",{id:"strings"},"Strings"),(0,o.kt)("p",null,"Strings represent any sort of text. They are delimited by single quotes (",(0,o.kt)("inlineCode",{parentName:"p"},"'"),") or\ndouble quotes (",(0,o.kt)("inlineCode",{parentName:"p"},"\u201d"),") and can be of any length."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'""; // empty string\n""; // empty string\n"Hello";\n"I am learning JavaScript";\n\'It\\\'s been a great journey so far!\';\n"Double quotes work as well";\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you need single or double quotes ",(0,o.kt)("em",{parentName:"p"},"inside the string"),", you need to \u201cescape\u201d\nthem by putting a backslash in front of them. If you don't do this, the\nJavaScript engine will think the string ends here, because it encounters a\nquote.")),(0,o.kt)("p",null,"The most common operation on strings is to append one string to another. This is\ncalled ",(0,o.kt)("em",{parentName:"p"},"string concatenation"),". It's achieved by the plus (",(0,o.kt)("inlineCode",{parentName:"p"},"+"),") operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"Hello" + "World"; // "HelloWorld"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TODO:")," Introduce string concatenation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TODO:")," What about basic string functions, like substr, replace etc?")),(0,o.kt)("h3",{id:"booleans"},"Booleans"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boolean_data_type"},"Booleans")," are a data type that\ncan only have two values: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Like numbers, they can be combined using operators, but there are different\noperators for booleans (analoguous to\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boolean_algebra"},"Boolean algebra"),"). The most\nimportant ones are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"!")," (NOT), which negates a value:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"!true; // false\n!false; // true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&&")," (AND), which is only true if both operands are true:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"false && false; // false\ntrue && false; // false\nfalse && true; // false\ntrue && true; // true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"||")," (OR), which is true if at least one of the operands is true:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"false && false; // false\ntrue && false; // true\nfalse && true; // true\ntrue && true; // true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TODO:")," When to introduce truthiness and falsiness? Probably in ",(0,o.kt)("inlineCode",{parentName:"p"},"comparisons"),"?"),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Exercise"),": Put simple mathematical expressions into the console: ",(0,o.kt)("inlineCode",{parentName:"p"},"2 * 2"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"2 + 2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"5 * 7 - 13")," > ",(0,o.kt)("strong",{parentName:"p"},"Exercise"),": Calculate the area of a circle (",(0,o.kt)("inlineCode",{parentName:"p"},"r * r * pi"),"). Do a quick Google search on how to use PI in JavaScript."),(0,o.kt)("p",{parentName:"blockquote"},'See what happens when you "add" two strings together'),(0,o.kt)("p",{parentName:"blockquote"},"Research the JS Math library. sqrt, floor, ceil, round"),(0,o.kt)("p",{parentName:"blockquote"},"Write an expression that outputs the percentage of trainees who are female.\nMake it so it outputs it as ",(0,o.kt)("inlineCode",{parentName:"p"},"58%"),", and make sure you use the actual numbers of\nwomen and the total number of trainees. Solution: ",(0,o.kt)("inlineCode",{parentName:"p"},'console.log(Math.round(7 / 17 * 100) + "%");'))),(0,o.kt)("h3",{id:"from-repl-to-consolelog"},"From REPL to console.log"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single expressions are not very useful, you want to write applications"),(0,o.kt)("li",{parentName:"ul"},"More than one statement? Move it to the ",(0,o.kt)("inlineCode",{parentName:"li"},"JS")," box in Codepen"),(0,o.kt)("li",{parentName:"ul"},"Now you don't get any immediate feedback"),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log")," to print to the console: ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log(3 + 3);")),(0,o.kt)("li",{parentName:"ul"},"Write statements below each other")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"THOUGHT:"),' Codepen does not have a "run" button, so it\'s quite intransparent\nwhen it actually re-runs a program. Maybe a different tool is better? A simple\njsbin configuration, maybe?')))}p.isMDXComponent=!0}}]);