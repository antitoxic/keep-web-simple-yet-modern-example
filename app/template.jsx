import logo from './logo';
import './style.css';

export default () =>
  <div class={{'example-class': true, 'example-class-not-applied': false }}>
    RRR
    <logo/>
  </div>

