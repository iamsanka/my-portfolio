"use client";

import React from "react";

type ButtonVariants = "primary" | "secondary" | "outline";

interface BaseProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    as = "button",
    ...rest
  } = props as any;

  const baseStyles =
    "px-5 py-3 rounded-lg font-semibold transition inline-block";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles =
      "bg-[var(--accent)] text-white dark:bg-[var(--accent)] dark:text-white hover:opacity-90";
  }

  if (variant === "secondary") {
    variantStyles =
      "bg-[var(--secondary)] text-[var(--textMain)] dark:bg-[var(--secondary)] dark:text-[var(--textMain)] border border-gray-300 dark:border-gray-700 hover:opacity-90";
  }

  if (variant === "outline") {
    variantStyles =
      "border border-[var(--textMain)] text-[var(--textMain)] dark:border-[var(--textMain)] dark:text-[var(--textMain)] hover:bg-[var(--primary)]";
  }

  const combined = `${baseStyles} ${variantStyles} ${className}`;

  if (as === "a") {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorProps} className={combined}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={combined}>
      {children}
    </button>
  );
}
