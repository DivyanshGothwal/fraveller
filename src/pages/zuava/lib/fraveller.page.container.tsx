import { withRouter } from '@zuava/web-app-ui/component';
import { WithRouter } from 'common/lib/models/with-router';
import React, { PureComponent } from 'react';
import { CLIENT, TRAVELLER } from 'routes/lib/route.constants';
import { FravellerComponent } from './fraveller.page.component';

interface FravellerPageContainerState{
  test: string;
}
interface FravellerPageContainerProps extends WithRouter {
}

class Container extends PureComponent<FravellerPageContainerProps, FravellerPageContainerState> {
  constructor(props: FravellerPageContainerProps) {
    super(props);
    this.onClickClient = this.onClickClient.bind(this);
    this.onClickTraveller = this.onClickTraveller.bind(this);
  }

  onClickClient() {
    const { router: { navigate } } = this.props;
    navigate(CLIENT);
  }

  onClickTraveller = () => {
    const { router: { navigate } } = this.props;
    navigate(TRAVELLER);
  };

  render() {
    return (
      <FravellerComponent
        onClickClient={this.onClickClient}
        onClickTraveller={this.onClickTraveller}
      />
    );
  }
}

export const FravellerPageContainer = withRouter(Container);
