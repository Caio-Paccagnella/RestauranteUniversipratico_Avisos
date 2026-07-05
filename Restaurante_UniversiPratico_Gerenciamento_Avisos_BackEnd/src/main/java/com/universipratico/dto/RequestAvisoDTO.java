package com.universipratico.dto;

import jakarta.validation.constraints.NotBlank;

public record RequestAvisoDTO (
    @NotBlank String titulo,
    @NotBlank String descricao
) { }
