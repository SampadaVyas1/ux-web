export interface IFooterListObj {
  label: string;
  route: string;
  icon?: ReactElement;
}

export interface INewsLetterType {
  email: string;
}

export interface INewLetterPayload {
  email: string;
  formType: string;
}

export interface IUnSubscribe {
  userId: string | string[] | undefined;
}
