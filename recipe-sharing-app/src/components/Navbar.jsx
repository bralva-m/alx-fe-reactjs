import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#333', padding: '10px', color: 'white', display: 'flex', gap: '12px' }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorites</Link>
  </nav>
);

export default Navbar;
