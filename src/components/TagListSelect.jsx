/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import "../css/CreateCase.css";

// Component for selecting tags in the CreateCase form
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
      {/* Renders a list of checkboxes for each tag, allowing users to select or deselect tags */}
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
