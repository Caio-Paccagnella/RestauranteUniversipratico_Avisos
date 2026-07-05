import {View, Text, Image} from 'react-native'
import '../global.css'


export default function Header(){
    return(
        <View className='w-full bg-[#96BD3A] flex pt-safe pb-5 flex-row items-center justify-center'>
            <Image
            source={require("../assets/Logo.png")}
            className='w-60 h-20'
            >
            </Image>
        </View>
    )
}