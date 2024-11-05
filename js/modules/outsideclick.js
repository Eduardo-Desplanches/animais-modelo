export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, hadleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  function hadleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, hadleOutsideClick);
      });
      callback();
    }
  }
}
