import React from 'react';
import list from '../Aldi'; //this is where i can change the database for the items
import '../styles/amazon.css';
// import Cards from './Cards';
import AldiCards from './Tescocards';

const Aldiamazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <AldiCards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>

  )
}

export default Aldiamazon
