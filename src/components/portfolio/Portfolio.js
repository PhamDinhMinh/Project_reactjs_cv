import React from "react";
import "./portfolio.css";
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.jpg'
import IMG6 from '../../asset/portfolio6.jpg'

const data=[
  {
    id:1,
    image: IMG1,
    tittle: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18672362-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:2,
    image: IMG2,
    tittle: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18814314-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:3,
    image: IMG3,
    tittle: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18814187-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:4,
    image: IMG4,
    tittle: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18814269-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:5,
    image: IMG5,
    tittle: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18814174-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:6,
    image: IMG6,
    tittle: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18672453-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, tittle, github, demo}) =>{
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={image} alt={tittle}/>
                </div>
                <h3>{tittle}</h3>
                <div className="portfolio_item_cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
