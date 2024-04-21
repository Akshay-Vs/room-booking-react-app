import { LogoLarge, Typography } from '@/shared/components';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-16">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <LogoLarge />

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Akshay-Vs/systemic-altruism-machine-test"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/me-akshay-vs/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              SheShare
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
            <Typography className="text-gray-500 ms-5">
              <Typography.Paragraph>
                Made with <FontAwesomeIcon className="mx-2" icon={faHeart} /> by
                Akshay vs
              </Typography.Paragraph>
            </Typography>

            <Link href="https://github.com/akshay-vs">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                icon={faGithub}
              />
            </Link>

            <Link href="https://www.linkedin.com/in/me-akshay-vs/">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                icon={faLinkedin}
              />
            </Link>

            <Link href="mailto:me.akshay.vs">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                icon={faEnvelope}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
