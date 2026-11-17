import { Title } from "./typhograpy/Title";

export function Header() {
  return (
    <header className="navbar navbar-expand bg-gradient px-3 py-2">
      <div className="container-fluid">
        <Title title="studa." size="h1" fs="fs-6" />
        
        <ul className="navbar-nav ms-auto mb-0">
          <li className="nav-item">
            <a className="nav-link active hover-lift" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover-lift" href="#">Apps</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover-lift" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled hover-lift" aria-disabled="true">Settings</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
