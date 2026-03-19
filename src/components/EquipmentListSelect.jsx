/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a dropdown select for choosing equipment in the Create a Case section.
const EquipmentListSelect = ({
  equipment,
  selectedEquipment,
  setSelectedEquipment,
}) => {
  return (
    <select
      value={selectedEquipment?.equipmentName || ""} // bind by id
      onChange={(e) => {
        const eq = equipment.find(
          (item) => item.equipmentName === e.target.value,
        ); // match by _id
        setSelectedEquipment(eq); // store the full object
      }}
    >
      <option value="">Select Equipment</option>
      {equipment.map((item) => (
        <option key={item._id} value={item.equipmentName}>
          {item.equipmentName}
        </option>
      ))}
    </select>
  );
};

export default EquipmentListSelect;
