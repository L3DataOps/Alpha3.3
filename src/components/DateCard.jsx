const DateCard = ({ time }) => {
  return (
    <div className="time">
      <p>
        {time.split("T")[0]} | {time.split("T")[1].split(".")[0]}
      </p>
    </div>
  );
};

export default DateCard;
