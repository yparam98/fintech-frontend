import '../App.css';
import People from '../assets/people.jpg';
import { Signup } from '../components/Formik/Signup';

function Registerpage() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={People} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;