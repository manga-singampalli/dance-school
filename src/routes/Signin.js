import HeroImg from "../HeroImg";
// import Content from "../Content";
import Footer from "../Footer";
import Dance from "../Dance";
import Navbar from "../Navbar";
import  "./Signin.css";
// import AboutImg from "./img19.png"
const Signin = () => {
    return (
        <>
        <Navbar />
     <div class="container1">
  {/* <h2>Sign In</h2> */}
  {/* <!-- Trigger the modal with a button --> */}
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Sign in</button>

  {/* <!-- Modal --> */}
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Registration form</h4>
        </div>
        <div class="modal-body">
       
      <div class="container">
  <h2>Sign In</h2>
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" />
    </div>
    <div class="checkbox">
      <label><input type="checkbox" /> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
<Footer />

        </>
    )
}
export default Signin;