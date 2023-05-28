import React, { Component } from 'react';
import Moviecards from './Moviecard';
class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			movies: [
				{
					title: 'The Avengers',
					plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
					poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
					rating: '8.0',
					price: 99,
					star: 0,
					fav: false,
					isInCart: false,
				},
				{
					title: 'The Dark Knight',
					plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
					poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
					rating: '9.0',
					price: 199,
					star: 0,
					fav: false,
					isInCart: false,
				},
				{
					title: 'Iron Man',
					plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
					poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
					rating: '7.9',
					price: 139,
					star: 0,
					fav: false,
					isInCart: false,
				},
			],
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
	};
	handleFav = () => {
		this.setState({
			fav: !this.state.fav,
		});
	};
	handleAddToCart = () => {
		this.setState({
			isInCart: !this.state.isInCart,
		});
	};
	render() {
		// const { title, plot, price, ratings, stars, fav, isInCart } =
		// 	this.state;

		const { movies } = this.state;
		return (
			<>
				{movies.map((movie) => (
					<Moviecards movies={movie} />
				))}
			</>
		);
	}
}

export default MovieList;
