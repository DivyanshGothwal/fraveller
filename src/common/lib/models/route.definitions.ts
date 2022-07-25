export interface FravellerRoutes{
  id: string;
  key: string;
  path: string;
  element: any;
  childRoutes?: FravellerRoutes[],
  title: string,
  customProperties?: {
    [key: string]: any
  }
}
