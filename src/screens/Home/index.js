import React from 'react';
import { SafeAreaView } from 'react-native';
import useFetchUsers from './useFetchUsers';
import useThemedColors from '../../utilities/useThemedColors';
import { getUserName } from './utils';
import styles from './styles';
import {
  UserItem,
  UserDetailsView,
  List,
  useOverlayDetails,
  withDetailsOverlayWrapper,
} from '../../components';

const Home = () => {
  const { isLoading, userList } = useFetchUsers();
  const { colors } = useThemedColors();
  const { setOverlayDetails } = useOverlayDetails();

  function renderUserDetails({ item }) {
    const userFullName = getUserName(item.name);

    return (
      <UserItem
        name={userFullName}
        phone={item.phone}
        picture={item.picture}
        onLongPress={() => {
          setOverlayDetails(<UserDetailsView {...item} name={userFullName} />);
        }}
      />
    );
  }

  return (
    <SafeAreaView
      style={[styles.containerStyle, { backgroundColor: colors.background }]}>
      <List
        isLoading={isLoading}
        list={userList}
        keyExtractor={item => item.login?.uuid}
        renderItem={renderUserDetails}
        title="Users"
      />
    </SafeAreaView>
  );
};

export default withDetailsOverlayWrapper(Home);
