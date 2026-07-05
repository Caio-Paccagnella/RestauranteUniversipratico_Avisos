package com.universipratico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.time.LocalDateTime;

import com.universipratico.model.Aviso;
import com.universipratico.repository.AvisoRepository;
import com.universipratico.mapper.AvisoMapper;
import com.universipratico.dto.*;

// Processamento das regras de negócio
@Service
public class AvisoService {
    
    @Autowired
    private AvisoRepository avisoRepository;

    @Autowired
    private AvisoMapper avisoMapper;

    public ResponseAvisoDTO inserirAviso(RequestAvisoDTO request) {
        Aviso aviso = avisoMapper.toEntity(request);
        
        aviso.setDataPublicacao(LocalDateTime.now());
        aviso.setIdAdministrador((int) (Math.random() * 5) + 1);
        
        Aviso avisoSalvo = avisoRepository.save(aviso);
        
        return avisoMapper.toResponse(avisoSalvo);
    }

    public List<ResponseAvisoDTO> selectAllAviso() {
        List<ResponseAvisoDTO> listaFormatada = new ArrayList<>();
        List<Aviso> avisosBanco = avisoRepository.findAll();
        
        for (Aviso aviso: avisosBanco) {
            ResponseAvisoDTO avisoFormatado = avisoMapper.toResponse(aviso);
            listaFormatada.add(avisoFormatado);
        }

        return listaFormatada;
    }

    public void deletarAviso(int id) {
        if (avisoRepository.existsById(id)) {
            avisoRepository.deleteById(id);
        }
    }

    public ResponseAvisoDTO updateAviso(int id, RequestAvisoDTO requestAtualizado) {
        Optional<Aviso> listA = avisoRepository.findById(id);
        if (listA.isPresent()) {
            Aviso a = listA.get();
            a.setTitulo(requestAtualizado.titulo());
            a.setDescricao(requestAtualizado.descricao());

            Aviso avisoSalvo = avisoRepository.save(a);
            return avisoMapper.toResponse(avisoSalvo);
        } else {
            throw new RuntimeException("Aviso não Encontrado!");
        }
    }
}

