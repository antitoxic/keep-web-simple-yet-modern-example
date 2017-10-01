import './style.css';
import navigation from './navigation';

export default ({content, page}) =>
  <div class="case">
    -----
    <navigation page={page} showGreeting={true}/>
    -----
    <navigation page={page} showGreeting={false}/>
    {content}
  </div>
