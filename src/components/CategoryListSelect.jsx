const CategoryListSelect = ({ category, setCategory }) => {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">Select Category</option>
      <option>Critical</option>
      <option>Major</option>
      <option>Minor</option>
      <option>Network</option>
      <option>Facilities</option>
      <option>Site Access</option>
    </select>
  );
};

export default CategoryListSelect;
