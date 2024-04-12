import { count } from "console";
import React from "react";

interface ComponentProps {
  secondName: string;
}

interface ComponentState {
  count: number;
  name: string;
}

class Practice extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      name: "",
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({
      name: "Anatoli",
    });
  }

  increaseCount = () => {
    this.setState((prevSate: ComponentState) => ({
      count: prevSate.count + 1,
      name: prevSate.name + " " + this.props.secondName,
    }));
  };

  render() {
    return (
      <div className="lg:bg-blue-900 md:bg-purple-700 sm:bg-red-400 text-white p-4 lg:flex lg:flex-col flex-wrap ">
        <h1>{this.state.name}</h1>
        <p>count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Practice;
