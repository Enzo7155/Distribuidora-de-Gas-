package cl.gaselvolcan.backend.config;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class SaludControlador {
    @GetMapping("/api/salud")
    public Map<String, String> salud() {
        return Map.of("estado", "ok", "servicio", "gas-el-volcan");
    }
}
