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
        className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-2 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300 transition inline-flex items-center"
      >
        <span className="pr-2">{children}</span>
        {title}
      </a>
    </>
  );
}

export default Button;
