const ProgressBar = ({ barValue }) => {
  return barValue.map((barValue) => {
    return (
      <div className='pokemon-stats-progress-bar-background'>
        <div
          className='pokemon-stats-progress-bar'
          style={{ width: `${Math.floor((barValue / 200) * 100)}%` }}
        ></div>
      </div>
    );
  });
};

export default ProgressBar;
