import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map(item => (
        <div className="col-md-4" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
