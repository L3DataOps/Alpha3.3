const TagListSelect = ({ tags, selectedTag, setSelectedTags }) => {
  return (
    <select
      value={selectedTag}
      onChange={(e) => setSelectedTags(e.target.value)}
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
