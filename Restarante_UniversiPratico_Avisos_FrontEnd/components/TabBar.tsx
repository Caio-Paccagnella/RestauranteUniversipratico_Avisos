import { Text, Image, View } from 'react-native'
import '../global.css'
import  FontAwesome6  from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabBar(){
    return(
        <View className='bg-white w-full justify-center items-center flex flex-row gap-16 shadow-2xl shadow-black pt-2 pb-safe'>
            <View className='flex gap-1 items-center'>
                <FontAwesome6 name="circle-exclamation" size={40} color="black" />
                <Text className='font-kumbhBold'>Avisos</Text>
            </View>
            <View>
                <Feather name="book-open" size={28} color="black" />
            </View>
            <View>
                <Entypo name="bar-graph" size={28} color="black" />
            </View>
        </View>
    )
}