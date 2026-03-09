function CurrentDate() {
  const date = new Date();

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const weekday = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <p id="date">{`${weekday}, ${month} ${day}${getOrdinal(day)} ${year}`}</p>
    </div>
  );
}

export default CurrentDate;