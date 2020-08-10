import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../style/footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="page-footer font-small pt-4 mt-4 fixed-bottom">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
