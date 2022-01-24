interface IElementPosition {
    top: number;
    bottom: number;
}
export const getElementPosition = (
    elementId: string
): IElementPosition | undefined => {
    const element = document.getElementById(elementId);
    if (element) {
        return {
            top: element.getBoundingClientRect().top + 70.5,
            bottom: element.getBoundingClientRect().bottom
        };
    } else return;
};

export const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}