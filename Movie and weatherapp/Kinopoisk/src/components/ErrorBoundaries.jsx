import { Component } from "react";

export class ErrorBoundary extends Component {
    state = { hasError: false};
  
    componentDidCatch(error, info) {
      this.setState({hasError: true});
      console.log(error, info)
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <>
            <p></p>
            <h2>Something went worng</h2>
            <p>Please try again later</p>
            </>

        ) 
      }
      return this.props.children
    } 
  }
  