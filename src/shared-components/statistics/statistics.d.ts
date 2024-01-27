export interface IRecord {
  title: string;
  content: string;
}

export interface IPlatform {
  customClass?: string;
  records: IRecord[];
}
