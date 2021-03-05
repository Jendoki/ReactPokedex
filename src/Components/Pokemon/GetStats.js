const GetStats = (props) => {
  const stats = props.stats;
  const baseHP = stats[0].base_stat;
  const baseAtk = stats[1].base_stat;
  const baseDef = stats[2].base_stat;
  const baseSpAtk = stats[3].base_stat;
  const baseSpDef = stats[4].base_stat;
  const baseSpeed = stats[5].base_stat;

  return (
    <>
      <h4>Base stats</h4>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">HP</div>
            <div className="col-6">{baseHP}</div>
          </div>
          <div className="row">
            <div className="col-6">Attack</div>
            <div className="col-6">{baseAtk}</div>
          </div>
          <div className="row">
            <div className="col-6">Defence</div>
            <div className="col-6">{baseDef}</div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-10">Special Attack</div>
            <div className="col-2">{baseSpAtk}</div>
          </div>
          <div className="row">
            <div className="col-10">Special Defense</div>
            <div className="col-2">{baseSpDef}</div>
          </div>
          <div className="row">
            <div className="col-10">Speed</div>
            <div className="col-2">{baseSpeed}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStats;
