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
