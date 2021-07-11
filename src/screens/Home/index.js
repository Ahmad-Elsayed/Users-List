import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import useFetchUsers from './useFetchUsers';
import List from '../../components/List';
import UserItem from './UserItem';

const Home = () => {
  const { isLoading, userList } = useFetchUsers();

  return (
    <SafeAreaView style={styles.containerStyle}>
      <List
        isLoading={isLoading}
        list={userList}
        keyExtractor={item => item.login?.uuid}
        renderItem={({ item }) => <UserItem {...item} />}
        title="Users"
      />
    </SafeAreaView>
  );
};

export default Home;
