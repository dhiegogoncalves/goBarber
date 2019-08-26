import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';
import Background from '../../../components/Background';
import { Container, Providerlist, Provider, Avatar, Name } from './styles';

export default function SelectDateTime({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {}, []);

  return <Background></Background>;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SelectProvider')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
