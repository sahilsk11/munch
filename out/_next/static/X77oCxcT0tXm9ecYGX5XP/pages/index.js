(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RNiq:function(e,t,i){"use strict";i.r(t);var n=i("MX0m"),o=i.n(n),a=i("8Kt/"),r=i.n(a),l=i("q1tI"),d=i.n(l).a.createElement;function p(e){var t={tile:{minWidth:"80px",minHeight:"80px",maxWidth:"80px",maxHeight:"80px",backgroundColor:"white",marginRight:"20px",marginBottom:"20px",borderRadius:"10px",boxShadow:"0px 4px 5px rgba(75, 93, 104, 0.25)",cursor:"pointer"},icon:{margin:"0px auto",display:"block",height:"40px",paddingTop:"10px"},title:{textAlign:"center",fontFamily:"Avenir",fontWeight:"600",color:"black",marginTop:"7px"}};return d("div",{style:t.tile,onClick:function(){window.location="search?discover="+e.title.toLowerCase()}},d("img",{src:"./images/"+e.title.toLowerCase()+".png",style:t.icon}),d("p",{style:t.title},e.title))}function s(e){var t={container:{boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)",width:"130px",height:"130px",cursor:"pointer",margin:"15px",borderRadius:"15px",position:"relative"},clickedContainer:{boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)",width:"130px",height:"130px",cursor:"pointer",margin:"15px",borderRadius:"15px",position:"relative",border:"2px solid purple"},title:{textAlign:"center",fontFamily:"Avenir"},img:{width:"40px",margin:"0px auto",display:"block",marginTop:"30px"}},i=e.selectedIndex==e.index?t.clickedContainer:t.container;return d("div",{style:i,onClick:function(){e.updateSelected(e.index),e.updateCategory(e.index)}},d("img",{src:e.img,style:t.img}),d("h5",{style:t.title},e.title))}function x(e){var t={container:{boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)",width:"120px",height:"35px",cursor:"pointer",margin:"15px",borderRadius:"15px",position:"relative"},clickedContainer:{boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)",width:"120px",height:"35px",cursor:"pointer",margin:"15px",borderRadius:"15px",position:"relative",border:"2px solid purple"},title:{textAlign:"center",fontSize:"13px",fontFamily:"Avenir",marginTop:"10px"},img:{width:"40px",margin:"0px auto",display:"block",marginTop:"30px"}},i=e.selectedIndex==e.index?t.clickedContainer:t.container;return d("div",{style:i,onClick:function(){e.updateSelected(e.index),e.updateCategoryB(e.index)}},d("p",{style:t.title},e.title))}t.default=function(){var e=Object(l.useState)(!1),t=e[0],i=e[1],n={pageContent:{width:"80%",margin:"0px auto",display:"block",maxWidth:"1000px"}};return d("div",{className:"jsx-2548833491"},d(r.a,null,d("title",{className:"jsx-2548833491"},"Munch")),d("div",{style:n.backgroundStyle,className:"jsx-2548833491"},d("div",{style:n.pageContent,className:"jsx-2548833491"},function(){var e={wrapperStyle:{width:"100%",height:"100px"},navImg:{width:"80px",paddingTop:"20px"}};return d("div",{style:e.wrapperStyle},d("img",{src:"./images/navImg.png",style:e.navImg}))}(),function(e){var t={containerWrapper:{marginTop:"60px",display:"flex"},textWrapper:{width:"60%"},imgWrapper:{width:"40%"},landingImg:{width:"100%",margin:"0px auto",display:"block",marginTop:"30px"},title:{color:"#212353",marginBottom:"0px",paddingBottom:"0px",fontSize:"60px"},secondaryTitle:{marginTop:"0px",marginBottom:"0px",color:"#212353",fontWeight:"400",fontSize:"40px"},subtitle:{fontWeight:"500",fontFamily:"Avenir",fontSize:"17px",color:"#767777",marginTop:"15px"}};return d("div",null,d("div",{style:t.containerWrapper},d("div",{style:t.textWrapper},d("h1",{style:t.title},"Discover"),d("h1",{style:t.secondaryTitle},"the perfect place to eat"),d("h5",{style:t.subtitle},"Curated restaurant picks personalized for you."),function(e){var t={formStyle:{width:"355px",display:"flex"},searchStyle:{borderRadius:"40px",border:"1px solid #F0F0F0",width:"100%",marginRight:"10px",height:"40px",outline:"none",paddingLeft:"20px",fontWeight:"500",fontFamily:"Avenir",fontSize:"14px",color:"black"},munchButtonStyle:{border:"none",backgroundColor:"#9C69E2",color:"white",borderRadius:"40px",width:"150px",height:"40px",fontFamily:"Avenir",fontSize:"14px",outline:"none",cursor:"pointer",boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)"},infoButtonStyle:{border:"none",backgroundColor:"white",color:"black",borderRadius:"40px",width:"150px",height:"40px",fontFamily:"Avenir",fontSize:"14px",outline:"none",cursor:"pointer",marginLeft:"20px",boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)"}};return d("div",{style:t.formStyle},d("button",{onClick:function(){return e.updateSurvey(!0)},style:t.munchButtonStyle},"Search!"),d("button",{style:t.infoButtonStyle},"What's Munch?"))}({updateSurvey:e.updateSurvey})),d("div",{style:t.imgWrapper},d("img",{src:"./images/landing-img.svg",style:t.landingImg}))),function(){var e=[];["Burgers","Drinks","Desserts","Pizza","Chinese"].forEach((function(t){e.push(p({title:t}))}));var t={containerStyle:{marginTop:"50px"},categoriesWrapper:{maxWidth:"700px",width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"stretch"},subtitle:{fontWeight:"500",fontFamily:"Avenir",fontSize:"18px",color:"#767777",marginBottom:"20px"}};return d("div",{style:t.containerStyle},d("h5",{style:t.subtitle},"Or browse what's trending in your city"),d("div",{style:t.categoriesWrapper},e,p({title:"More"})))}())}({updateSurvey:i}))),function(e){var t,i={container:{position:"fixed",zIndex:"1",paddingTop:"100px",left:"0",top:"0",width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgba(229, 229, 229, 0.4)"},modalContent:{backgroundColor:"#fefefe",margin:"auto",border:"1px solid white",width:"80%",maxWidth:"700px",position:"relative",paddingBottom:"40px",paddingTop:"3%",borderRadius:"17px",boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)"},infoButton:{},closeButton:{marginTop:"20px",fontSize:"14px",fontFamily:"Avenir",fontWeight:"400",position:"absolute",right:"10px",top:"5px",cursor:"pointer"},screenContent:{},surveyNumber:{},title:{fontFamily:"Avenir",textAlign:"center",fontSize:"20px",marginBottom:"0px"},surveyOptions:{margin:"0px auto",display:"flex",justifyContent:"center",flexWrap:"wrap",width:"80%",marginTop:"0px"},button:{backgroundColor:"#9C69E2",borderRadius:"20px",width:"120px",height:"40px",color:"white",fontFamily:"Avenir",fontSize:"15px",display:"block",margin:"0px auto",marginTop:"20px",cursor:"pointer",outline:"none",boxShadow:"0px 4px 20px rgba(75, 93, 104, 0.25)"}},n=Object(l.useState)(null),o=n[0],a=n[1],r=Object(l.useState)(null),p=r[0],u=r[1],g=Object(l.useState)(null),c=g[0],m=g[1],y=Object(l.useState)(null),h=y[0],v=y[1],f=Object(l.useState)(0),b=f[0],S=f[1];if(e.display){switch(b){case 0:t=d("div",null,d("h3",{style:i.title},"What are you looking for?"),d("div",{style:i.screenContent},d("div",{style:i.surveyOptions},s({title:"Quick/on-the-go",img:"./images/go.svg",selectedIndex:o,updateSelected:a,index:0,updateCategory:u}),s({title:"Casual",img:"./images/casual.svg",selectedIndex:o,updateSelected:a,index:1,updateCategory:u}),s({title:"Fine Dining",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:2,updateCategory:u}))));break;case 1:t=d("div",null,d("h3",{style:i.title},"What sounds good?"),d("div",{style:i.screenContent},d("div",{style:i.surveyOptions},x({title:"American",img:"./images/go.svg",selectedIndex:o,updateSelected:a,index:0,updateCategoryB:m}),x({title:"Chinese",img:"./images/casual.svg",selectedIndex:o,updateSelected:a,index:1,updateCategoryB:m}),x({title:"Indian",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:2,updateCategoryB:m}),x({title:"Steak",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:3,updateCategoryB:m}),x({title:"Burgers",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:4,updateCategoryB:m}),x({title:"Pizza",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:5,updateCategoryB:m}),x({title:"Mediterranean",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:6,updateCategoryB:m}),x({title:"Italian",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:7,updateCategoryB:m}),x({title:"Surprise Me",img:"./images/fine.svg",selectedIndex:o,updateSelected:a,index:8,updateCategoryB:m}))));break;case 2:t=d("div",null,d("h3",{style:i.title},"What kind of vibe?"),d("div",{style:i.screenContent},d("div",{style:i.surveyOptions},s({title:"Trendy + Poppin'",img:"./images/trendy.svg",selectedIndex:o,updateSelected:a,index:0,updateCategory:v}),s({title:"Family Friendly",img:"./images/fam.svg",selectedIndex:o,updateSelected:a,index:1,updateCategory:v}),s({title:"Upscale + Fancy",img:"./images/money.svg",selectedIndex:o,updateSelected:a,index:2,updateCategory:v}))))}return d("div",{style:i.container},d("div",{style:i.modalContent},d("div",{style:i.closeButton,onClick:function(){e.updateSurvey(!1),S(0),a(null)}},"close X"),t,d("div",null,d("button",{onClick:function(){console.log("hi"),0==b&&null!=p?(S(1),a(null)):1==b&&null!=c?(S(2),a(null)):2==b&&null!=h&&(window.location.href="search")},style:i.button},"next"))))}return null}({display:t,updateSurvey:i}),d(o.a,{id:"2548833491"},["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;background-color:#F4FAFF;}","*{box-sizing:border-box;}"]))}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",0,2,1,3]]]);