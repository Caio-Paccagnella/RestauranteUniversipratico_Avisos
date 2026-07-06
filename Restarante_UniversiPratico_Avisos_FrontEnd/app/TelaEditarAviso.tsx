import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import '../global.css'
import Header from '../components/Header'
import TabBar from '../components/TabBar'
import { Link, router, useLocalSearchParams } from 'expo-router'
import axios from 'axios'


export default function TelaEditarAviso(){
    const params = useLocalSearchParams();
    const id = Number(params.id);
    const [titulo, setTitulo] = useState(params.titulo as string || '')
    const [descricao, setDescricao] = useState(params.descricao as string || '')
    return(
        <View className='flex justify-between h-full items-center gap-10'>
            <Header/>
                <View className='flex-1 items-center gap-4'>
                    <Text className='font-kumbhBold text-2xl'>Editar Aviso</Text>
                    <InputText placeholder='Inserir Título' textarea={false} funcao={setTitulo} value={titulo}/>
                    <InputText placeholder='Inserir Descrição' textarea={true} funcao={setDescricao} value={descricao}/>
                    <View className='flex flex-row gap-8'>
                        <BotaoEditar titulo={titulo} descricao={descricao} id={id}/>
                        <BotaoVoltar/>
                    </View>
                </View>
            <TabBar/>
        </View>
    )
}

interface InputTextProps {
    placeholder: string,
    textarea: boolean,
    funcao: (texto: string) => void,
    value: string
}

function InputText(props: InputTextProps){
    return(
        <View>
            <TextInput
            className='w-80 rounded-lg border border-gray-400 px-4 py-3 bg-white'
            placeholder={props.placeholder}
            multiline={props.textarea}
            onChangeText={props.funcao}
            value={props.value}
            />
        </View>
    )
}

function BotaoVoltar(){
    return(
        <Link href={'/'} asChild>
            <TouchableOpacity className='flex rounded-lg bg-white px-6 py-4 items-center justify-center drop-shadow-lg'>
                <Text className='font-kumbhBold'>Voltar</Text>
            </TouchableOpacity>
        </Link>
    )
}


interface BotaoEditarProps {
    id: number,
    titulo: string,
    descricao: string
}

function BotaoEditar(props: BotaoEditarProps){
    
    
    const handleEditarAviso = async (id: number) => {    
        if(!props.titulo || !props.descricao) {
            alert("Por favor, preencha título e descrição!");
            return;
        }

        try {

            const response = await axios.put(`http://localhost:8081/avisos/${id}`, {
                titulo: props.titulo,
                descricao: props.descricao
            });

            
            if (response.status == 200 || response.status === 201) {
                alert("Aviso editado com sucesso!");
                router.replace('/'); 
            } else {
                alert('Erro ao salvar o aviso no banco de dados.');
            }

        } catch (error) {
            console.error("Erro na requisição:", error);
            
            if (axios.isAxiosError(error) && error.response) {
                alert(`Erro do servidor: ${error.response.data.message || 'Falha ao salvar'}`);
            } else {
                alert("Não foi possível conectar ao servidor. Verifique se o Back-End está rodando.");
            }
        }
    }

    return(
        <TouchableOpacity 
            className='flex rounded-lg bg-[#96BD3A] px-6 py-4 items-center justify-center drop-shadow-lg'
            onPress={() => handleEditarAviso(props.id)}
        >
            <Text className='font-kumbhBold text-white'>Confirmar</Text>
        </TouchableOpacity>
    )
}

