/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a textarea input for entering the initial description of a case in the Create a Case section.
const InitialDescription = ({ description, setDescription }) => {
  return (
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter initial description..."
      rows="4"
      cols="50"
    />
  );
};

export default InitialDescription;
