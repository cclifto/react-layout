//   <div class="container">
//   <div class="colOne">
//     <p><h4><b>THE IRON YARD | HOUSTON</b></h4>
//     <p>Happenings and updates from The <br>Iron Yard in Houston, TX</p>
//     <br>
//     <h3>SEARCH</h3>
//     <div class="search">
// 	<p>Search Keywords</p>
// 	</div>
//   </div>
 
//     <div class="colTwo">
//     <h1><p><b>September 22 Starts a New Class of The Iron Yard Houston Students</b></h1><i>By Brian Dorton, Campus Director at <a href="theironyard.com"> The Iron Yard</a> Houston</i><br><br>
// <div class="classroom">
// <img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg">
// </div>
// <br><br><p>Unicorn experiential human-centered design entrepreneur latte agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000</p>
//   </div>
 
//   <div class="colThree">
// <div class="boxContent">
// <p><b>Never miss a post!</b></p>
// </div>
//     <div class="hr"><hr />
//     </div>
// <div class="boxPic">
// <p><img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png">
//   <b>tiyhouston</b>The Iron Yard | Houston</p>
// </div>
// <div class="follow">
//   <p><b>+ Follow</b></p>
// </div>
// </div>

//   </div>
  
//   </div>
// </body>









import React from 'react'
import ReactDOM from 'react-dom'

var app = function() {



var HomePage = React.createClass({
		render: function(){
			return(
				<div className="headerContainer">
					<Header />
					<ImageContainer />
				</div>
				)
		}
	})

var Header = React.createClass({
		render: function(){
			return(
				<div className="header">
					<ImageContainer />
				</div>
				)
		}
	})

var ImageContainer = React.createClass({
	render: function(){
		return (
			<div className="theImg">
			    <img src="http://magentanova.github.io/html-intro-1/images/houston.jpg">
			</div>
			)
	}
})

var Containers = React.createClass({
		render: function(){
			return(
				<div className="colOne">
					<p>THE IRON YARD | HOUSTON</p>
					<p>Happenings and updates from The Iron Yard in Houston, TX</p>
					<h3>SEARCH</h3>
					<SearchBar />
				</div>
				)
		}
	})





	// var HomePage = React.createClass({
		// render: function(){
	// 		return(
	// 			<div className="spookyContainer">
	// 				<Header />
	// 				<ImageContainer />
	// 			</div>
	// 			)
	// 	}
	// })

	// var Header = React. createClass({
	// 	render: function(){
	// 		return(
	// 			<div className="header">
	// 				<h1>HAPPY HALLOWEEN</h1>
	// 				<NavBar />
	// 			</div>
	// 			)
	// 	}
	// })

	// var NavBar = React.createClass({
	// 	render: function(){
	// 		return (
	// 			<div className="nav">
	// 				<a href="#contact">contact pus</a>
	// 				<a href="#about">aBOOOOOOOt us</a>
	// 				<a href="#home">home</a>
	// 			</div>
	// 			)
	// 	}
	// })

	// var ImageContainer = React.createClass({
	// 	render: function(){
	// 		return (
	// 			<div className="theImg">
	// 				<img src="http://www.cave-evil.com/crypt/sites/default/files/imagecache/game-art_500w/gore-gatherer_final_flat.jpg" />
	// 				<p>This is all kinds of spooky dooky</p>
	// 			</div>
	// 			)
	// 	}
	// })

	ReactDOM.render(<HomePage />, document.querySelector('.container'))
}


app()