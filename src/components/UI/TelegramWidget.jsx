import { useEffect, useRef } from 'react';

function TelegramWidget() {
  const divRef = useRef(null);

  useEffect(() => {
    const divNode = divRef.current;
    if (divNode) {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-post', 'pokerfacecoverband/77');
      script.setAttribute('data-userpic', 'false');
      // script.setAttribute('data-dark', '1');
      // script.setAttribute('data-dark-color', '72E350');
      script.setAttribute('data-width', '1%');
      divNode.appendChild(script);
    }
    return () => {
      if (divNode) {
        divNode.removeChild(divNode.firstChild);
      }
    };
  }, []);

  return <div ref={divRef}></div>;
}

export default TelegramWidget;
