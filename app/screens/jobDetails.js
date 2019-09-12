import React, { Component } from 'react';
import {
    StyleSheet,
    Animated,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    Platform,
    TouchableOpacity, Share
} from 'react-native';
import * as Icon from '@expo/vector-icons'
import JobHeader from '../components/Header/jobHeader';
import Colors from '../constants/Colors';
const { width, height } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class jobDetails extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        Job: this.props.navigation.state.params.Job,
        scrollY: new Animated.Value(0),
    }
    _renderScrollViewContent() {
        const { price } = this.state.Job;
        if (!price) {
            return
        }
        return (
            <View>
                <Text style={styles.info}>{`${price} Rwf`}</Text>
            </View>
        );
    }
    onShare = async (Job) => {
        try {
            const result = await Share.share({
                message:
                    `${Job.description}`,
                title: Job.name
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    render() {
        const { Job } = this.state;
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}

                >
                    <View style={styles.scrollViewContent}>
                        <View style={styles.content}>
                            <View style={styles.itemContainer}>
                                <Icon.FontAwesome name="briefcase" color={Colors.primary} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={styles.infoTitle}>Job Name</Text>
                                    <Text style={styles.info}>{Job.baseJob}</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Icon.Entypo name="info-with-circle" color={Colors.primary} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={styles.infoTitle}>Job Description  </Text>
                                    <Text style={styles.info}>{Job.description}</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Icon.Entypo name="location-pin" color={Colors.primary} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={styles.infoTitle}>Location  </Text>
                                    <Text style={styles.info}>{Job.location}</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Icon.MaterialCommunityIcons name="calendar-clock" color={Colors.errorBackground} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={[styles.infoTitle, { color: Colors.errorBackground }]}>APPLICATION DEADLINE </Text>
                                    <Text style={styles.info}>{`${Job.deadline}`}</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Icon.Entypo name="credit" color={Colors.primary} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={styles.infoTitle}>Price</Text>
                                    {this._renderScrollViewContent()}
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Icon.Entypo name="info-with-circle" color={Colors.primary} style={{ opacity: Platform.OS === 'ios' ? 1 : 0.7 }} size={23} />
                                <View style={styles.infocontent}>
                                    <Text style={styles.infoTitle}>Requirements  </Text>
                                    <Text style={styles.info}>{Job.require}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Icon.Entypo name="export" color={Colors.primary_white} size={23} />
                                <Text style={styles.buttonText}>Apply Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Animated.View style={[styles.header, { height: headerHeight }]}>
                    <View style={styles.bar}>
                        <Text style={styles.title}>{Job.baseJob}</Text>
                    </View>
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
                        ]}
                        source={require('../../assets/images/job-search.jpg')}
                    />
                </Animated.View>
                <JobHeader onPress2={() => this.props.navigation.goBack()}
                    onPress1={() => this.onShare(Job)}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary_white,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.primary,
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        marginTop: 20,
        height: 25,
        paddingLeft: 50,
        alignItems: 'flex-start',
    },
    title: {
        backgroundColor: 'transparent',
        color: Colors.primary_white,
        paddingHorizontal: 5,
        fontSize: width / 25,
        fontFamily: 'font-bold',
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    eMage: {
        width: width,
        opacity: 0.8,
        height: height / 2,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        elevation: 3,
        marginTop: height / 2.2,
        position: 'absolute',
    },
    content: {
        elevation: 3,
        width: width,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary_white,
        marginVertical: 2,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        paddingVertical: 8,
        paddingLeft: 10,
    },
    infoTitle: {
        fontSize: width / 25,
        color: Colors.primary,
        opacity: Platform.OS === 'ios' ? 1 : 0.8,
        paddingHorizontal: 10,
        fontFamily: 'font-regulary',
    },
    info: {
        fontSize: width / 30,
        opacity: Platform.OS === 'ios' ? 1 : 0.8,
        paddingLeft: 12,
        paddingRight: 10,
        color: Colors.primary_black,
        fontFamily: 'font-regulary',
    },
    buttonContainer: {
        marginVertical: 20,
        marginRight: 10,
        height: height / 14,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: width - 60,
        elevation: 3,
        borderRadius: 12,
        backgroundColor: Colors.secondary,
    },
    buttonText: {
        color: Colors.primary_white,
        fontFamily: 'font-bold',
    },
    linearseparator: {
        flex: 1,
        height: 2,
        width: width,
        margin: 0
    },
});

