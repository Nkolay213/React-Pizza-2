import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="252" y="104" rx="0" ry="0" width="1" height="0" />
    <rect x="-1" y="280" rx="0" ry="0" width="280" height="28" />
    <circle cx="134" cy="136" r="125" />
    <rect x="-4" y="320" rx="0" ry="0" width="280" height="88" />
    <rect x="3" y="421" rx="9" ry="9" width="95" height="30" />
    <rect x="119" y="416" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);
