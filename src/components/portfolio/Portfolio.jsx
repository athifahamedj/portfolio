import React from 'react';
// import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todolist.png';
// import IMG3 from '../../assets/shelter.png';
//import IMG4 from '../../assets/fake.png';
// import IMG5 from '../../assets/news.png';
// import IMG6 from '../../assets/math.png';
import REST from '../../assets/rest.png';
import QUOTES from '../../assets/quotes.png'
import REDUX from '../../assets/redux.png'


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
     {
       id: 1,
       title: 'The Great Quotes',
       img: QUOTES,
       link: 'https://athif-react-router.netlify.app/',
       github: 'https://github.com/athifahamedj/react-router.git',
     },
    {
      id: 2,
      title: 'React Restaurant',
      img: REST,
      link: 'https://aaa-meals.netlify.app',
      github:'https://github.com/athifahamedj/food-order-app.git',
//       link: 'https://angry-yalow-17c6ab.netlify.app/',
//       github: 'https://github.com/Meri-MG/metrics-webapp---react',
    },
    {
      id: 3,
      title: 'To-Do App',
      img: IMG2,
      link: 'https://athif-portfolio.netlify.app/',
      github: 'https://github.com/athifahamedj/simple-todolist',
    },
    {
      id: 4,
      title: 'REDUX',
      img: REDUX,
      link: 'https://athif-redux.netlify.app/',
      github: 'https://github.com/athifahamedj/redux',
    },
//     {
//       id: 5,
//       title: 'World News',
//       img: IMG5,
//       link: 'https://meri-mg.github.io/Unilab-world-news/',
//       github: 'https://github.com/Meri-MG/Unilab-world-news',
//     },
//     {
//       id: 6,
//       title: 'Math Resource',
//       img: IMG6,
//       link: 'https://lukinoo.github.io/math-resource/',
//       github: 'https://github.com/lukinoo/math-resource',
//     },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio
