package com.universipratico.dto;

public record ResponseAvisoDTO(
    int id,
    String titulo,
    String descricao,
    String autorAssinatura, // Mensagem do administrador formatada
    String dataPublicacao // Data formatada
) { }
