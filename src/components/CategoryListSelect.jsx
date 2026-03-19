/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a dropdown select element for choosing the category for the Create a Case section.
const CategoryListSelect = ({ category, setCategory }) => {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">Select Category</option>
      <option>Critical</option>
      <option>Major</option>
      <option>Minor</option>
      <option>Network</option>
      <option>Facilities</option>
      <option>Civil</option>
      <option>Site Access</option>
    </select>
  );
};

export default CategoryListSelect;
