import React, { FC } from 'react';
import clsx from 'clsx';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface IProps {
  text: string;
  size?: TitleSize;
  className?: string;
}

export const Title: FC<IProps> = ({ text, size = 'sm', className }) => {
  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  } as const;

  const mapClassNameBySize = {
    xs: 'text-[16px] ys-text',
    sm: 'text-[22px] ys-text',
    md: 'text-[26px] ys-text',
    lg: 'text-[32px] ys-display',
    xl: 'text-[40px] ys-display',
    '2xl': 'text-[48px] ys-display',
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className) },
    text,
  );
};
