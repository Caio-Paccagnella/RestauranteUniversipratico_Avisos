import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import '../global.css'
import Header from '../components/Header'
import TabBar from '../components/TabBar'
import { Link, router } from 'expo-router'
import axios from 'axios'


export default function TelaNovoAviso(){
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    return(
        <View className='flex justify-between h-full items-center gap-10'>
            <Header/>
                <View className='flex-1 items-center gap-4'>
                    <Text className='font-kumbhBold text-2xl'>Criar Aviso</Text>
                    <InputText placeholder='Inserir Título' textarea={false} funcao={setTitulo}/>
                    <InputText placeholder='Inserir Descrição' textarea={true} funcao={setDescricao}/>
                    <View className='flex flex-row gap-8'>
                        <BotaoConfirmar titulo={titulo} descricao={descricao}/>
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
    funcao: (texto: string) => void
}

function InputText(props: InputTextProps){
    return(
        <View>
            <TextInput
            className='w-80 rounded-lg border border-gray-400 px-4 py-3 bg-white'
            placeholder={props.placeholder}
            multiline={props.textarea}
            onChangeText={props.funcao}
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

interface BotaoConfirmarProps {
    titulo: string,
    descricao: string
}

interface BotaoConfirmarProps {
    titulo: string,
    descricao: string
}

function BotaoConfirmar(props: BotaoConfirmarProps){
    
    // Função assíncrona que envia os dados para a API
    const handleCriarAviso = async () => {
        // Verifica se os campos não estão vazios
        if(!props.titulo || !props.descricao) {
            alert("Por favor, preencha título e descrição!");
            return;
        }

        try {

            const response = await axios.post('http://localhost:8081/avisos', {
                titulo: props.titulo,
                descricao: props.descricao
            });

            // Se o back-end retornar sucesso (status 200/201)
            if (response.status == 200 || response.status === 201) {
                alert("Aviso criado com sucesso!");
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
            onPress={handleCriarAviso}
        >
            <Text className='font-kumbhBold text-white'>Confirmar</Text>
        </TouchableOpacity>
    )
}

