import scrollIntoView from 'scroll-into-view';

/** focusing the next word needed to be focus */
export default function focusNode(node) {
  const wordsContainer = node.parentNode.parentNode;
  /** height of the words container */
  const containerHeight = wordsContainer.clientHeight;
  /** amount from the upper point of the scorlling window, to the top of the actual element */
  const containerScorllingOffset = wordsContainer.scrollTop;
  /** number of pixels from the top of the element to the center of the scrolling window */
  const threshold = containerHeight * 0.5 + containerScorllingOffset;
  /** check if the next active word is not aligned with threshold */
  const isNextWordOutsideThreshold = node.offsetTop !== threshold;
  /** if the word is below or above the thresehold - make it higher */
  if (isNextWordOutsideThreshold) {
    scrollIntoView(
      node,
      {
        time: 200,
        align: {
          top: 0.2
        },
        isScrollable: () => true
      },
      () => {}
    );
  }
}