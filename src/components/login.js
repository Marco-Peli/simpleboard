import React from "react";

class Login extends React.Component{
	constructor(){
		super();
	}

	render(){
        return (
		<>
          <div className="flex justify-center">
            <div className="outline w-50 pa3 mr2">
							<label for="fname">First name:</label>
              <input type="text" id="fname" name="fname"/>
            </div>
          </div>
		</>
		);
	}
}

export default Login;
