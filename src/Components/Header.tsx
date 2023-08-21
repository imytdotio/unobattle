type HeaderProps = {
  text: string;
};

const Header = ({text}: HeaderProps) => {
  return <h1 className="text-center mb-8">{text}</h1>;
};

export default Header;
