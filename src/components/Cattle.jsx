export const Cattle = (props) => {
  const { currentLevel, currentIndex, currentSubIndex } = props;
  const changeCattle = () => {
    if (currentLevel === 0) {
      return <img src="./src/assets/cattle.svg"></img>;
    } else if (currentLevel == 1 && currentIndex === 0) {
      return <img src="./src/assets/cattle_y.svg"></img>;
    } else if (currentLevel == 1 && currentIndex === 1) {
      return <img src="./src/assets/cattle_h.svg"></img>;
    } else if (currentLevel >= 2 && currentIndex === 0) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_y_head.svg"></img>;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_y_shoulder.svg"></img>;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_y_back.svg"></img>;
      } else if (currentSubIndex === 3) {
        return <img src="./src/assets/cattle_y_stomach.svg"></img>;
      } else if (currentSubIndex === 4) {
        return <img src="./src/assets/cattle_y_leg.svg"></img>;
      }
    } else if (currentLevel >= 2 && currentIndex === 1) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_h_head-chest.svg"></img>;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_h_stomach.svg"></img>;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_h_bowels.svg"></img>;
      }
    }
  };
  return <>{changeCattle()}</>;
};
