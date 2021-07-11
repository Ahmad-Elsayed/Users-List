import React from 'react';
import { FlatList, View } from 'react-native';
import EmptyPage from '../EmptyPage';
import styles from './styles';
import ListHeader from '../ListHeader';

const List = ({ title, list, isLoading, ...props }) => {
  return (
    <FlatList
      data={list}
      ListHeaderComponent={() => <ListHeader title={title} />}
      ListEmptyComponent={() => <EmptyPage isLoading />}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.containerStyle}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      ListFooterComponent={() => <View style={styles.footerStyle} />}
      {...props}
    />
  );
};

export default List;
