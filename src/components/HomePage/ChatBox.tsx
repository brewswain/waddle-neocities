import React from "react";

import "./HomePage.styles.scss";

const ChatBox = () => {
  return (
    <article className="my-10 mb-10  rounded-[12px] bg-slate-100 px-4 pt-4 sm:hidden lg:my-0 lg:block lg:h-[530px]">
      <header className="homepage-card__header text-center font-merriweather">
        The Consul of Waddles
      </header>
      <iframe
        src="https://www3.cbox.ws/box/?boxid=3536203&boxtag=TpFpe2"
        width="100%"
        height="450"
        allowTransparency
        allow="autoplay"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="auto"
      ></iframe>
    </article>
  );
};

export default ChatBox;
