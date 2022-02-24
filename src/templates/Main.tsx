import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="dark">
    {props.meta}

    <div className="dark:bg-gray-800">{props.children}</div>
  </div>
);

export { Main };
