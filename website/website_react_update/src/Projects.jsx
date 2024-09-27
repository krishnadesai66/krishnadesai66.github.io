import React from 'react';
import './editprojects.css'; // Import your CSS file'


function Projects() {

    const restaurant = [
      {
        name: 'Fat Cactus',
        cuisine: 'Mexican',
        area: 'NJ',
        image: "./src/components/fatcactus.jpg",
        link:"https://www.fatcactuscantina.com/"
      },
      {
        name: 'Karma Kafe',
        cuisine: 'Indian',
        area: 'NJ',
        image: "./src/components/karmakafe.jpg",
        link:"http://www.karmakafe.com/"
      },
      {
        name: 'Sakana',
        cuisine: 'Japanese',
        area: 'NJ',
        image: "./src/components/sakana.jpg",
        link:"https://www.sakananewbrunswick.com/"
      }, 
      {
        name: 'Uva',
        cuisine: 'Italian',
        area: 'NYC',
        image: "./src/components/uva.jpg",
        link:"https://www.uvanyc.com/"
      },
      {
        name: 'Tacoria',
        cuisine: 'Mexican',
        area: 'NJ',
        image: "./src/components/tacoria.jpg",
        link:"https://tacoria.com/"
      }
  
    ]
  
    return (
      <>
      <div className='header'>
        <h1>NYC/NJ Food Favorites!</h1>
        <h2>Here are my food favorites in the NYC/NJ area...</h2>
      </div>
  
        {
          restaurant.map((restaurant, i) => {
            return (<Post 
              name={restaurant.name} 
              key={i}
              cuisine={restaurant.cuisine} 
              area={restaurant.area} 
              image = {restaurant.image}
              link = {restaurant.link}
              />)
  
          })
        }
  
      </>
    )
  }
export default Projects;