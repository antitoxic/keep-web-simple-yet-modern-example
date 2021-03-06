import './style.css';

export default ({page, showGreeting}) =>
  <div>
    <if condition={showGreeting}>Hey, I'm Todor and that's my cool stuff</if>
    <ul>
      <li>
        <a href="/cases/project-graph-network" class={'link', {
          "active": page === 'project-graph-network'
        }}>Graph Network</a></li>
      <li>
        <a href="/cases/another-project" class={'link', {
          "active": page === 'another-project'
        }}>Another project</a>
      </li>
    </ul>
  </div>
