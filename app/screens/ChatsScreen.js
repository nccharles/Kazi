import React from 'react';
import { ScrollView, View } from 'react-native';
import { MonoText } from '../components/StyledText';
import styles from './styles/style'
export default class ChatsScreen extends React.Component {

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>ChatsScreen</MonoText>
          </View>
          </View>
          </ScrollView>
    );
  }
}
