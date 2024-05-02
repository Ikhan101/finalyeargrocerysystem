import React from 'react';
import list from '../data'; //this is where i can change the database for the items
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon
