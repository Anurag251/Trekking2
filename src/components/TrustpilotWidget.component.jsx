import { useEffect, useRef } from "react";

const TrustpilotWidgetComponent = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }

    setTimeout(() => {
      check();
    }, 3000);
  }, []);

  const check = () => {
    const iframe = ref.current?.children[0];

    if (iframe) {
      iframe.contentWindow.postMessage("applyStylesToImage", "*");
    }
  };

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="5c079edd901f360001c98fd5"
      data-style-height="30px"
      data-style-width="100%"
      data-theme="light"
      data-min-review-count="10"
      data-style-alignment="center"
    >
      <a
        href="https://www.trustpilot.com/review/sacredhimalaya.com"
        target="blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
};
export default TrustpilotWidgetComponent;
