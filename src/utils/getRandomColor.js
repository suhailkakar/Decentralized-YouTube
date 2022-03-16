import colors from "tailwindcss/colors";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const isNotAllowed = (color) => {
  if (!color.match(/^[a-z]+$/)) return true;
  const unallowed = [
    "black",
    "white",
    "rose",
    "lime",
    "violet",
    "emerald",
    "fuchsia",
    "orange",
    "cyan",
    "amber",
    "teal",
  ];
  if (unallowed.includes(color)) return true;

  return false;
};

export const getRandomColor = (prevColor = "") => {
  const allColors = Object.keys(colors);
  const color = getRandomItem(allColors);
  return isNotAllowed(color) || prevColor === color
    ? getRandomColor(prevColor)
    : color;
};

export const getGradient = (
  firstColor,
  secondColor,
  intensity = 300,
  direction = "br"
) => {
  return `bg-gradient-to-${direction} from-${firstColor}-${intensity} to-${secondColor}-${intensity}`;
};
