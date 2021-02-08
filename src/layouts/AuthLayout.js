import React, { Component } from 'react'



// Reusable Components
import AuthNavbar from "../components/Navbars/AuthNavbars";
import AuthHeader from "../components/Headers/AuthHeader";
import AuthFooter from "../components/Footers/AuthFooter"


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
                <Component/>
                <AuthFooter />
                </div>
            </>
        )
    }
}

export default AuthLayout

