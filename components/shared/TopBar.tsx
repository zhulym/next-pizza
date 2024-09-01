import React, { FC } from 'react';

import { cn } from '@/lib/utils';

import { Container } from './Container';
import { SortPopup } from './SortPopup';
import { Categories } from './Categories';

interface IProps {
  className?: string;
}

export const TopBar: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
