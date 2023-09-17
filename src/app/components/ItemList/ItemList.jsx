function ItemList({ items, selector }) {
  const listItems = items.map((item) => {
    return <li key={item.id} className={`${selector}__item`} >{item}</li>;
  });

  return <ul className={selector}>{listItems}</ul>;
}

export default ItemList;
