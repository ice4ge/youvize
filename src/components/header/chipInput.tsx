import React, { useState, useRef } from 'react';
import {
    HeaderContainer,
    MenuButton,
    MenuContainer,
    SearchContainer,
    LogoButton,
    LogoImage,
    ProfileButton,
    ProfileImage,
    SearchBox,
    SearchInput,
    BookMarkBox,
    BookAppointmentView,
    BookTitle,
    ActionLeft,
    Skill,
} from './styles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { event } from 'react-native-reanimated';

export const ChipInput: React.FC<TProps> = props => {
    const [chip, setChip] = useState(['figma', 'cook']);
    const [text, setText] = useState('');
    const addChip = () => {
        let setFlag = 0;
        chip.map(function (item, i) {
            if (item === text) {
                setFlag++;
            }
        })
        if (setFlag == 0) {
            setChip([...chip, text]);
            setText('')
            setFlag = 0;
        }
    }
    const deleteChip = (member) => {
        const newChipArray = chip.filter(item => item != member);
        setChip(newChipArray);
    }
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.chipArea}>
                {chip && chip.map((n, i) =>
                    <Skill key={i}>
                        <Text style={styles.chipText}>{n}</Text>
                        <TouchableOpacity onPress={()=>deleteChip(n)}>
                            <Text style={styles.removeChip}>X</Text>
                        </TouchableOpacity>

                    </Skill>
                )}
            </View>
            <SearchInput
                placeholder="What do you want advise on?"
                value = {text}
                onSubmitEditing={() => addChip()}
                onChangeText={text => setText(text)}
            ></SearchInput>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    chipArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    removeChip: {
        marginLeft: 10,
        padding: 3,
        borderRadius: 70,
        height: 20,
        color: '#ff8c1a',
        fontWeight: 'bold',
    },
    chipText: {
        color: '#ff8c1a',
        fontWeight: 'bold',
    }
})
