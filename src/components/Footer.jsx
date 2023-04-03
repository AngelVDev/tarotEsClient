import React from "react";
import Logo from "../assets/Logo";

function Footer() {
  return (
    <footer
      className='bg-stone-100
      dark:bg-gradient-to-b from-indigo-950 to-gray-900 dark:text-gray-400 px-4 py-8'
    >
      <div className='container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0'>
        <div className='flex flex-row pr-3 space-x-4 sm:space-x-8'>
          <a
            rel='noopener noreferrer'
            href='https://not-generic-portfolio.vercel.app/'
            target='_blank'
          >
            <Logo />
          </a>
          <ul className='flex flex-wrap items-center space-x-4 sm:space-x-8'>
            <li>
              <a rel='noopener noreferrer' href='/'>
                Terms of Use
              </a>
            </li>
            <li>
              <a rel='noopener noreferrer' href='/'>
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className='flex flex-wrap pl-3 space-x-4 sm:space-x-8'>
          <li>
            <a rel='noopener noreferrer' href='/'>
              Instagram
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' href='/'>
              Facebook
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel='noopener noreferrer'
              href='https://twitter.com/AngelScutariV'
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
