/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-20 : Marcos - Added reusable clear button component
*/

const ClearButton = ({ onClear }) => {
  return (
    <button type="button" className="clear-btn" onClick={onClear}>
      Clear
    </button>
  );
};

export default ClearButton;