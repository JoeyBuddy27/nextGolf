import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import Header from '../components/Header';
import Row from "../components/Row";
import RowItem from "../components/RowItem";
import axios from "axios";
import Grid from "@material-ui/core/Grid";



export default function Home() {

	const [golfData, setGolfData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const results = await axios.get("/api/getGenericTiles");
			await setGolfData(results);
		}
	
	 	//  fetch("/api/getGenericTiles")
		//  .then((data => data.json()))
		//  .then((data => setGolfData(data)))

		getData();
		console.log(golfData);
		// console.log(golfData);
	}, [setGolfData]);

	
	return (
		<div>
			<Head>
				<title>React Test - Golfbreaks.com</title>
				
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
					rel='stylesheet'
				></link>
				<link
					rel='stylesheet'
					href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
					integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
					crossOrigin='anonymous'
				/>
			</Head>

			<Header />

			<main className='container'>
				<Container fixed>
			
			 {golfData.data && golfData.data.product_lists.map((item, index) => {
				return (
					<>
				<h1 className="heading">{item.title}</h1>	
				<Grid maxWidth={1200} container key={item.title} spacing={3}>
				{item.items.map((content, i) => 
						<RowItem 
						img={content.image.file.url} 
						location={content.parent_location}
						title={content.full_name}
						nights={content.lead_product.nights} 
						rounds={content.lead_product.rounds}
						bookBadge = {content.lead_product.badge}
						price={content.lead_product.price} 
						starLength={content.data[0].venue_information.official_star_rating}
						 />
					
				)}	
				</Grid>
				</>
				)

				
			})} 

				</Container>
			</main>
			<style jsx>{`
				.container {
					 margin-top: 100px;
					 margin-bottom: 100px;
				}

				
			`}</style>
			<style jsx global>{`
				body {
					font-family: Open Sans, sans-serif;
				}
				.heading {
					font-family: Nunito Sans, sans-serif;
					color: #1a202c;
					letter-spacing: 0;
					font-size: 34px;
					line-height: 1.4em;
					font-weight: 300;
				}
				.img {
					width: 100%;
					border-radius: 3px;
					aspect-ratio: 16 / 9;
				}
				.location {
					font-family: Open Sans, sans-serif;
					color: #4a5568;
					margin-top: 4px;
					font-size: 12px;
					width: auto;
					text-transform: uppercase;
				
				}
				.title {
					font-weight: 700;
					font-family: Open Sans, sans-serif;
					color: #2d3748;
					line-height: 1.6em;
					letter-spacing: 0;
					font-size: 18px;
					display: inline;
					margin-right: 8px;
					
					
				}
				.flex {
					display: flex;
					justify-content:space-between;
				}
				.nightsText {
					font-size: 14px;
					
				}
				.fromText {
					font-size: 10px;
					margin: 0px;
					
					color: #2d3748;
				}
				.priceText {
					font-size: 32px;
					margin: 0px;
					
					color: #2d3748;
				}
				.ppText {
					font-size: 16px;
					color: #2d3748;
				}
				.bookBadge {
					width: 56px;
					
				}
			`}</style>
		</div>
	);
}
