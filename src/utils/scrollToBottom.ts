export const scrollToBottom = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.lastElementChild?.scrollIntoView();
};
