import React from "react";

interface FooterIconsProps {
  iconName: any;
  pageLink: string;
}

export default function FooterIcons({ iconName, pageLink }: FooterIconsProps) {
  const Icon = iconName;

  return (
    <div className="bg-white p-3 h-15 rounded-2xl">
      <a target="_blank" href={pageLink}>
        <span>
          <Icon />
        </span>
      </a>
    </div>
  );
}
