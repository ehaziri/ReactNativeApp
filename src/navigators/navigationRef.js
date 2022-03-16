import { CommonActions } from '@react-navigation/native';

let navigator;
export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      // name: routeName == 'Home' ? 'Famobi' : routeName,
      name: routeName = 'Famobi',
      params: params
    })
  );
};
