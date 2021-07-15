import React from 'react';
import StarRating from './StarRating';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';


const RowItem = (props) => (

    
    <Grid item xs={12} md={3}  >
<img src={props.img} alt={props.title} className="img"/>
<p className="location">{props.location}</p>

<h4 className="title">{props.title}</h4>
<StarRating starLength={props.starLength} />

<Divider />
<p className="nightsText">
   {`${props.nights} nights & ${props.rounds} rounds`}
</p>
<div className="flex">
    <div>
<p className="fromText">from</p>
<h3 className="priceText">£{props.price}<span class="ppText">pp</span></h3>
</div>

<div>
{props.bookBadge && <img className="bookBadge" src={"/book_online.svg"} />}
</div>
</div>
        </Grid>
        
)





export default RowItem;