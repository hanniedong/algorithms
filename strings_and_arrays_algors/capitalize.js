function capitalize(string) {
  return string
    .split(" ")
    .map(string => string[0].toUpperCase() + string.slice(1))
    .join(" ");
}
