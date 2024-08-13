import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/home" className="sidebar-link">Home</Link>
      <Link to="/recipe-type/Asian" className="sidebar-link">Asian</Link>
      <Link to="/recipe-type/European" className="sidebar-link">European</Link>
    </div>
  );
};

export default Sidebar;
