import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/guess-the-films"}>Minigame</NavLink>
    </div>
  );
}
