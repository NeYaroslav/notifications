export function uniteClassNames(...classNames: (string | undefined)[]) {
  return classNames.filter((className) => !!className).join(" ");
}
