const OrderControls = ({ order, setOrder }) => {
  return (
    <select value={order} onChange={(e) => setOrder(e.target.value)}>
      <option value="ASC">Ascending</option>
      <option value="DESC">Descending</option>
    </select>
  );
};

export default OrderControls;
