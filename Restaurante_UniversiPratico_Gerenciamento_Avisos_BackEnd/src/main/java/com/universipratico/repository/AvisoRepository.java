package com.universipratico.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.universipratico.model.Aviso;

// Conexão com o Banco de Dados
public interface AvisoRepository extends JpaRepository <Aviso, Integer> {
    
}
