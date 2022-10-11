import React from 'react';

function Button({
  title,
  hrefLink,
  children,
}: {
  title: string;
  hrefLink: string;
  children: React.ReactElement;
}): React.ReactElement {
  return (
    <>
      <a
        href={`/${hrefLink}`}
        className="bg-pink-100 hover:bg-pink-200 text-pink-800 text-sm font-medium mr-2 px-2.5 py-2 rounded dark:bg-pink-200 dark:text-pink-800 dark:hover:bg-pink-300 transition inline-flex items-center"
      >
        <span className="pr-2">{children}</span>
        {title}
      </a>
    </>
  );
}

export default Button;
