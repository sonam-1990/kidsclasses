import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ACTIVITIES } from '../shared/activities';
import {PARTNERS} from '../shared/partners';
import { FlatList } from 'react-native';
import { ListItem ,Card} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        activities: state.activities
       
    };
};



class Home extends Component{
    
    static navigationOptions = {
        title: 'Home'
    }
   


    render() {
        const { navigate } = this.props.navigation;
        const renderClassItem = ({item}) => {
            return (
               
               
                <Card title={item.name} image={{uri: baseUrl + item.image}}>
                <ListItem
                  title={item.name}
                    subtitle={item.description}
                  //  onPress={() => navigate('ClassInfo', { partnerId: item.id })}
                  //  leftAvatar={{ source: require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}}
                />
                </Card>
              
            );
        };

        return (
            
            <FlatList
                data={this.props.activities.activities}
                renderItem={renderClassItem}
                keyExtractor={item => item.id.toString()}
            />
            
        );
    }
}
           
export default connect(mapStateToProps)(Home);

