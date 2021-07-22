import React from 'react';
import { View } from 'react-native';
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
} from 'react-native-svg';

export default function FavoriteOn() {
  return (
    <View>
      <Svg
        width={27}
        height={20}
        viewBox="0 0 76 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

      >
        <G clipPath="url(#prefix__clip0)">
          <Path
            d="M9.5 7.875v53.156c0 .342.107.678.31.975.205.297.498.545.853.72.355.174.758.27 1.17.275.413.006.82-.077 1.182-.241L38 51.46l24.985 11.3c.362.164.769.247 1.181.241.413-.006.816-.1 1.17-.275.356-.175.65-.422.853-.72.204-.297.311-.633.311-.975V7.875c0-2.089-1-4.092-2.782-5.568C61.936.83 59.52 0 57 0H19c-2.52 0-4.936.83-6.717 2.307C10.5 3.783 9.5 5.787 9.5 7.875z"
            fill="#000"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" d="M0 0h76v63H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}
