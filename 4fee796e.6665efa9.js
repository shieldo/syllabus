(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(252)),l=n(253),i={id:"lesson",title:"Database 2-  More SQL and integration with NodeJS",sidebar_label:"Lesson"},b={unversionedId:"db/week-2/lesson",id:"db/week-2/lesson",isDocsHomePage:!1,title:"Database 2-  More SQL and integration with NodeJS",description:"What will we learn today?",source:"@site/docs/db/week-2/lesson.md",slug:"/db/week-2/lesson",permalink:"/db/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/db/week-2/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"SQL",previous:{title:"Coursework",permalink:"/db/week-1/homework"},next:{title:"Instructor Notes",permalink:"/db/week-2/instructors"}},c=[{value:"What will we learn today?",id:"what-will-we-learn-today",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"More SQL",id:"more-sql",children:[{value:"Changing the definition of a table",id:"changing-the-definition-of-a-table",children:[]},{value:"Dropping a table",id:"dropping-a-table",children:[]},{value:"Updating a row",id:"updating-a-row",children:[]},{value:"Deleting a row",id:"deleting-a-row",children:[]},{value:"Joining tables",id:"joining-tables",children:[]},{value:"Other useful operations",id:"other-useful-operations",children:[]}]},{value:"Integration with NodeJS",id:"integration-with-nodejs",children:[{value:"Introduction to node-postgres",id:"introduction-to-node-postgres",children:[]},{value:"Loading data from a database with a GET endpoint",id:"loading-data-from-a-database-with-a-get-endpoint",children:[]}]},{value:"Coursework",id:"coursework",children:[]},{value:"Feedback",id:"feedback",children:[]}],s={toc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-will-we-learn-today"},"What will we learn today?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Revision from last week"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#more-sql"}),"More SQL"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Changing the definition of a table"),Object(r.b)("li",{parentName:"ul"},"Dropping a table"),Object(r.b)("li",{parentName:"ul"},"Updating a row"),Object(r.b)("li",{parentName:"ul"},"Deleting a row"),Object(r.b)("li",{parentName:"ul"},"Join tables"),Object(r.b)("li",{parentName:"ul"},"Other useful operations"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#integration-with-nodejs"}),"Integration with NodeJS"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Introduction to node-postgres"),Object(r.b)("li",{parentName:"ul"},"Loading data from a database with a GET endpoint"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#coursework"}),"Coursework"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add and remove columns in a pre-existing table using PostgreSQL using ",Object(r.b)("inlineCode",{parentName:"li"},"ALTER")),Object(r.b)("li",{parentName:"ul"},"Rename tables and columns in a pre-existing table using PostgreSQL using ",Object(r.b)("inlineCode",{parentName:"li"},"DELETE")),Object(r.b)("li",{parentName:"ul"},"Update rows in a pre-existing table using PostgreSQL using ",Object(r.b)("inlineCode",{parentName:"li"},"UPDATE")),Object(r.b)("li",{parentName:"ul"},"Combine tables together using PostgreSQL using ",Object(r.b)("inlineCode",{parentName:"li"},"INNER JOIN")),Object(r.b)("li",{parentName:"ul"},"Connect a PostgreSQL database to a NodeJS application"),Object(r.b)("li",{parentName:"ul"},"Retrieve data from a PostgreSQL database in a NodeJS application")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"more-sql"},"More SQL"),Object(r.b)("p",null,"For the following, use the file ",Object(r.b)("a",{target:"_blank",href:n(270).default},Object(r.b)("code",null,"cyf_hotels_exercise5.sql"))," from the previous class to reinitialise your database with ",Object(r.b)("inlineCode",{parentName:"p"},"psql -d cyf_hotels -f cyf_hotels_exercise5.sql"),"."),Object(r.b)("h3",{id:"changing-the-definition-of-a-table"},"Changing the definition of a table"),Object(r.b)("p",null,"Sometimes, you may need to change the definition of a table you created before without deleting it. Such changes include renaming a table, adding/removing a column, changing the name of a column, changing the type of a column etc... The general syntax to perform these operations is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE table_name action;\n")),Object(r.b)("p",null,"For example, to add a new column to the existing ",Object(r.b)("inlineCode",{parentName:"p"},"customers")," table:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE customers ADD COLUMN date_of_birth DATE;\n")),Object(r.b)("p",null,"To delete an existing column from the ",Object(r.b)("inlineCode",{parentName:"p"},"customers")," table:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE customers DROP COLUMN date_of_birth;\n")),Object(r.b)("p",null,"To rename the table ",Object(r.b)("inlineCode",{parentName:"p"},"customers")," into ",Object(r.b)("inlineCode",{parentName:"p"},"clients"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE customers RENAME TO clients;\n")),Object(r.b)("p",null,"For more examples, you can consult the following tutorial: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.postgresqltutorial.com/postgresql-alter-table/"}),"Postgres alter table"),"."),Object(r.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a column ",Object(r.b)("inlineCode",{parentName:"li"},"date_of_birth")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"DATE")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"customers")," table."),Object(r.b)("li",{parentName:"ul"},"Rename the column ",Object(r.b)("inlineCode",{parentName:"li"},"date_of_birth")," to ",Object(r.b)("inlineCode",{parentName:"li"},"birthdate")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"customers")," table."),Object(r.b)("li",{parentName:"ul"},"Delete the column ",Object(r.b)("inlineCode",{parentName:"li"},"birthdate")," from the ",Object(r.b)("inlineCode",{parentName:"li"},"customers")," table")),Object(r.b)("h3",{id:"dropping-a-table"},"Dropping a table"),Object(r.b)("p",null,"To delete the table ",Object(r.b)("inlineCode",{parentName:"p"},"customers"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DROP TABLE customers;\n")),Object(r.b)("h4",{id:"exercise-2"},"Exercise 2:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new table ",Object(r.b)("inlineCode",{parentName:"li"},"test")),Object(r.b)("li",{parentName:"ul"},"Drop the table ",Object(r.b)("inlineCode",{parentName:"li"},"test"))),Object(r.b)("h3",{id:"updating-a-row"},"Updating a row"),Object(r.b)("p",null,"The general construction to update a row is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"UPDATE table SET column1 = value1, column2 = value2 WHERE condition;\n")),Object(r.b)("p",null,"For example, to update the name and country of the customers with ID 3:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"UPDATE customers SET name='Bob Marley', country='Jamaica' WHERE id=3;\n")),Object(r.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Update the postcode of the hotel named ",Object(r.b)("inlineCode",{parentName:"li"},"Elder Lake Hotel")," to ",Object(r.b)("inlineCode",{parentName:"li"},"L10XYZ")),Object(r.b)("li",{parentName:"ul"},"Update the number of rooms of ",Object(r.b)("inlineCode",{parentName:"li"},"Cozy Hotel")," to ",Object(r.b)("inlineCode",{parentName:"li"},"25")),Object(r.b)("li",{parentName:"ul"},"For the customer named ",Object(r.b)("inlineCode",{parentName:"li"},"Nadia Sethuraman"),", update her address to ",Object(r.b)("inlineCode",{parentName:"li"},"2 Blue Street"),", her city to ",Object(r.b)("inlineCode",{parentName:"li"},"Glasgow")," and her postcode to ",Object(r.b)("inlineCode",{parentName:"li"},"G11ABC")," in one query"),Object(r.b)("li",{parentName:"ul"},"Update all the bookings of customer with ID ",Object(r.b)("inlineCode",{parentName:"li"},"1")," for the hotel with ID ",Object(r.b)("inlineCode",{parentName:"li"},"1")," to ",Object(r.b)("inlineCode",{parentName:"li"},"5")," nights in one query")),Object(r.b)("h3",{id:"deleting-a-row"},"Deleting a row"),Object(r.b)("p",null,"The syntax to delete a row is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DELETE FROM table WHERE condition;\n")),Object(r.b)("p",null,"For example, to delete the booking with ID 4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DELETE FROM bookings WHERE id=4;\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," If you don't supply a ",Object(r.b)("inlineCode",{parentName:"p"},"WHERE")," clause with ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," or ",Object(r.b)("inlineCode",{parentName:"p"},"UPDATE")," the command will be applied to ",Object(r.b)("strong",{parentName:"p"},"all")," the rows in the table which is rarely what you want."),Object(r.b)("h4",{id:"exercise-4"},"Exercise 4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Delete the booking of customer ID ",Object(r.b)("inlineCode",{parentName:"li"},"8")," for the date ",Object(r.b)("inlineCode",{parentName:"li"},"2020-01-03")),Object(r.b)("li",{parentName:"ul"},"Delete all the bookings of customer ID ",Object(r.b)("inlineCode",{parentName:"li"},"6")),Object(r.b)("li",{parentName:"ul"},"Delete the customer with ID ",Object(r.b)("inlineCode",{parentName:"li"},"6"))),Object(r.b)("h3",{id:"joining-tables"},"Joining tables"),Object(r.b)("p",null,"Sometimes, you will need to retrieve data which are spread in different tables in a single response. For this purpose, you will need to join tables together. The general syntax is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT A.column1, B.column2 FROM A INNER JOIN B ON A.b_id=B.id;\n")),Object(r.b)("p",null,"For example, to load all the bookings along with customer data:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM customers INNER JOIN bookings ON customers.id=bookings.customer_id;\n")),Object(r.b)("p",null,"To load all the bookings along with customer data and hotel data:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM bookings\nINNER JOIN customers ON customers.id=bookings.customer_id\nINNER JOIN hotels ON hotels.id=bookings.hotel_id;\n")),Object(r.b)("p",null,"To load the booking checkin dates for customer ID ",Object(r.b)("inlineCode",{parentName:"p"},"1")," along with the customer name and the hotel name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT bookings.checkin_date,customers.name,hotels.name FROM bookings\nINNER JOIN customers ON customers.id=bookings.customer_id\nINNER JOIN hotels ON hotels.id=bookings.hotel_id\nWHERE customers.id=1;\n")),Object(r.b)("h4",{id:"exercise-5"},"Exercise 5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Try and understand each of the queries above in your ",Object(r.b)("inlineCode",{parentName:"li"},"psql")," prompt"),Object(r.b)("li",{parentName:"ul"},"Retrieve all the bookings along with customer data for bookings starting in 2020"),Object(r.b)("li",{parentName:"ul"},"Retrieve the customer names, booking start dates and number of nights for all customers who booked the hotel name ",Object(r.b)("inlineCode",{parentName:"li"},"Jade Peaks Hotel")),Object(r.b)("li",{parentName:"ul"},"Retrieve all the booking start dates with customer names and hotel names for all bookings for more than 5 nights")),Object(r.b)("h3",{id:"other-useful-operations"},"Other useful operations"),Object(r.b)("p",null,"Ordering the result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM table ORDER BY column;\n")),Object(r.b)("p",null,'This will sort the returned rows in the ascending order for "column". To sort them in descending order, use:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM table ORDER BY column DESC;\n")),Object(r.b)("p",null,"Limiting the number of results returned:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM table LIMIT 10;\n")),Object(r.b)("p",null,"Returning all customers whose ID is 1, 2, 3 or 4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM customers WHERE id IN (1,2,3,4);\n")),Object(r.b)("p",null,"Query by pattern matching, for example retrieve all customers whose name starts with Bob:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM customers WHERE name LIKE 'Bob%';\n")),Object(r.b)("p",null,"You can combine different operations together, for example, if you want to retrieve all the booking start dates with the customer names and hotel names for customer names starting with the letter ",Object(r.b)("inlineCode",{parentName:"p"},"M")," ordered by hotel name with a limit of 3 results:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT bookings.checkin_date,customers.name,hotels.name FROM bookings\nINNER JOIN customers ON customers.id=bookings.customer_id\nINNER JOIN hotels ON hotels.id=bookings.hotel_id\nWHERE customers.name LIKE 'M%'\nORDER BY hotels.name\nLIMIT 3;\n")),Object(r.b)("h4",{id:"exercise-6"},"Exercise 6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Retrieve all customers whose name starts with the letter ",Object(r.b)("inlineCode",{parentName:"li"},"S")),Object(r.b)("li",{parentName:"ul"},"Retrieve all hotels which have the word ",Object(r.b)("inlineCode",{parentName:"li"},"Hotel")," in their name"),Object(r.b)("li",{parentName:"ul"},"Retrieve the booking start date, customer name, hotel name for the top 5 bookings ordered by number of nights in descending order")),Object(r.b)("h2",{id:"integration-with-nodejs"},"Integration with NodeJS"),Object(r.b)("h3",{id:"introduction-to-node-postgres"},"Introduction to node-postgres"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'"node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database."')," - ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://node-postgres.com/"}),"https://node-postgres.com/")),Object(r.b)("p",null,"In the following, we will use ",Object(r.b)("em",{parentName:"p"},"node-postgres")," to..."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect to a database"),Object(r.b)("li",{parentName:"ol"},"Send SQL query to the database and get results")),Object(r.b)("h3",{id:"loading-data-from-a-database-with-a-get-endpoint"},"Loading data from a database with a GET endpoint"),Object(r.b)("p",null,"Let's build a brand new NodeJS application with a single GET endpoint to load the list of hotels that you already have in the ",Object(r.b)("inlineCode",{parentName:"p"},"hotels")," table of the ",Object(r.b)("inlineCode",{parentName:"p"},"cyf_hotels")," database."),Object(r.b)("p",null,"First, create a new NodeJS application that we will call ",Object(r.b)("strong",{parentName:"p"},"cyf-hotels-api")," (enter ",Object(r.b)("inlineCode",{parentName:"p"},"server.js")," when asking about the entry point):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir cyf-hotels-api && cd cyf-hotels-api && npm init\n")),Object(r.b)("p",null,"As before, we will use the Express library to build our API, and the node-postgres library to connect with our database:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save express\nnpm install --save pg\n")),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"server.js")," file, import express, initialise the server and start listening for requests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'const express = require("express");\nconst app = express();\n\napp.listen(3000, function() {\n    console.log("Server is listening on port 3000. Ready to accept requests!");\n});\n')),Object(r.b)("p",null,"Import pg library and create a new GET endpoint to load the list of hotels:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const { Pool } = require('pg');\n\nconst pool = new Pool({\n    user: 'postgres',\n    host: 'localhost',\n    database: 'cyf_hotels',\n    password: '',\n    port: 5432\n});\n\napp.get(\"/hotels\", function(req, res) {\n    pool.query('SELECT * FROM hotels', (error, result) => {\n        res.json(result.rows);\n    });\n});\n")),Object(r.b)("p",null,"In the code above:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We first import the ",Object(r.b)("inlineCode",{parentName:"li"},"Pool")," class from the pg library, which is used to connect to a database"),Object(r.b)("li",{parentName:"ul"},"We create a new pool where we specify the credentials to connect to the cyf_hotels database"),Object(r.b)("li",{parentName:"ul"},"We then create a new /hotels endpoint where we use the method ",Object(r.b)("inlineCode",{parentName:"li"},"query()")," to send a SQL query to load all the hotels from the table ",Object(r.b)("inlineCode",{parentName:"li"},"hotels")," and return the results with ",Object(r.b)("inlineCode",{parentName:"li"},"result.rows"),". You can write any valid SQL query that you learned in the ",Object(r.b)("inlineCode",{parentName:"li"},"query()")," method!")),Object(r.b)("p",null,"Start your server with ",Object(r.b)("inlineCode",{parentName:"p"},"node server.js")," and try to reach the ",Object(r.b)("inlineCode",{parentName:"p"},"/hotels")," endpoint to see the list of hotels currently available in your ",Object(r.b)("inlineCode",{parentName:"p"},"hotels")," table of your ",Object(r.b)("inlineCode",{parentName:"p"},"cyf_hotels")," database. You can try to create/update/delete hotels to verify that your API always returns what is stored in your database."),Object(r.b)("h2",{id:"coursework"},"Coursework"),Object(r.b)("p",null,"All of the coursework for this week can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here"),"."),Object(r.b)("h2",{id:"feedback"},"Feedback"),Object(r.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),Object(r.b)(l.a,{module:"SQL",week:"Week 2",mdxType:"Feedback"}))}p.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);n(56);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return o.a.createElement("div",{className:"feedback"},o.a.createElement("div",{className:"feedback__wrapper"},o.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),o.a.createElement("center",null,o.a.createElement("p",null,"Not loading? Form can be found"," ",o.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/cyf_hotels_exercise5-88cc17362572ef85a70785dc2ceb21e9.sql"}}]);