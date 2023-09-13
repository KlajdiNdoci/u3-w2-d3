import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className={`text-center ${props.spacings}`}>
      <h1 className="display-4">{props.mainText}</h1>
      <p>
        La risorsa che stai cercando non esiste, <Link to="/">torna indietro.</Link>
      </p>

      <Link to="/">
        <Button variant={props.btnVariant || "warning"}>Torna alla Homepage</Button>
      </Link>
    </div>
  );
};
export default NotFound;
