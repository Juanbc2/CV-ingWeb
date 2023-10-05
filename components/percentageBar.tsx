interface PercentageBarProps {
  percentage: number;
  name: string;
}

const percentageBar = ({ percentage,name }: PercentageBarProps) => {
  const percentageStyle = {
    width: `${percentage}%`,
    backgroundColor: "orange",
    height: "5px",
    borderRadius: "5px",
  };

  return (
    <div>
    <h2 className="float-left">{name}</h2>
    <h2 className="float-right">{percentage}%</h2>
    <br></br>
      <div className="p-0.5 rounded-full outline outline-1 outline-orange-500">
        <div className="percentage-bar__fill" style={percentageStyle} />
      </div>
    </div>
  );
};

export default percentageBar;
