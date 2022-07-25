import React, { PureComponent } from 'react';
import { TravellerComponent } from './traveller.component';

class Container extends PureComponent {
  render() {
    return <TravellerComponent />;
  }
}

export const TravellerContainer = Container;
