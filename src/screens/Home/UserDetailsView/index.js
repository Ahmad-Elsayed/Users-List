import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const UserDetailsView = ({
  gender,
  name,
  location,
  email,
  dob,
  cell,
  phone,
  nat,
  picture,
}) => {
  const userDetails = [
    { title: 'Name', value: name },
    { title: 'Gender', value: gender },
    { title: 'Email', value: email },
    { title: 'City', value: location?.city },
    { title: 'State', value: location?.state },
    { title: 'Country', value: location?.country },
    { title: 'Age', value: dob?.age },
    {
      title: 'Date Of Birth',
      value: new Date(dob.date).toDateString(),
    },
    { title: 'Phone', value: phone },
    { title: 'Cell', value: cell },
    { title: 'Nationality', value: nat },
  ];

  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: picture.large }} />
      <View style={styles.detailsContainerStyle}>
        {userDetails.map(detailsItem =>
          detailsItem.value ? (
            <View style={styles.detailsItemStyle} key={detailsItem.title}>
              <Text style={styles.detailsItemTitleStyle}>
                {detailsItem.title}
              </Text>
              <Text style={styles.detailsItemTitleStyle}>
                {detailsItem.value}
              </Text>
            </View>
          ) : null,
        )}
      </View>
    </View>
  );
};

export default UserDetailsView;
