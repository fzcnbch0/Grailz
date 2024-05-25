import "./index.css";
import { useLocation } from "react-router-dom";

function Heading() {
  const location = useLocation();

  const getPageName = (path: string): string => {
    switch (path) {
      case '/':
        return 'HOME';
      case '/shop/men':
        return 'MEN';
        case '/shop/women':
        return 'WOMEN';
      default:
        return 'PAGE';
    }
  };

  const currentPath = location.pathname;
  const pageName = getPageName(currentPath);
  console.log(pageName);

  return (
    <>
      <div id="heading">
        <a id="directory">HOME / {pageName}</a>
      </div>
    </>
  );
}

export default Heading;
