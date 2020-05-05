import React, { Component} from "react";
import ReactDOM from "react-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Signup from "./singup";
import { Form,Col,Button, Container} from "react-bootstrap";

class Dashboard extends Component {
    state = { isUserAdmin:true};

    render() {

      return (
       <div>
           <Container className="margin-container">
      <div className="margi">
      <h2>Signup as {this.state.isUserAdmin==false?"Student":"Teacher"} </h2>  <div className="margin-left">
           <BootstrapSwitchButton
    
    checked={true}
    onlabel='Student'
    offlabel='Teacher'
    width={200}
    onChange={(checked: boolean) => {
        this.setState({ isUserAdmin: checked })
    }}
/></div>
      </div>
       <Signup
        isUserAdmin={this.state.isUserAdmin}
         />
        </Container>
  
        </div>
      );
     
    }
  }
export default Dashboard;