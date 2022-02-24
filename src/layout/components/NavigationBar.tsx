import { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon, MenuIcon, CurrencyDollarIcon } from '@heroicons/react/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'News', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export const NavigationBar = () => {
  return (
    <div>
      <Disclosure as="nav" className="dark:bg-slate-800 shadow ">
        {({ open }) => (
          <>
            <div className="px-4  sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex items-center mr-2 -ml-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex shrink-0 items-center">
                    <img
                      className="block w-auto h-8 lg:hidden"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden w-auto h-8 lg:block"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:flex md:items-center md:ml-6 md:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="shrink-0">
                    <button
                      type="button"
                      className="inline-flex relative items-center py-2 px-4 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-sm"
                    >
                      <CurrencyDollarIcon
                        className="mr-2 -ml-1 w-5 h-5"
                        aria-hidden="true"
                      />
                      <span>Wallet</span>
                    </button>
                  </div>
                  <div className="hidden md:flex md:shrink-0 md:items-center md:ml-4">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 ">
                      <div>
                        <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 focus:z-10 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5 sm:px-6">
                  <div className="shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="px-2 mt-3 space-y-1 sm:px-3">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block py-2 px-3 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
