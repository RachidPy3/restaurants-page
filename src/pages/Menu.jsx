import { Pizzacard } from "../components/Pizzacard";

const Menu = () => {
  const menu = [
    {
      id: 1,
      name: "kaka pizza",
      price: "100$",
      picture:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F14%2F429048911_6123009126001_6123003897001-vs.jpg",
    },
    {
      id: 2,
      name: "kaka pizza",
      price: "100$",
      picture:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F14%2F429048911_6123009126001_6123003897001-vs.jpg",
    },
    {
      id: 3,
      name: "kaka pizza",
      price: "100$",
      picture:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F14%2F429048911_6123009126001_6123003897001-vs.jpg",
    },
    {
      id: 3,
      name: "kaka pizza",
      price: "100$",
      picture:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F14%2F429048911_6123009126001_6123003897001-vs.jpg",
    },
  ];
  const menuElement = menu.map((item) => {
    return <Pizzacard key={item.id} {...item} />;
  });

  return <main className="menu">{menuElement}</main>;
};

export default Menu;
