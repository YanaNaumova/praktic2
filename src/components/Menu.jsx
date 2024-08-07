import MenuItem from "./MenuItem";

function Menu({ menus }) {
  return (
    <>
      {menus.map((el, index) => {
        return (
          <MenuItem
            key={index}
            id={el.id}
            name={el.name}
            description={el.description}
            price={el.price}
          />
        );
      })}
    </>
  );
}

export default Menu;
