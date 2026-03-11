const TagListSelect = ({ tags, selectedTag, setSelectedTag }) => {
  return (
    <select
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
    >
      <option value="">Select Tag</option>
      {tags.map((tag, index) => (
        <option key={index} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagListSelect;
