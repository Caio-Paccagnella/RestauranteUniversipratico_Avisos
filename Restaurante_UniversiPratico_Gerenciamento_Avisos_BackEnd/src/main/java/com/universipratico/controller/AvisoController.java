package com.universipratico.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin; 
import java.util.List;
import jakarta.validation.Valid;

import com.universipratico.service.AvisoService;
import com.universipratico.dto.*;

// Gerenciamento da comunicação:
@RestController
@RequestMapping("/avisos")
@CrossOrigin(origins = "*")
public class AvisoController {

    private final AvisoService service;

    public AvisoController(AvisoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ResponseAvisoDTO> criarAviso(@Valid @RequestBody RequestAvisoDTO request) {
        ResponseAvisoDTO response = service.inserirAviso(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<ResponseAvisoDTO>> listarAvisos() {
        List<ResponseAvisoDTO> response = service.selectAllAviso();
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseAvisoDTO> atualizarAviso(@PathVariable int id, @Valid @RequestBody RequestAvisoDTO request) {
        ResponseAvisoDTO response = service.updateAviso(id, request);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagarAviso(@PathVariable int id) {
        service.deletarAviso(id);
        // Sem retorno:
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}




