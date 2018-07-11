import React, { Fragment, Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Platform,Image, StyleSheet, ScrollView } from 'react-native';

export default class Home extends Component {

    render(){
        return (
            <ScrollView>
            <Content contentContainerStyle={styles.container}>
                {
                this.props.MonsterList.map(monster => (
                <View key={monster.id} style={[styles.monsterView, {backgroundColor: monster.background}]}>
                    <Image 
                        style={styles.monsterAvatar} 
                        source={{uri: monster.avatar}}
                    />
                    <View style={styles.monsterInfo}> 
                        <Text style={styles.monsterTitle}>{monster.iName}</Text>
                        <Text style={styles.monsterRace}>{monster.race}</Text>
                    </View>
                </View>
                ))
                }
            </Content>
            </ScrollView>
        )
    }
}

  const styles = StyleSheet.create({
    monsterView: {
        padding: 5,
        backgroundColor: '#333',
        margin: 5,
        width: 180,
        height: 150,
      },

      container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },

      monsterAvatar: {
          padding: 30,
          width: '50%',
          flex: 1,
          marginLeft: 'auto',
          marginRight: 'auto'
      },

      monsterInfo: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
      },

      monsterTitle: {
          fontWeight: 'bold',
          color: '#000',
          fontSize: 12,
      },

      monsterRace: {
          fontSize: 8,
          color: '#333'
      },
})
