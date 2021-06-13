(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{19:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(13),r=s.n(n),c=(s(19),s(20),s(21),s(22),s(23),s(5)),o=s(2),l=(s(24),s(0));function d(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(l.jsx)("div",{className:"navbar-brand",children:Object(l.jsxs)("span",{role:"button",id:"navbar-burger",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:function(){return function(e){var t=document.getElementById(e);if(null!==t){t.classList.toggle("is-active");var s=t.dataset.target;if(void 0!==s){var a=document.getElementById(s);null!==a&&(a.classList.toggle("is-active"),a.classList.toggle("absolute"),a.classList.toggle("z-50"))}}}("navbar-burger")},children:[Object(l.jsx)("span",{"aria-hidden":"true"}),Object(l.jsx)("span",{"aria-hidden":"true"}),Object(l.jsx)("span",{"aria-hidden":"true"})]})}),Object(l.jsx)("div",{id:"navbar-menu",className:"navbar-menu",children:Object(l.jsxs)("div",{className:"navbar-start",children:[Object(l.jsx)(c.b,{className:"navbar-item",to:"/",children:"Home"}),Object(l.jsx)(c.b,{className:"navbar-item",to:"/resume",children:"Resume"}),Object(l.jsx)(c.b,{className:"navbar-item",to:"/projects",children:"Projects"})]})})]})})}var h=function(){return Object(l.jsx)("div",{className:"Home container is-fluid",children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column"}),Object(l.jsxs)("div",{className:"column is-three-fifths",children:[Object(l.jsx)("h3",{children:"Hi, I'm Allen."}),Object(l.jsx)("p",{children:"I'm interested in many things, but am currently most into automation, microservices, manga, video games, and dance."})]}),Object(l.jsx)("div",{className:"column"})]})})},u=function(){return Object(l.jsx)("div",{className:"Resume container is-fluid",children:Object(l.jsx)("object",{data:"".concat("","/pdf/AllenJ_Huang_Resume.pdf"),type:"application/pdf",style:{width:"100%",height:"calc(100vh - 92px)"},children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column"}),Object(l.jsx)("div",{className:"column is-three-fifths",children:Object(l.jsx)("a",{href:"".concat("","/pdf/AllenJ_Huang_Resume.pdf"),children:"AllenJ_Huang_Resume.pdf"})}),Object(l.jsx)("div",{className:"column"})]})})})},j=(s(31),s(32),function(e){var t;return null!==e.href&&(t=Object(l.jsxs)(l.Fragment,{children:["- ",Object(l.jsx)("a",{href:e.href,children:"link"})]})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("dt",{children:[Object(l.jsx)("strong",{children:e.title})," ",t]}),Object(l.jsxs)("dd",{children:[Object(l.jsx)("span",{children:"Objective:"})," ",e.description.objective]}),Object(l.jsxs)("dd",{children:[Object(l.jsx)("span",{children:"Details:"})," ",e.description.details]}),Object(l.jsxs)("dd",{children:[Object(l.jsx)("span",{children:"Tech:"})," ",e.description.technologies]}),Object(l.jsxs)("dd",{children:[Object(l.jsx)("span",{children:"Contributors:"})," ",e.description.contributors]}),Object(l.jsxs)("dd",{children:[Object(l.jsx)("span",{children:"Year:"})," ",e.description.startDate.getFullYear()]})]})}),m=[{title:"Wiki Quiz",href:"https://wikiquiz.vercel.app/",description:{objective:"Generate a short quiz from a wiki URL.",details:"Implemented as a Jamstack website and several separately hosted microservices. The app first takes the input URL and requests scraped and transformed data from a service. Using the data, it then retrieves the most important phrases found, masks the most important phrases, and retrieves suggestions for the masks which would be used as alternative multiple choice answers. After all responses from the services have been received, the app proceeds to display the generated quiz. Created for a class project that required the use of Wikipedia and microservices.",technologies:"Crystal, JavaScript, Svelte, Python, pytextrank, fastText, BERT, FastAPI, Redis, Terraform, Docker, Heroku",contributors:"Allen J Huang",startDate:new Date("2021-04-27")}},{title:"Portfolio Viz",href:"https://kzhao32.github.io/portfolio-viz/",description:{objective:"Create a stock map from csv text to help quickly visualize changes in portfolio worth.",details:"Implemented as a Jamstack website with a microservice for data retrieval. The app first takes csv text input by file or text and retrieves corresponding market price data from a service. Using the data, it then draws the assets onto a web canvas as individual color-coded rectangles.",technologies:"JavaScript, Python, Google Cloud Functions",contributors:"Tommy Zhao, Allen J Huang",startDate:new Date("2021-04-10")}},{title:"CARboncycle",href:"https://carboncycle.herokuapp.com/carboncycle/",description:{objective:"Estimate CO2 emissions based on a typical work week's commute.",details:"Implemented as a Panel web app calling Google Maps API to get distances and approximate traffic wait times. Supports several different unit systems through the use of the pint library. Created as a submission for ClimateHacks.",technologies:"Python, Panel, Google Maps API",contributors:"Andrew Huang, Allen J Huang",startDate:new Date("2021-04-25")}},{title:"Just Get Me By",href:null,description:{objective:"Gathers coursework and scores from a user's Canvas account and calculates minimum scores needed on upcoming assignments in order to reach a user-specified target grade.",details:"You\u2019re studying hard, absorbing the material, and you are kicking butt on the assignments. However, rumors are flying that the upcoming final is known to ruin grades, and along with your other responsibilities it just may not be feasible to dedicate the effort you usually do give in order to get the grade you want. This is where Just Get Me By comes in. This is a streamlined desktop app that gathers your coursework, assignments, scores, and grades from your Canvas class(es) and tells you the minimum target scores needed on upcoming assignments in order to get that A. Created as an entry to BeaverHacks.",technologies:"Python, Canvas REST API, PySimpleGUI",contributors:"Rohit Chaudhary, Michael Chen, Allen J Huang",startDate:new Date("2020-12-16")}},{title:"Top Reddit Posts",href:null,description:{objective:"Allow the user to view a compilation of posts that made it to the top for select subreddits.",details:"Runs a cron job to scrape data from Reddit using BeautifulSoup and to store data onto a PostgreSQL database. A web app then queries the database and provides a graphical user interface to a paginated compilation of top posts with view count and filter options.",technologies:"Python, PostgreSQL, Google Cloud SQL, Google Compute Engine, Express.js, Nginx",contributors:"Tommy Zhao, Allen J Huang",startDate:new Date("2019-06-24")}}],b=function(){return Object(l.jsx)("div",{className:"Home container is-fluid",children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column"}),Object(l.jsxs)("div",{className:"column is-three-fifths",children:[Object(l.jsx)("h3",{children:"Projects"}),Object(l.jsx)("dl",{children:m.map((function(e){return Object(l.jsx)(j,{title:e.title,href:e.href,description:e.description})}))})]}),Object(l.jsx)("div",{className:"column"})]})})},p=function(){return Object(l.jsx)("div",{className:"NotFound container is-fluid",children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column"}),Object(l.jsxs)("div",{className:"column is-three-fifths",children:[Object(l.jsx)("h3",{children:"Page not found"}),Object(l.jsx)("p",{children:"Sorry, this page does not exist!"}),Object(l.jsx)(c.b,{to:"/",children:"Back to the homepage..."})]}),Object(l.jsx)("div",{className:"column"})]})})};function v(){return Object(l.jsx)(c.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/resume",children:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{path:"/projects",children:Object(l.jsx)(b,{})}),Object(l.jsx)(o.a,{path:"*",children:Object(l.jsx)(p,{})})]})})]})})}r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.eb4bfb85.chunk.js.map