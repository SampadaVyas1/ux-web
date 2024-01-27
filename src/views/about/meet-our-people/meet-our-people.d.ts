export interface IPeopleType {
  name: string;
  designation: string;
  profileImg: any;
  hoverImg: any;
  linkedInUrl?: string;
}
export interface IMeetOurPeople {
  data?: IPeopleType[];
}
