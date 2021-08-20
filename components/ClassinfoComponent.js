import React, { Component } from 'react';
import { Text, View,FlatList } from 'react-native';
import { Card,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
//import { ACTIVITIES } from '../shared/activities';
import { PARTNERS } from '../shared/partners';
import {REVIEWS} from '../shared/reviews';

function RenderClass(props) {
    const {partner} = props;

    if (partner) {
        return (
            <Card
                featuredTitle={partner.name}
              //  image={require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}
              
            >
                <Text style={{margin: 10}}>
                    {partner.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}
function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class ClassInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS,
            reviews:REVIEWS,
            favorite: false
        };
    }

    static navigationOptions = {
        title: 'Class Information'
    }
    markFavorite() {
        this.setState({favorite: true});
    }

    render() {
        const partnerId = this.props.navigation.getParam('partnerId');
        const partner = this.state.partners.filter(partner => partner.id === partnerId)[0];
        const reviews = this.state.reviews.filter(review => review.partnerId === partnerId);
        return (
          <ScrollView>
        <RenderClass partner={partner} 
        favorite={this.state.favorite}
        markFavorite={() => this.markFavorite()}/>
        <RenderReviews reviews={reviews} />
       
        </ScrollView>
        );
    }
}

export default ClassInfo;