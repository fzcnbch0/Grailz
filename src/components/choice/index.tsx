import "./index.css";
import { Link } from "react-router-dom";
function Choice() {
  return (
    <>
      <section id="choice">
        <div id="mens">
          <div className="phototext">
            <Link to="/shop/mens" className="choicetext">
              MENS
            </Link>
          </div>
          <img src="../public/row-1-column-2.png" alt="fashion" />
        </div>
        <div id="womens">
          <div className="phototext">
          <Link to="/shop/womens" className="choicetext">
              WOMENS
            </Link>
            </div>
          <img src="../public/row-1-column-1.png" alt="accesories" />
        </div>
      </section>
    </>
  );
}

export default Choice;
