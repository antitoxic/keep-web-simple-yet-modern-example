import './style.css';
import navigation from './navigation';

export default ({children, page}) =>
  <div class="case">
    <navigation page={page}/>
    {children}
  </div>
