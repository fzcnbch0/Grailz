import "./index.css";
import { Link } from "react-router-dom";
import { useUser } from "../../UserContext";
function Choice() {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <section id="choice">
        <div id="mens">
          <div className="phototext">
            <Link to="/shop/men" className="choicetext">
              MENS
            </Link>
          </div>
          <img src="/row-1-column-2.png" alt="fashion" />
        </div>
        <div id="womens">
          <div className="phototext">
            <Link to="/shop/women" className="choicetext">
              WOMENS
            </Link>
          </div>
          <img src="/row-1-column-1.png" alt="accessories" />
        </div>
      </section>
    </>
  );
}

export default Choice;
