const doesSomeParentHaveClass = (element, classname, checkCurrent = false) => {
    if (
        checkCurrent
        && element.classList.contains(classname)
    ) {
		return true
    }

    return element.parentNode && doesSomeParentHaveClass(element.parentNode, classname, true)
}

module.exports = doesSomeParentHaveClass
