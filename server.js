const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
	try {
		await app.prepare();
		const server = express();

		server.get('/api/getGenericTiles', async (req, res) => {
			return res.json({
				product_lists: [
					{
						title: 'Best-selling England golf breaks',
						items: [
							{
								url: 'the-belfry',
								full_name: 'The Belfry',
								parent_location: 'Birmingham, England',
								lead_product: {
									rounds: 1,
									nights: 1,
									price: 119,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'The Belfry - Front of venue',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt447ea9796f1322cd/5eea1355293eef25d2b6e029/TheBelfry_Clubhouse.jpg',
									},
								},
							},
							{
								url: 'forest-of-arden',
								full_name:
									'Forest of Arden Marriott Hotel & Country Club',
								parent_location: 'Warickshire, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 129,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Forest of Arden 18th and clubhouse hotel',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt6c4a97f3a9e9b18f/5f22c7fa0e38240638cd8582/forest-of-arden-18th-and-clubhouse.jpg',
									},
								},
							},
							{
								url: 'belton-woods',
								full_name: 'Belton Woods',
								parent_location: 'Lincolnshire, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 99,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Venue - belton-woods : de-vere-belton-woods-balloon-shot-of-18th',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/bltbd7de7d6fe5f0462/5bf4178fd6c0d43f3d7fb314/de-vere-belton-woods-balloon-shot-of-18th.jpg',
									},
								},
							},
							{
								url: 'slaley-hall',
								full_name: 'Slaley Hall',
								parent_location: 'Northumberland, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 99,
									badge: '',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Venue - slaley-hall : rs3631slaley-hall-exterior22',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/bltf32036cd30d94b7e/5bf41b3cf751bc333d881ce6/rs3631slaley-hall-exterior22.jpg',
									},
								},
							},
						],
					},
					{
						title: 'Popular golf holidays in England',
						items: [
							{
								url: 'forest-pines',
								full_name:
									'Doubletree by Hilton Forest Pines Spa & Golf Resort',
								parent_location: 'Lincolnshire, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 99,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Venue - forest-pines : Forest-Pines-Front-Entrance',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/bltebb781e575a2ce00/5c598015bc5d07ed0b48cdf8/Forest-Pines-Front-Entrance.jpg',
									},
								},
							},
							{
								url: 'east-sussex-national-hotel',
								full_name: 'East Sussex National Golf Hotel',
								parent_location: 'East Sussex, England',
								lead_product: {
									rounds: 2,
									nights: 2,
									price: 109,
									badge: '',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'East Sussex National 18th and hotel',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/bltb74eb9dfe13af8dd/5f1ea4e7fea6d72d3e8bb5e8/East_Sussex_National_Clubhouse_Edit.jpg',
									},
								},
							},
							{
								url: 'carden-park',
								full_name: 'Carden Park Hotel, Golf Resort & Spa',
								parent_location: 'Chester, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 149,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Carden Park - Entrance - New image 2020 - 2',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt635a6e15ff32c4ad/5fc609f4bfc5dd7188660eb9/Entrance_04.jpg',
									},
								},
							},
							{
								url: 'old-thorns-hotel',
								full_name: 'Old Thorns Manor Hotel',
								parent_location: 'Hampshire, England',
								lead_product: {
									rounds: 2,
									nights: 1,
									price: 99,
									badge: 'book_online.svg',
								},
								data: [
									{
										venue_type: 'Resort',
										venue_information: { official_star_rating: 4 },
									},
								],
								image: {
									title: 'Venue - old-thorns-hotel : hotel-front',
									file: {
										url: 'https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt375dadeb6816e5d4/5bf417b65fc57fff7689e916/hotel-front.jpg',
									},
								},
							},
						],
					},
				],
			});
		});

		server.all('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port} ${process.env.NODE_ENV}`);
		});
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
})();
