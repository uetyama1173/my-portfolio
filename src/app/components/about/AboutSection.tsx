import { IconAndName } from "./IconName";
import { AboutLinkList } from "./LinkList";

export const AboutSection = () => {
  return (
    <h1>
      <div className="mt-8 md:mx-auto md:flex md:justify-center">
        <IconAndName></IconAndName>
        <AboutLinkList />
      </div>
    </h1>
  );
};
