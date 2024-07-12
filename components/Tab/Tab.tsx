import React, { Children, ReactNode } from "react";

type TabProps = {
  title: string;
};

function Tab({ title }: TabProps) {
  return <button className="tablinks">{title}</button>;
}

export { Tab };
