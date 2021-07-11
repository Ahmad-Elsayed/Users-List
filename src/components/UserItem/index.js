import React from 'react';
import ListItem from '../ListItem';
import { Pressable } from 'react-native';
import styles from './styles';

const UserItem = ({ name, phone, picture, onLongPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.activeStyle}
      onLongPress={onLongPress}>
      <ListItem description={phone} image={picture?.medium} title={name} />
    </Pressable>
  );
};

export default UserItem;
