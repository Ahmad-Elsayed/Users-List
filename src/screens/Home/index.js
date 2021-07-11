import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import useFetchUsers from './useFetchUsers';
import List from '../../components/List';
import UserItem from './UserItem';
import DetailsOverlayWrapper from '../../components/DetailsOverlayWrapper';

const Home = () => {
  const { isLoading, userList } = useFetchUsers();

  return (
    <DetailsOverlayWrapper>
      <SafeAreaView style={styles.containerStyle}>
        <List
          isLoading={isLoading}
          list={userList}
          keyExtractor={item => item.login?.uuid}
          renderItem={({ item }) => <UserItem {...item} />}
          title="Users"
        />
      </SafeAreaView>
    </DetailsOverlayWrapper>
  );
};

export default Home;
