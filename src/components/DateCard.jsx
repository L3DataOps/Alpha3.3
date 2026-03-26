/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Daniel - Added comment tracking
-- 2026-03-26 : Daniel - Updated NA to populate if time doesnt exist
*/

const DateCard = ({ time }) => {
  if (!time) {
    return (
      <div className="time">
        <p>N/A</p>
      </div>
    );
  }

  return (
    <div className="time">
      <p>
        {time.split("T")[0]} | {time.split("T")[1].split(".")[0]}
      </p>
    </div>
  );
};

export default DateCard;
