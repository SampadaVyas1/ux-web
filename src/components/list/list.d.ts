import "@/utils/types/types";
export interface IListItem {
  item: string;
  icon: ReactNode;
}

export interface IListProps {
  listItems: IListItem[];
  listTitle?: string;
  itemTextVariant?: TypographyVariant;
  listTitleVariant?: TypographyVariant;
  customStyleOnTitle?: string;
  customStyleOnListItems?: string;
}
