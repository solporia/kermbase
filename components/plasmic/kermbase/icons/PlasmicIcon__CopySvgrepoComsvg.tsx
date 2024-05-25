// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopySvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopySvgrepoComsvgIcon(props: CopySvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148-1.126.152-2.037.472-2.755 1.193-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27.127-.948.413-1.856 1.147-2.593.734-.737 1.639-1.024 2.583-1.152.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0015.24 2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.6 11.397c0-2.726 0-4.089.844-4.936.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847-.844-.847-.844-2.21-.844-4.936v-4.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CopySvgrepoComsvgIcon;
/* prettier-ignore-end */
