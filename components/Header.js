import Menu from '../components/Menu';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="address">
          Greenbelt 1, Ayala Center, Makati City, Metro Manila
        </div>
        <Menu />
        <div className="reservation">BOOK RESERVATIONS</div>
      </div>
    </header>
  );
};

export default Header;
