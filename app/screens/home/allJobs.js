import React from 'react';
import {
  Text,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';
import styles from '../styles/style'
import Jobs from '../../components/CustomBox/jobs';
import * as firebase from 'firebase'
import _ from 'lodash'
export default class allJobsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    Joblist: []
  }

  async componentDidMount() {
    await firebase.database().ref(`/Jobs/`)
      .on('value', async snapshot => {
        const jobsData = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid }
        })
        if (!jobsData !== undefined) {
          this.setState({ Joblist: jobsData })
        }
      })
  }
  _renderJobsList() {
    const { Joblist } = this.state
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
            <Jobs postedAt={Job.postedAt}
              onPress={() => this.props.navigation.navigate('Details', { Job: Job })}
              deadline={Job.deadline} user={Job.user} jobDescription={Job.description}
              jobTitle={Job.baseJob}
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
