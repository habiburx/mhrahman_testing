import { SmartLink } from "@once-ui-system/core";

/**
 * ABOUT PAGE CONFIG
 *
 * Edit this file to update the About page text and research interests.
 * The UI layout lives in components/AboutContent.tsx, so you can change
 * the content here without touching the design.
 */
const aboutPageContent = {
  bio: (
    <>
      Welcome to my homepage! I&apos;m Md Habibur Rahman, a first year PhD student in Computer
      Science at <SmartLink href="https://www.odu.edu/">Old Dominion University</SmartLink>. I have
      completed my Master of Science in Computer Science from{" "}
      <SmartLink href="https://juniv.edu/department/cse">Jahangirnagar University</SmartLink> and
      pursued a Bachelor of Science in Computer Science and Engineering from{" "}
      <SmartLink href="https://daffodilvarsity.edu.bd/">
        Daffodil International University
      </SmartLink>
      .
      <br />
      Previously I have worked with{" "}
      <SmartLink href="https://juniv.edu/teachers/makazad">Prof. Md Abul Kalam Azad</SmartLink> and{" "}
      <SmartLink href="https://www.researchgate.net/profile/Md-Ismail-Jabiullah">
        Prof. Md Ismail Jabiullah
      </SmartLink>
      . I also had the opportunity to collaborate with{" "}
      <SmartLink href="https://taminulislam.github.io/">Md Taminul Islam</SmartLink> in a project.
      Outside of my academic pursuits, you&apos;ll find me immersed in a good book, exploring the
      unknown via travelling, or enjoying my leisure time with video games such as{" "}
      <SmartLink href="https://www.fortnite.com/">Fortnite</SmartLink> and{" "}
      <SmartLink href="https://playvalorant.com/en-gb/">Valorant</SmartLink>. Thanks for visiting!
    </>
  ),
  researchTitle: "Research Interests",
  researchInterests: [
    "Computer Security & Privacy",
    "Decentralized System Security",
    "Applied Cryptography",
    "Adversarial Machine Learning",
  ],
};

export { aboutPageContent };
