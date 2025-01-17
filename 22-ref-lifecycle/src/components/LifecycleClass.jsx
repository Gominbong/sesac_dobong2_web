import { Component } from "react";
class MyComponent extends Component {
  componentDidMount() {
    console.log("mount 되었어요!!!😊");
  }
  componentDidUpdate() {
    console.log("update 되었어요!!!😂");
  }
  componentWillUnmount() {
    console.log("unmount 되었어요!!!❤️");
  }

  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

class LifecycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  changeVisibleState = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
export default LifecycleClass;
