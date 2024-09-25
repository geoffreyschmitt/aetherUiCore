'use client';
import React, { useRef, useState } from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './Tabs.styles';
import { TTab, TTabs } from './Tabs.types';

export const Tabs = ({
  className,
  tabList = [],
  initialSelectedTabIndex = 0,
  onTabChange,
  componentFallBack,
  ...props
}: TTabs) => {
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] =
    useState<number>(initialSelectedTabIndex);
  const titleListRef = useRef<HTMLDivElement>(null);

  if (!tabList.length) {
    return componentFallBack ?? null;
  }

  const handleTabChange = (index: number) => () => {
    if (onTabChange) {
      onTabChange(index);
    }

    setCurrentSelectedTabIndex(index);
  };

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLElement>) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowLeft') {
      nextIndex =
        (currentSelectedTabIndex - 1 + tabList.length) % tabList.length;
    } else if (e.key === 'ArrowRight') {
      nextIndex = (currentSelectedTabIndex + 1) % tabList.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      handleTabChange(nextIndex);
      const nextTitle = titleListRef.current?.querySelector(
        `.tabs__title:nth-child(${nextIndex + 1})`,
      ) as HTMLElement;
      nextTitle.focus();
    }
  };

  const getTabButtonRender = (tab: TTab, index: number) => {
    if (!tab.content) {
      return null;
    }
    return (
      <button
        key={tab.id}
        type="button"
        role="tab"
        aria-selected={index === currentSelectedTabIndex ? 'true' : 'false'}
        aria-controls={`tabpanel-${index}`}
        id={`tabpanel-control-${index}`}
        data-test={`tabpanel-control-${index}`}
        tabIndex={index === currentSelectedTabIndex ? undefined : -1}
        className={classNames('tabs__title', {
          'tabs__title--is-current': index === currentSelectedTabIndex,
        })}
        onClick={handleTabChange(index)}
        onFocus={handleTabChange(index)}
      >
        {tab.title}
      </button>
    );
  };

  const getTabContentRender = (tab: TTab, index: number) => {
    if (!tab.content) {
      return null;
    }
    return (
      <div
        key={tab.id}
        role="tabpanel"
        aria-labelledby={`tabpanel-control-${index}`}
        id={`tabpanel-${index}`}
        data-test={`tabpanel-${index}`}
        className={classNames('tabs__content', {
          'tabs__content--is-current': index === currentSelectedTabIndex,
        })}
      >
        {tab.content}
      </div>
    );
  };

  return (
    <RootElement
      data-testid={'Tabs'}
      {...props}
      className={classNames('tabs', className)}
    >
      <menu
        role="tablist"
        className={'tabs__title-list'}
        onKeyDown={handleKeyEvent}
        ref={titleListRef}
      >
        {tabList?.map((tab, index) => getTabButtonRender(tab, index))}
      </menu>
      {tabList?.map((tab, index) => getTabContentRender(tab, index))}
    </RootElement>
  );
};
