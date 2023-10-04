interface PercentageBarProps {
  percentage: number;
  name: string;
}

const percentageBar = ({ percentage,name }: PercentageBarProps) => {
  const percentageStyle = {
    width: `${percentage}%`,
    backgroundColor: "orange",
    height: "10px",
    borderRadius: "10px",
  };

  return (
    <div>
    <h2 className="float-left">{name}</h2>
    <h2 className="float-right">{percentage}%</h2>
    <br></br>
      <div className="professional-skill-bar my-2">
        <div className="percentage-bar__fill" style={percentageStyle} />
      </div>
    </div>
  );
};

export default percentageBar;
