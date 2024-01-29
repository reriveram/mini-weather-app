import { FunctionComponent } from "react";
import { textClassName, textVariants } from "./text.css";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function Text({ children, className, ...props }: TextProps & textVariants) {
  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
}

export default Text;
