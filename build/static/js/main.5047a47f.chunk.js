(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"GIR Pup",image:"https://vignette.wikia.nocookie.net/zimwiki/images/6/64/GIR_and_Monkey_1.jpg/revision/latest/scale-to-width-down/200?cb=20110211180702",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Gir",image:"https://vignette.wikia.nocookie.net/zimwiki/images/0/00/Gir.png/revision/latest/scale-to-width-down/160?cb=20130712225209",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Skoodge",image:"https://vignette.wikia.nocookie.net/zimwiki/images/c/cf/Invader_Skoodge_full_body.png/revision/latest/scale-to-width-down/250?cb=20130704195844",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dib",image:"https://vignette.wikia.nocookie.net/zimwiki/images/f/fc/Dib_by_rondex.png/revision/latest/scale-to-width-down/260?cb=20160412202139",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"MoreGir",image:"https://12books12monthsdotcom.files.wordpress.com/2011/11/gir_salute.png?w=736"},{id:6,name:"GIR",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIMVziS6fEt3x2wA39GleS0hx_a16zAom3eg4--93Ud0MIwgl7w",occupation:"Student",location:"Bluffington"},{id:7,name:"Gaz",image:"https://vignette.wikia.nocookie.net/zimwiki/images/1/16/Gaz_artwork_full.png/revision/latest/scale-to-width-down/241?cb=20121202182454",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"gir",image:"http://archer.gamebanana.com/img/ico/sprays/gir_sitting.png"},{id:10,name:"Invader Zim",image:"https://vignette.wikia.nocookie.net/zimwiki/images/e/ea/ProfMemTrans.png/revision/latest/scale-to-width-down/150?cb=20170227022859",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"MiniMoose",image:"https://vignette.wikia.nocookie.net/zimwiki/images/0/00/Minimoose.transparent.png/revision/latest/scale-to-width-down/250?cb=20161124185541",occupation:"Superhero",location:"Earth"},{id:12,name:"Tak",image:"https://vignette.wikia.nocookie.net/zimwiki/images/c/c4/TakTransparent.png/revision/latest/scale-to-width-down/165?cb=20170415035525",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"},{id:9,name:"ZIM",image:"https://vignette.wikia.nocookie.net/zimwiki/images/7/72/Art_Zimyelling.png/revision/latest/scale-to-width-down/187?cb=20120814185817",occupation:"Destroyer of Worlds",location:"Earth"}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(2),s=a.n(o),c=a(3),r=a(4),l=a(7),m=a(5),g=a(8);a(15);var u=function(e){var t={backgroundImage:"url("+e.image+")"};return n.a.createElement("div",{role:"img",className:"cusCard",onClick:function(){return e.checkGuess(e.id)},style:t})};a(16);var d=function(e){return n.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron jumbotron-fluid"},n.a.createElement("h2",{class:e.classState,id:"gameStatus"}," ",e.message))},h=a(6);a(17);function p(e){var t=e.children;return n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{class:"navbar-brand",href:"/"},"Clicky Game"),n.a.createElement("ul",{class:"navbar-nav ml-auto"},t))}a(18),a(19),a(20);function w(e){var t=e.children;return n.a.createElement("div",{class:"container"},t)}var k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={clickedCards:[],images:h,imageIds:[],bestScore:0,currentScore:0,gameMessage:"Click an image to begin",gameMessageClass:""},a.shuffleMe=function(e){return e.sort(function(e,t){return.5-Math.random()}),e},a.checkGuess=function(e){var t=a.state.clickedCards,i=a.state.bestScore,n=a.state.currentScore,o=a.state.images;if(++n>i&&(i=n),t.indexOf(e)>-1)a.gameOver();else if(i==o.length)a.youWin();else{t.push(e);var s=a.shuffleMe(a.state.images);a.setState({gameMessageClass:"correct",bestScore:i,currentScore:n,clickedCards:t,images:s,gameMessage:"Correct! Keep going but don't pick an image you've already picked!"})}},a.gameOver=function(){var e=a.shuffleMe(a.state.images);a.setState({gameMessageClass:"wrong",currentScore:0,clickedCards:[],images:e,gameMessage:"Aww you lost. Game Over! Keep going until you get all 12, unless you're a chicken"})},a.youWin=function(){var e=a.shuffleMe(a.state.images);a.setState({currentScore:0,clickedCards:[],images:e,gameMessage:"Good job you won. Now can you do it again without cheating?"})},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.shuffleMe(this.state.images);this.setState({images:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,null,n.a.createElement("li",{className:"ml-auto"},"Current Score: ",this.state.currentScore," | Best Score: ",this.state.bestScore," ")),n.a.createElement(d,{message:this.state.gameMessage,classState:this.state.gameMessageClass}),n.a.createElement(w,null,this.state.images.map(function(t){return n.a.createElement("div",{class:"animate fadeInLeft"},n.a.createElement(u,{checkGuess:e.checkGuess,id:t.id,key:t.id,name:t.name,image:t.image}))})))}}]),t}(i.Component);var f=function(){return n.a.createElement("div",null,n.a.createElement(k,null))};s.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5047a47f.chunk.js.map