import React from "react";
import Header from "../header";
import { NaveLinkModel } from "../../models/nave-link-model";

interface ComponentProps {}
interface ComponentStates {
  nav_links: NaveLinkModel[];
}

class HomePage extends React.Component<ComponentProps, ComponentStates> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      nav_links: [
        {
          link_name: "Home",
          link_url: "/home",
        },
        {
          link_name: "About Us",
          link_url: "/aboutUs",
        },
        {
          link_name: "Contact Us",
          link_url: "/contactUs",
        },
        {
          link_name: "Our Services",
          link_url: "/ourServices",
        },
      ],
    };
  }

  render(): React.ReactNode {
    return (
      <div className="home">
        <Header nav_links={this.state.nav_links} />
      </div>
    );
  }
}

export default HomePage;
