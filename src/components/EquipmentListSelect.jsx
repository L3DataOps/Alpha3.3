const EquipmentListSelect = ({
  equipment,
  selectedEquipment,
  setSelectedEquipment,
}) => {
  return (
    <select
      value={selectedEquipment}
      onChange={(e) => setSelectedEquipment(e.target.value)}
    >
      {equipment.map((item) => (
        <option key={item.id} value={item.id}>
          {item.type}
        </option>
      ))}
    </select>
  );
};

export default EquipmentListSelect;
