const Skill = ({ name, level, order }) => {
  return (
    <div className="window__skill-line">
      <div className="window__skill-bar">
        <div className={`window__skill-level--${order}`}>{name}</div>
      </div>
      <div className="window__skill-number">{level}</div>
    </div>
  );
};

export default Skill;
