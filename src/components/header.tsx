import React from "react";
import { NaveLinkModel } from "../models/nave-link-model";
interface ComponentProps {
  nav_links: NaveLinkModel[];
}

class Header extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <div className="header">
        {this.props.nav_links.map((nave_link, index) => (
          <h1 key={index}>{nave_link.link_name}</h1>
        ))}
      </div>
    );
  }
}

export default Header;
