import React, { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IProps {
    className?: string;
};

const Container = ({ children, className }: PropsWithChildren<IProps>) => (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
        {children}
    </div>
);

export default Container;
