import React from 'react';
import {
  Text,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';
import styles from '../styles/style'
import Jobs from '../../components/CustomBox/jobs';
import Colors from '../../constants/Colors';
export default class allJobsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView style={[styles.container,{backgroundColor: Colors.primary_gray}]}>
      <Jobs dateTime="2019-08-20" jobDescription="WV Rwanda hereby invites all companies and firms specialized in the field to participate in the competition on open equal conditions for this pre-qualification. Interested companies registered in Rwanda are hereby invited to express their interests for one or several of the following lots. The selected vendor will work with World Vision for a period of two (2) years."
      jobTitle="Pre-Qualifalication for ICT"
      />
      <Jobs dateTime="2019-08-05" jobDescription="Well-printed bids, properly bound and presented in 4 copies one of which is the original must reach the reception of Irembo Ltd at the address mentioned above Not later than 05/09/2019 at 10.00am.  Late bids will be rejected and returned unopened."
      jobTitle="Recruitment of car wash service"
      />
      <Jobs dateTime="2019-07-12" jobDescription="Partners In Health (PIH) is an international health organization relentlessly committed to improving the health of the poor and marginalized. PIH partners with local governments to build local capacity and works closely with impoverished communities to deliver high-quality health care, address the root causes of illness, train providers, advance research, and advocate for global policy change."
      jobTitle="Infectious Diseases Lab Technician"
      />
      <Jobs dateTime="2019-07-03" jobDescription="Our platform deployed in Rwanda today reflects the IT landscape of a couple of years ago. It's hosted locally in Kigali, on VMWare instances managed with Chef. However, we're committed to a full-stack refresh, making use of our new distributed architecture - meaning that in 12 months' time, this platform will be a hybrid of local services running in Docker (and Kubernetes)
       working with global services in our AWS hosted Kubernetes model."
      jobTitle="Freelance Trainers"
      />
        {/* <View style={styles.caption}>
        <Text style={styles.empty}>No Job yet!</Text>
      </View> */}
      </ScrollView>
    );
  }
}
