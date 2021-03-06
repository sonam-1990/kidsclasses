import React, { Component } from 'react';
import Classes from './ClassesComponent';
import Home from './HomeComponent';
import ClassInfo from './ClassinfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import { View, Platform ,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchActivities, fetchReviews, 
    fetchPartners } from '../redux/ActionCreators';
   
   
    const mapDispatchToProps = {
        fetchActivities,
        fetchReviews,
        fetchPartners
    };

const ClassesNavigator = createStackNavigator(
    {
        Classes: 
        { screen: Classes ,
          navigationOptions: ({navigation}) => ({
                   headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
                  })
        },
        ClassInfo: { screen: ClassInfo }
    },
    {
        initialRouteName: 'Classes',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0F5FE7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#0F5FE7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#0F5FE7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#0F5FE7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Classes: {
             screen: ClassesNavigator,
             navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
             }
           },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'About Us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            drawerLabel: 'Contact Us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
},
    {
        drawerBackgroundColor: '#90B4F1'
    }
);

const AppNavigator = createAppContainer(MainNavigator)


class Main extends Component {
    componentDidMount() {
        this.props.fetchActivities();
        this.props.fetchReviews();
        
        this.props.fetchPartners();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main)