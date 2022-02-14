import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/3326728/pexels-photo-3326728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.pexels.com/photos/7147444/pexels-photo-7147444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.pexels.com/photos/7880182/pexels-photo-7880182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women",
          imageUrl:
            "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          size: "large",
          id: 4,
          linkUrl: "shop/women",
        },
        {
          title: "men",
          imageUrl:
            "https://images.pexels.com/photos/5543421/pexels-photo-5543421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          size: "large",
          id: 5,
          linkUrl: "shop/men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
