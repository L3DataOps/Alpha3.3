/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-20 : Marcos - Updated submit button to support disabled and active states
*/

const SubmitButton = ({ isDisabled }) => {
  return (
    <button
      type="submit"
      className={`submit-btn ${isDisabled ? "disabled" : "active"}`}
      disabled={isDisabled}
    >
      Submit
    </button>
  );
};

export default SubmitButton;