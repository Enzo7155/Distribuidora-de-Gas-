package cl.gaselvolcan.backend.producto;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoControlador {
    private final ProductoRepositorio repositorio;

    public ProductoControlador(ProductoRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    @GetMapping
    public List<Producto> listar() {
        return repositorio.findAll();
    }

    @GetMapping("/{id}")
    public Producto buscar(@PathVariable Long id) {
        return repositorio.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado"));
    }

    @PostMapping
    public ResponseEntity<Producto> crear(@Valid @RequestBody ProductoSolicitud datos) {
        if (repositorio.existsByCodigo(datos.codigo().trim())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe ese código de producto");
        }
        Producto creado = repositorio.save(datos.convertir());
        return ResponseEntity.created(URI.create("/api/productos/" + creado.getId())).body(creado);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Long id, @Valid @RequestBody ProductoSolicitud datos) {
        Producto existente = buscar(id);
        if (repositorio.existsByCodigoAndIdNot(datos.codigo().trim(), id)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe ese código de producto");
        }
        existente.actualizar(datos);
        return repositorio.save(existente);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Long id) {
        if (!repositorio.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        repositorio.deleteById(id);
    }
}
