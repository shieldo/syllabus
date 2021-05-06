(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[3623],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(o),m=n,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return o?r.createElement(k,a(a({ref:t},u),{},{components:o})):r.createElement(k,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var h=2;h<i;h++)a[h]=o[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7214:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=o(4034),n=o(9973),i=(o(7294),o(3905)),a={id:"git-desktop",title:"Github Desktop Workshop",sidebar_label:"Github Desktop Workshop"},l={unversionedId:"workshops/git-desktop",id:"workshops/git-desktop",isDocsHomePage:!1,title:"Github Desktop Workshop",description:"Learning Objectives",source:"@site/docs/workshops/git-desktop-workshop.md",sourceDirName:"workshops",slug:"/workshops/git-desktop",permalink:"/workshops/git-desktop",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/git-desktop-workshop.md",version:"current",sidebar_label:"Github Desktop Workshop",frontMatter:{id:"git-desktop",title:"Github Desktop Workshop",sidebar_label:"Github Desktop Workshop"}},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Setup",id:"setup",children:[]},{value:"What is the problem?",id:"what-is-the-problem",children:[]},{value:"What is Github?",id:"what-is-github",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"What is Github Desktop?",id:"what-is-github-desktop",children:[{value:"Exercise",id:"exercise-1",children:[]}]},{value:"What about working in Teams?",id:"what-about-working-in-teams",children:[]},{value:"Branching",id:"branching",children:[]},{value:"Exercise",id:"exercise-2",children:[]},{value:"Pull requests",id:"pull-requests",children:[{value:"Exercise",id:"exercise-3",children:[]}]},{value:"(Optional) What is Git?",id:"optional-what-is-git",children:[]},{value:"Quiz",id:"quiz",children:[]}],h={toc:s};function u(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will be able to create a repository on Github"),(0,i.kt)("li",{parentName:"ul"},"You will be able to clone a repository using Github Desktop"),(0,i.kt)("li",{parentName:"ul"},"You will be able to make changes to a repository using Github Desktop"),(0,i.kt)("li",{parentName:"ul"},"You can define what the differences between Git and Github are"),(0,i.kt)("li",{parentName:"ul"},"You can use git to submit all your coursework to Github")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"It is important that all of the attendees have access to the CodeYourFuture Github Teams. Make sure that they have all been added and if they haven't add them."),(0,i.kt)("h2",{id:"what-is-the-problem"},"What is the problem?"),(0,i.kt)("p",null,"When programmers work together it can be hard to stay in sync. This can be demonstrated by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have one person write three words on a piece of paper"),(0,i.kt)("li",{parentName:"ul"},"Give the paper to the teacher and the teacher makes a copy of it"),(0,i.kt)("li",{parentName:"ul"},"Somebody else can request the paper from the teacher"),(0,i.kt)("li",{parentName:"ul"},"Change a word on the paper and give it back to the teacher.")),(0,i.kt)("p",null,"The teacher is the single source of truth for the project. This is fine so long as both people don't make a change at the same time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now both trainees change a word on their piece of paper"),(0,i.kt)("li",{parentName:"ul"},"They then try to give both pieces of paper to the teacher",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"But the teacher doesn't know what to do! Which one is correct?")))),(0,i.kt)("p",null,"This is why Git was invented!"),(0,i.kt)("h2",{id:"what-is-github"},"What is Github?"),(0,i.kt)("p",null,"Give an overview of Github including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Project Overview"),(0,i.kt)("li",{parentName:"ul"},"Issues"),(0,i.kt)("li",{parentName:"ul"},"Creating a repository"),(0,i.kt)("li",{parentName:"ul"},"Changing a file in a repository")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Repository")," - A repository is like a folder on your computer. It can hold a lot of other files.\n",(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Commit")," - When you commit - you are saving the file to your repository"),(0,i.kt)("h3",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,"All trainees should now complete the following steps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1. Create a repository called "Code Your Future".\n2. Create a file in their repository called `ReadMe.md`\n3. Edit the ReadMe.md inside Github to include their name.\n')),(0,i.kt)("h2",{id:"what-is-github-desktop"},"What is Github Desktop?"),(0,i.kt)("p",null,"Github Desktop is a way to edit files on your computer instead of editing them online."),(0,i.kt)("p",null,"Give a demonstration of"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cloning a repository"),(0,i.kt)("li",{parentName:"ol"},"Making a change to a file in the repository"),(0,i.kt)("li",{parentName:"ol"},"Committing the changes to our local repository"),(0,i.kt)("li",{parentName:"ol"},"Pushing our changes to Github")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Clone")," - Clone means to create a copy of the repository on your laptop\n",(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Push")," - Push means to send your saved copy of the repository to Github\n",(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Fetch")," - Find out if there have been any changes to the repository\n",(0,i.kt)("strong",{parentName:"p"},"Glossary")," - ",(0,i.kt)("em",{parentName:"p"},"Pull")," - Get the latest changes from the repository"),(0,i.kt)("h3",{id:"exercise-1"},"Exercise"),(0,i.kt)("p",null,"The trainees should now complete the following steps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1. Clone their repository called `Code Your Future` to their computer\n2. Fetch to find out if there have been any changes on Github\n3. Pull the changes that have happened from Github recently\n4. Change the "ReadMe.md" file to also include the city they live in\n5. Commit the change they have made\n6. Push the change to Github\n')),(0,i.kt)("p",null,"Each person in the group should try this"),(0,i.kt)("h2",{id:"what-about-working-in-teams"},"What about working in Teams?"),(0,i.kt)("p",null,"Github also makes it really easy to work in teams."),(0,i.kt)("p",null,"One way that we could work in a team is by making a list of our favorite things."),(0,i.kt)("p",null,"In your teams you should"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each clone this repository to their computers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CodeYourFuture/GitTeaching"},"https://github.com/CodeYourFuture/GitTeaching")))),(0,i.kt)("li",{parentName:"ol"},"Each team member should take it in turns changing one work in the ReadMe.md file in the project."),(0,i.kt)("li",{parentName:"ol"},"Make a list of your favorite things. This can be food, hobbies or places. It's completely up to you!")),(0,i.kt)("p",null,"Be careful! Don't all add words at the same time!"),(0,i.kt)("h2",{id:"branching"},"Branching"),(0,i.kt)("p",null,"Sometimes it can be useful to work on something for a long time before showing it to everyone. This is why we use branching."),(0,i.kt)("p",null,"The teacher should"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show how you can create a branch in Github Desktop"),(0,i.kt)("li",{parentName:"ol"},"Show how moving between Master and the Branch keeps two versions of the file")),(0,i.kt)("h2",{id:"exercise-2"},"Exercise"),(0,i.kt)("p",null,"All trainees should now"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1. Create a branch called "my-favorite-stuff"\n2. Edit a file to add something that is your favorite\n3. Commit your change to the file\n4. Push your commit and your new branch to Github\n')),(0,i.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,i.kt)("p",null,"Branching is particularly helpful for using in Pull Requests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The teacher should show how to make a Pull Request in Github"),(0,i.kt)("li",{parentName:"ol"},"The teacher should show how to comment on a PR in Github"),(0,i.kt)("li",{parentName:"ol"},"The teacher should show how to merge a pull request in Github")),(0,i.kt)("h3",{id:"exercise-3"},"Exercise"),(0,i.kt)("p",null,"Now the trainees should try this themselves"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Each trainee should go to this repository\n   - https://github.com/CodeYourFuture/GitTeaching\n2. They should open a pull request\n3. Share the link to their pull request in Slack with the rest of the class\n")),(0,i.kt)("h2",{id:"optional-what-is-git"},"(Optional) What is Git?"),(0,i.kt)("p",null,"This is advanced!"),(0,i.kt)("p",null,"The Github Desktop tool is actually built on top of something called Git. Git lives entirely in the command line."),(0,i.kt)("p",null,"The teacher should show"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to clone a repository"),(0,i.kt)("li",{parentName:"ul"},"How to make a commit"),(0,i.kt)("li",{parentName:"ul"},"How to how to push to the repository")),(0,i.kt)("p",null,"This is only to show trainees how it's done! We'll be doing more of this in the future."),(0,i.kt)("h2",{id:"quiz"},"Quiz"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What is a repository?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A repository is like a"))),(0,i.kt)("li",{parentName:"ol"},"What is Github?"),(0,i.kt)("li",{parentName:"ol"},"What is git?")))}u.isMDXComponent=!0}}]);