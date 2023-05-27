import React from 'react';

class Moviecard extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'The Avengers End Game',
			plot: 'SuperNatural poers are shown in this Movie',
			price: 199,
			ratings: 8.8,
			stars: 0,
		};
		/* We don't need to bind if we use arrow functions coz arrow functions implicitly binded
		 this.addStars = this.addStars.bind(this); */
	}
	addStars = () => {
		/* setState function gives us the fexibilty to update state 
		 and re-render the component.

		 There are two types of forms in setState function
		 */
		/* Form 01*/
		if (this.state.stars >= 5) {
			return;
		}
		this.setState({
			stars: this.state.stars + 0.5,
		});
		//Form 02

		// this.setState((prevState) => {
		// 	return {
		// 		stars: prevState.stars + 0.5,
		// 	};
		// });

		/* this.state.stars += 0.5;
		console.log('this.state.stars', this.state.stars); */
	};
	decStars = () => {
		if (this.state.stars <= 0) {
			return;
		}
		this.setState({
			stars: this.state.stars - 0.5,
		});
		console.log(this.state.stars);
	};
	render() {
		console.log('Inside render', this.state.stars);
		const { title, plot, price, ratings, stars } = this.state;
		return (
			<div className="main">
				<div className="movie-card">
					<div className="left">
						<img
							src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZlbmdlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
							alt="poster"
						/>
					</div>
					<div className="right">
						<div className="title">{title} </div>
						<div className="plot">{plot}</div>
						<div className="price">Rs.{price}</div>

						<div className="footer">
							<div className="ratings">{ratings}</div>
							<div className="star-dis">
								<img
									className="str-btn"
									src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
									alt="decerase"
									onClick={this.decStars}
								/>
								<img
									className="stars"
									alt="star"
									src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
								/>
								<img
									className="str-btn"
									src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
									alt="increase"
									onClick={this.addStars}
								/>
								<span>{stars}</span>
							</div>
							<div className="favourite-btn">Favourite</div>
							<div className="cart-btn">Add to cart</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Moviecard;
