package com.mycompany.cadastrousuario.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsuarioController {

    @GetMapping("/")
    public String index() {
        // Retorna o nome do JSP que será exibido
        return "index"; 
    }
}
