import GithubPic from "../assets/github_150.avif";
import { cx } from "./cx";

export const Github = ({ className, size = 24 }) => (
    <img
        src={GithubPic}
        alt="Github"
        width={size}
        height={size}
        className={cx(className, "rounded-full bg-background dark:bg-foreground")}
    />
);
