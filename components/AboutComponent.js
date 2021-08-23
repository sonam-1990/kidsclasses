import React, { Component } from 'react';
import {ScrollView,Text } from 'react-native';
import { Card} from 'react-native-elements';


function Mission(){
    return (
    <Card title="Our Mission"
    image={require('./images/aboutus/img1.jpg')}>
        <Text style={{ margin: 10 }}>

        Our vision is to ignite human greatness in each child by identifying and nurturing each
        child's unique gift, to foster in them a love of continuous learning, to develop their talent for
        creative thinking and build respect for hard work.We strive towards self-awareness, curiosity, innovation, perseverance, passion, adaption and courageous
         learning, the same values we aspire our students to achieve.
        </Text>
    </Card>
);
}

class About extends Component {
    static navigationOptions = {
        title: 'About us'
    }
    render(){
        return(
            <ScrollView>
                <Mission />
            </ScrollView>
        );
   
    }

}
export default About;