import React from 'react';

const StarRating = ({ starLength }) => {
	return (
		<>
			<div className='star-wrapper'>
				{[...Array(starLength)].map((e, i) => (
					<i key={`StarRating_${i}`} className='fas fa-star orange-star'></i>
				))}
			</div>
			<style jsx>{`
				.star-wrapper {
					display: inline-block;
					margin-bottom: 1em;
				}
				.orange-star {
					color: #ffc107;
				}
			`}</style>
		</>
	);
};

export default StarRating;
