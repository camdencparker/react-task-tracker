import Button from "./Button";
const Header = () => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <header className="header">
        <h1>Task Tracker</h1>
        <Button color="green" text="Add" onClick={onClick} />
      </header>
    </div>
  );
};

export default Header;
