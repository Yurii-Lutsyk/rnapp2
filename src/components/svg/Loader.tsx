import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  interpolateColor,
  withSequence,
  withRepeat,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const Loader = props => {
  const color = useSharedValue(0);

  useEffect(() => {
    color.value = withTiming(1, {duration: 5000});
    withRepeat(
      withSequence(
        (color.value = withTiming(1, {duration: 5000})),
        (color.value = withTiming(0, {duration: 1000})),
      ),
      -1,
    );
  }, []);

  const animatedStyles = useAnimatedProps(() => {
    return {
      stroke: interpolateColor(
        color.value,
        [0, 0.2, 0.4, 0.8, 1],
        [
          'rgb(147, 189, 186)',
          'rgb(235, 154, 64)',
          'rgb(226, 117, 58)',
          'rgb(220, 85, 52)',
          'rgb(220, 85, 52)',
        ],
      ),
    };
  });

  return (
    <Svg
      width={118}
      height={107}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <AnimatedPath
        d="M32.333 6C17.608 6 5.667 17.819 5.667 32.4c0 11.77 4.666 39.707 50.602 67.947a5.26 5.26 0 0 0 5.462 0c45.936-28.24 50.602-56.176 50.602-67.947 0-14.581-11.941-26.4-26.666-26.4C70.94 6 59 22 59 22S47.059 6 32.333 6Z"
        animatedProps={animatedStyles}
        strokeWidth={10.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
