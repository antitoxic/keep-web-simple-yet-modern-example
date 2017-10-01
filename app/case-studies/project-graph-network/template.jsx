import './style.css';
import casestudy from 'templates/case-study';
import image1 from './specific-image.png';
import image2 from './specific-image2.jpeg';

export default () =>
  <casestudy page="project-graph-network">
    <p>First </p>
    <img src={image1} alt=""/>
    <p>Second 2</p>
    <img src={image2} alt=""/>
  </casestudy>
