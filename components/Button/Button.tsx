/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = ({
  children,
  size,
  img,
  className,
  color,
  ...props
}: ButtonProps): JSX.Element => {

  return (
    <button
      className={cn(styles.button, className, {
        // [styles.img]: size === "img",
        [styles.gradient]: color === "gradient",
        [styles.red]: color === "red",
        [styles.redOpacity]: color === "redOpacity",
        [styles.gray]: color === "gray",
        [styles.icon]: color === "icon",
      })}
      {...props}
    >
      {children && <p className={styles.button__text}>{children}</p>}
      {img && <img src={img} className={styles.button__img}></img>}
    </button>
  );
};
