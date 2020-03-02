const doesSomeParentHaveClass = (element, classname, checkCurrent = false) => {
    if (
        checkCurrent
        && element.className !== undefined
        && element.className.split(' ').indexOf(classname) >=0
    ) {
		return true
	}
    return element.parentNode && doesSomeParentHaveClass(element.parentNode, classname, true)
}

module.exports = doesSomeParentHaveClass