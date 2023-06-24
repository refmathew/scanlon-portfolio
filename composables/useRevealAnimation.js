export default (
	$el,
	classToAdd,
	$reference, // reveal relative to this reference element
	config
) => {
	// Vertical offset is for the elements which are animating from bottom
	// where position is higher than before animation class is applied
	const { revealPoint = 128, verticalOffset = 64 } = config || {};

	window.addEventListener("scroll", () => {
		const originalElTopOffset = $el.getBoundingClientRect().top;
		let elTopOffset;

		// if there's a reference element, use it instead
		$reference
			? (elTopOffset = $reference.getBoundingClientRect().top)
			: (elTopOffset = $el.getBoundingClientRect().top);

		if (elTopOffset <= window.innerHeight + verticalOffset - revealPoint) {
			return $el.classList.add(classToAdd);
		}

		// OriginalElTopOffset is used instead of the eltopoffset
		// (either the element itself or the reference element)
		// so that when there's a reference element used which is lower than
		// the element itself, the element would not disappear together with
		// the reference element
		if (originalElTopOffset > window.innerHeight) {
			return $el.classList.remove(classToAdd);
		}
	});
};
