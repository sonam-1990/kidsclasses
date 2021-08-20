import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ACTIVITIES } from '../shared/activities';
import {PARTNERS} from '../shared/partners';
import { FlatList } from 'react-native';
import { ListItem ,Card} from 'react-native-elements';




class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
           activities: ACTIVITIES
        
        };
    }
    static navigationOptions = {
        title: 'Home'
    }


    render() {
        const { navigate } = this.props.navigation;
        const renderClassItem = ({item}) => {
            return (
                <Card title='name' image={require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}>
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
                data={this.state.activities}
                renderItem={renderClassItem}
                keyExtractor={item => item.id.toString()}
            />
            
        );
    }
}
           
export default Home;

