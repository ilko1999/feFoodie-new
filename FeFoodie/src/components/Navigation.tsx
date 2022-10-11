import React from 'react';
import LoginSVG from '../assets/svg/LoginSVG';
import RegisterSVG from '../assets/svg/RegisterSVG';
import Button from './BadgeBtn';

function Navigation() {
  return (
    <nav className="mx-auto flex max-w-3xl items-center justify-between p-4">
      <a
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-3xl "
        href="/"
      >
        🧁
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-white">
        <li className="px-2">
          <Button title={'login'} hrefLink={'login'}>
            <LoginSVG className={'w-4 h-4'} />
          </Button>
        </li>

        <li>
          <Button title={'register'} hrefLink={'register'}>
            <RegisterSVG className={'w-4 h-4'} />
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
