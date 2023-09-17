function MenuBar({ items, selector }) {
  const optionItems = items.map((item) => {
    return (
      <li className={`${selector}__option`} key={item.name}>
        <button className={`${selector}__button`} onClick={item.onClick}>
          {item.text}
        </button>
      </li>
    );
  });

  return <menu className={selector}>{optionItems}</menu>;
}

export default MenuBar;
