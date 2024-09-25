import { ReactNode } from 'react';

import { TComponentProps } from '@/aether-ui/utils';

type TAccordionItem = Readonly<{
  title: ReactNode;
  content: ReactNode;
  initialOpen?: boolean;
}>;

type TAccordionItemList = TAccordionItem[];

export type TAccordion = TComponentProps &
  Readonly<{
    accordionItemList?: TAccordionItemList;
    accordionId: string;
    allowOnlyOneOpenElement?: boolean;
    componentFallBack?: ReactNode;
  }>;
