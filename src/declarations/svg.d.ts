declare module "*.svg?component-react" {
  import * as React from "react";

  const content: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default content;
}
