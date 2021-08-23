import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, ListItem ,Avatar} from 'react-native-elements';
import { ACTIVITIES } from '../shared/activities';
import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Tile } from 'react-native-elements';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};


class Classes extends Component {
    

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
                    leftAvatar ={{source:{uri: baseUrl + item.image}}}
                // leftAvatar={{ source: require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}}
                />
               
                
            );
        };

        return (
            
            <FlatList
                data={this.props.partners.partners}
                renderItem={renderClassItem}
                keyExtractor={item => item.id.toString()}
            />
            
        );
    }
}
           

export default connect(mapStateToProps)(Classes);