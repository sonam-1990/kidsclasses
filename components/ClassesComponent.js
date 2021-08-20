import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { ACTIVITIES } from '../shared/activities';
import { PARTNERS } from '../shared/partners';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Classes'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderClassItem = ({item}) => {
            return (
               
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ClassInfo', { partnerId: item.id })}
                    leftAvatar={{ source: require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}}
                />
                
            );
        };

        return (
            
            <FlatList
                data={this.state.partners}
                renderItem={renderClassItem}
                keyExtractor={item => item.id.toString()}
            />
            
        );
    }
}
           

export default Classes;