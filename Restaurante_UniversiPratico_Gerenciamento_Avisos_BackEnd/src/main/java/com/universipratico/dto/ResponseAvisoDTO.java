package com.universipratico.dto;

public record ResponseAvisoDTO(
    String titulo,
    String descricao,
    String autorAssinatura, // Mensagem do administrador formatada
    String dataPublicacao // Data formatada
) { }
