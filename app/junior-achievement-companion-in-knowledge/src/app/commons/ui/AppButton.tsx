import React from "react";
import {TouchableOpacity, View, Text, ViewStyle, StyleProp, TextStyle} from "react-native";

const AppButton = ({text, onPress, style, textStyle, disabled} : {text: string, onPress: () => void, style?: ViewStyle, textStyle?: StyleProp<TextStyle>, disabled?: boolean}) : JSX.Element => {
    return (
        <View style={[{
            opacity: disabled ? 0.5 : 1,
            height: 60,
            width: '100%',
            borderRadius: 20
        }, style]}>
            <TouchableOpacity onPress={() => {
                if (!disabled){
                    onPress();
                }
            }}
            style={{
                shadowColor: "#000000",
                elevation: disabled ? 0 : 5,
                shadowOffset: {width: 0, height: 3},
                shadowRadius: 5,
                shadowOpacity: 1,
                borderRadius: 100,
                backgroundColor: "#232452",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                width: "100%"
            }}>
                <Text style={[{color: "#FFFFFF", fontWeight: "bold", fontSize: 16, textTransform: "uppercase"}, textStyle]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AppButton;
