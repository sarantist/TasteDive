import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../appNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'DetailedView':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'DetailedView' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}