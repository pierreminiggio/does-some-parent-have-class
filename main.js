const doesSomeParentHaveClass = (element, classname) => {
    if (element.className.split(' ').indexOf(classname)>=0) {
		return true
	}
    return element.parentNode && doesSomeParentHaveClass(element.parentNode, classname)
}

module.exports = doesSomeParentHaveClass