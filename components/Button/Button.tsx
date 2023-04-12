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
        [styles.sm]: size === "sm",
        [styles.b]: size === "b",
        [styles.img]: size === "img",
        [styles.disabled]: color === "disabled",
        [styles.included]: color === "included",
      })}
      {...props}
    >
      {children && <p className={styles.button__text}>{children}</p>}
      {img && <img src={img} className={styles.button__img}></img>}
    </button>
  );
};
