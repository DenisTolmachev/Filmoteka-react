import { HeaderStyle, NavStyle, LinkStyle } from "./Header.styled";

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
  { href: 'top_films', text: 'Top Films' },
  { href: 'upcomming', text: 'Upcomming' },
];

export const Header = () => {
  return (
    <HeaderStyle>
      <NavStyle>
        {navItems.map(({href, text}) => <LinkStyle to={href} key={href}>{text}</LinkStyle>)}
      </NavStyle>
    </HeaderStyle>
  );
};
