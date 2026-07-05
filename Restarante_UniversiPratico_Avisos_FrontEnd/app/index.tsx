import { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView }  from 'react-native'
import axios from 'axios'
import '../global.css'

import Header from '../components/Header'
import TabBar from '../components/TabBar'


export default function TelaAvisos(){
    
    const [avisos, setAvisos] = useState<any[]>([])

    
    useEffect(() => {
        axios.get('http://localhost:8081/avisos')
            .then(response => setAvisos(response.data))
            .catch(error => console.error("Erro ao buscar avisos:", error))
    }, [])

    return (
        
        <View className='flex justify-between h-full items-center gap-10'>
            <Header/>
            
            {}
            <View className='flex-1 items-center'>
                <BotaoNovoAviso/>

                {}
                <ScrollView className='mt-4 w-80' showsVerticalScrollIndicator={false}>
                    {avisos.map((aviso) => (
                        <View 
                            key={aviso.id} 
                            className='p-4 mb-3 bg-white rounded-lg border border-gray-300'
                        >
                            <Text className='font-kumbhBold text-lg text-gray-800'>{aviso.titulo}</Text>
                            <Text className='text-gray-600 mt-1'>{aviso.descricao}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            
            <TabBar/>
        </View>
    )
}


import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router'


function BotaoNovoAviso(){
    return(
        <Link href={"/TelaCriarAviso"} asChild>
            <TouchableOpacity className='flex flex-row gap-4 rounded-md bg-[#96BD3A] items-center justify-center px-8 py-4'>
                <AntDesign name="plus-circle" size={24} color="white"/>
                <Text className='color-white font-kumbhBold '>Novo Aviso!</Text>
            </TouchableOpacity>
        </Link>
    )
}

