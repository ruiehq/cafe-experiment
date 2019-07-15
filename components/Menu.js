import Link from 'next/link';
const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Menus</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Specials</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
