import './style.css';
import logo from './logo.svg';

export default (page, showLogo) =>
  <div>
    <if condition={showLogo}>
      <logo class="logo"/>
    </if>
    Hey, I'm Todor and that's my cool stuff
    <ul>
      <li>
        <a href="/cases/project-graph-network" class={'link', {
          active: page === 'project-graph-network'
        }}>Graph Network</a></li>
      <li>
        <a href="/cases/another-project" class={'link',
          active: page === another-project
        }}>Another project</a>
      </li>
    </ul>
  </div>
