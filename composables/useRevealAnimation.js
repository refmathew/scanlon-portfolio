export default (
  $el,
  classToAdd,
  $reference, // reveal relative to this reference element
  config
) => {
  const { revealPoint = 128, verticalOffset = 64 } = config || {};

  window.addEventListener("scroll", () => {
    console.log(revealPoint, verticalOffset);
    let elTopOffset;
    // if there's a reference element, use it instead
    $reference
      ? (elTopOffset = $reference.getBoundingClientRect().top)
      : (elTopOffset = $el.getBoundingClientRect().top);

    elTopOffset <= window.innerHeight + verticalOffset - revealPoint
      ? $el.classList.add(classToAdd)
      : $el.classList.remove(classToAdd);
  });
};
