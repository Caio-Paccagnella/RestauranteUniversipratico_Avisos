package com.universipratico.mapper;

import org.springframework.stereotype.Component;
import java.time.format.DateTimeFormatter;
import com.universipratico.dto.RequestAvisoDTO;
import com.universipratico.dto.ResponseAvisoDTO;
import com.universipratico.model.Aviso;

@Component
public class AvisoMapper {

    // Converte de RequestAvisoDTO (Entrada) para a entidade do banco:
    public Aviso toEntity(RequestAvisoDTO request) {
        Aviso aviso = new Aviso();
        aviso.setTitulo(request.titulo());
        aviso.setDescricao(request.descricao());
        return aviso;
    }

    // Converte da Entidade para o ResponseAvisoDTO:
    public ResponseAvisoDTO toResponse(Aviso aviso) {

        String dataFormatada;
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy 'às' HH:mm");
        dataFormatada = aviso.getDataPublicacao().format(formatador);

        // Formata a saída:
        String assinatura = "Publicado por: Administrador nº " + aviso.getIdAdministrador();
        String titulo = aviso.getTitulo().toUpperCase();

        return new ResponseAvisoDTO(
            aviso.getId(),
            titulo,
            aviso.getDescricao(),
            assinatura,
            dataFormatada
        );
    }
}

