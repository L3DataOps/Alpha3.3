import "../css/CreateCase.css";

const TagListSelect = ({ tags = [], selectedTags = [], setSelectedTags }) => {
  const handleChange = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => handleChange(tag)}
          />
          {tag}
        </label>
      ))}
    </div>
  );
};

export default TagListSelect;
