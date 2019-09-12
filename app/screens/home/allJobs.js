import React from 'react';
import {
  Text,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';
import styles from '../styles/style'
import Jobs from '../../components/CustomBox/jobs';
import { Joblist } from '../../data/availableJobs';
export default class allJobsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _renderJobsList() {
    if (!Joblist) {
      return (
        <View style={styles.caption}>
          <Text style={styles.empty}>No posted Job yet!</Text>
        </View>
      )
    }
    return (
      <ScrollView >
        {Joblist.map((Job, i) =>
          <View key={i}>
            <Jobs postedAt={Job.date}
              onPress={() => this.props.navigation.navigate('Details', { Job: Job })}
              deadline={Job.deadline} user={Job.user} jobDescription={Job.description}
              jobTitle={Job.name}
            />
          </View>
        )}
      </ScrollView>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderJobsList()}
      </View>
    );
  }
}
