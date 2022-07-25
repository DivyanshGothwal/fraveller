import { FravellerRoutes } from 'common/lib/models/route.definitions';
import React, { PureComponent } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { fravellerRoutes } from 'routes/lib/route.definitions';

export class AppComponent extends PureComponent {
  getRoutes = (routes?: FravellerRoutes[]) => routes?.map(({
    element: Component, key, path, childRoutes,
  }) => (
    <Route
      key={key}
      path={path}
      element={(
        <>
          <Component />
          {childRoutes?.length && <Outlet />}
        </>
        )}
    >
      {this.getRoutes(childRoutes)}
    </Route>
  ));

  render() {
    return (
      <div className="w-100 h-100">
        <Routes>
          {this.getRoutes(fravellerRoutes)}
        </Routes>
      </div>
    );
  }
}
