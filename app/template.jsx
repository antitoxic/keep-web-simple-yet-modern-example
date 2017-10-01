import graphstudy from './case-studies/project-graph-network';
import logo from './logo';
import './style.css';

export default () =>
  <div class={{'example-class': true, 'example-class-not-applied': false }}>
    <logo/>
    <graphstudy/>
  </div>

