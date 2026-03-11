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
