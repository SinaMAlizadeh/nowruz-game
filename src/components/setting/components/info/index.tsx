import { useContext } from "react";
import { GameContext } from "../../../../context/gameContext";
import { InfoBody, InfoContent, InfoHeader } from "./info.style";
import { Types } from "../../../../context/reducers";

function GameInfo() {
  const { dispatch } = useContext(GameContext);
  const closeInfo = () => {
    dispatch({
      type: Types.SetShowInfo,
      payload: {
        show: false,
      },
    });
  };
  return (
    <>
      <InfoContent>
        <InfoHeader>
          <b>About Nowruz:</b>
          <span onClick={closeInfo}>&#x2715;</span>
        </InfoHeader>
        <InfoBody>
          <p>
            Nowruz typically falls on or around the spring equinox, around March
            20th or 21st, and is celebrated by Iranians and various other
            communities around the world, including Afghanistan, Azerbaijan,
            Central Asia, and parts of the Caucasus.
          </p>
          <p>
            Preparations for Nowruz often begin weeks in advance and involve
            thorough cleaning and decorating of homes, purchasing new clothes,
            and gathering ingredients for special dishes. One of the most iconic
            traditions of Nowruz is the setting of the Haft-Seen table, which is
            adorned with seven symbolic items, each starting with the Persian
            letter "س" (pronounced "seen"), representing various hopes and
            wishes for the new year.
          </p>
          <p>
            During Nowruz, families come together to enjoy festive meals,
            exchange gifts, and visit friends and relatives. There are also
            public celebrations with music, dancing, and traditional
            performances.
          </p>
          <p>
            Nowruz is not just a cultural celebration but also holds significant
            historical and religious importance. It has its roots in
            Zoroastrianism, an ancient Persian religion, and it symbolizes the
            victory of light over darkness and the triumph of good over evil.
          </p>
          <p>
            Overall, Nowruz is a joyous and vibrant celebration that brings
            communities together to welcome the arrival of spring, celebrate new
            beginnings, and foster a sense of unity and hope for the year ahead.
          </p>
        </InfoBody>
      </InfoContent>
    </>
  );
}

export default GameInfo;
