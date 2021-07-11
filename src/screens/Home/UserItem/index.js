import React, { useContext } from 'react';
import ListItem from '../../../components/ListItem';
import { Pressable } from 'react-native';
import UserDetailsView from '../UserDetailsView';
import styles from './styles';
import { DetailsOverlayContext } from '../../../components/DetailsOverlayWrapper';

const getUserName = ({ title, first, last }) => {
  if (!title || !first || !last) return;

  return `${title}: ${first} ${last}`;
};

const UserItem = props => {
  const { setOverlayDetails } = useContext(DetailsOverlayContext);
  const { name, phone, picture } = props;
  const userFullName = getUserName(name || {});

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.activeStyle}
      onLongPress={() => {
        setOverlayDetails(() => (
          <UserDetailsView {...props} name={userFullName} />
        ));
      }}>
      <ListItem
        description={phone}
        image={picture?.medium}
        title={userFullName}
      />
    </Pressable>
  );
};

export default UserItem;
