import React from 'react';

class Moviecard extends React.Component {
	render() {
		const { title, plot, price, ratings, stars, fav, isInCart } =
			this.props.movies;
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
							{fav ? (
								<div
									className="favourite-btn"
									onClick={this.handleFav}>
									Favourite
								</div>
							) : (
								<div
									className="unfavourite-btn"
									onClick={this.handleFav}>
									Un-Favourite
								</div>
							)}
							{isInCart ? (
								<div
									className="cart-btn"
									onClick={this.handleAddToCart}>
									Add to cart
								</div>
							) : (
								<div
									className="removecart-btn"
									onClick={this.handleAddToCart}>
									Remove from cart
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Moviecard;
