import { Link } from 'react-router-dom';
import './logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <img src="6.png" width={200}/>
    </Link>
  );
}

export { Logo };
