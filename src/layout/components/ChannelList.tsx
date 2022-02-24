const tabs = [
  { name: 'Channel 1', href: '#', current: true },
  { name: 'Channel 2', href: '#', current: false },
  { name: 'Channel 3', href: '#', current: false },
  { name: 'Channel 4', href: '#', current: false },
  { name: 'Channel 5', href: '#', current: false },
  { name: 'Channel 6', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export const ChannelList = () => {
  return (
    <div>
      <nav
        className="flex overflow-x-auto relative z-0  divide-x no-scrollbar "
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              tab.current
                ? 'text-white bg-indigo-500  hover:bg-indigo-600 '
                : 'dark:text-white  bg-gray-300 dark:bg-gray-800 ',
              ' group relative min-w-30 flex-1   hover:bg-indigo-500  hover:text-white  py-4 px-4  text-center border-b border-t dark:border-white '
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            <span>{tab.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
