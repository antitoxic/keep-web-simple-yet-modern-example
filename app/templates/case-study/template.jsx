import './style.css';
import navigation from './navigation';

export default (content, page) =>
  <div class="case">
    <navigation page={page}/>
    <navigation page={page} showLogo/>
    {content}
  </div>
