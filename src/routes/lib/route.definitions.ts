import { FravellerRoutes } from '@zuava/web-app-ui/common';
import { NotFoundComponent } from '@zuava/web-app-ui/component';
import { ClientContainer, FravellerPageContainer, TravellerContainer } from '@zuava/web-app-ui/pages';
import { CLIENT, DEFAULT, TRAVELLER } from './route.constants';

export const fravellerRoutes: FravellerRoutes[] = [
  {
    path: '/',
    id: 'Fraveller',
    key: 'Fraveller',
    title: 'Fraveller',
    element: FravellerPageContainer,
  },
  {
    path: CLIENT,
    id: CLIENT,
    key: CLIENT,
    title: CLIENT,
    element: ClientContainer,
  },
  {
    path: TRAVELLER,
    id: TRAVELLER,
    key: TRAVELLER,
    title: TRAVELLER,
    element: TravellerContainer,
  },
  {
    path: DEFAULT,
    id: 'Not Found',
    key: 'Not Found',
    title: 'Not Found',
    element: NotFoundComponent,
  },
];
