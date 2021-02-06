import React, { Component } from 'react'



// Reusable Components
import AuthNavbar from "../components/Navbars/AuthNavbars";
import AuthHeader from "../components/Headers/AuthHeader";



export class AuthLayout extends Component {
    componentDidMount() {
        document.body.classList.add("bg-default");
    }
    componentWillUnmount() {
        document.body.classList.remove("bg-default");
    }

    render() {
        const Component = this.props.component;
        return (
            <>
                <div className="main-content">
                <AuthNavbar />
                <AuthHeader showHeader={this.props.showHeader} />
                </div>
            </>
        )
    }
}

export default AuthLayout

