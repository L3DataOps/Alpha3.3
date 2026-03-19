/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// Submit button for creating a case, which triggers the submitHandler function when clicked
const SubmitButton = ({ submitHandler }) => {
  return <button onClick={submitHandler}>Submit</button>;
};

export default SubmitButton;
