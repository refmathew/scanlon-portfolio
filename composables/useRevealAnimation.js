export default (
	$el,
	classToAdd,
	$reference, // reveal relative to this reference element
	config
) => {
	// Vertical offset is for the elements who are animationg
	const { revealPoint = 128, verticalOffset = 64 } = config || {};

	window.addEventListener("scroll", () => {
		let elTopOffset;
		// if there's a reference element, use it instead
		$reference
			? (elTopOffset = $reference.getBoundingClientRect().top)
			: (elTopOffset = $el.getBoundingClientRect().top);

		if (elTopOffset <= window.innerHeight + verticalOffset - revealPoint) {
			return $el.classList.add(classToAdd);
		}

		if (elTopOffset > window.innerHeight) {
			return $el.classList.remove(classToAdd);
		}
	});
};
