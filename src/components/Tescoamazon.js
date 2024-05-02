import React from 'react';
import list from '../Tesco'; //this is where i can change the database for the items
import '../styles/amazon.css';
// import Cards from './Cards';
import TescoCards from './Tescocards';

const TescoAmazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <TescoCards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>

  )
}

export default TescoAmazon
