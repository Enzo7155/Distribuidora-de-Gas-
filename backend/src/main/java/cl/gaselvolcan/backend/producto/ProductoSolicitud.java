package cl.gaselvolcan.backend.producto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record ProductoSolicitud(
    @NotBlank String codigo,
    @NotBlank String categoria,
    @NotBlank String nombre,
    @NotBlank String descripcion,
    @NotBlank String unidad,
    @NotNull @DecimalMin("0.0") BigDecimal precio,
    @NotNull @DecimalMin("0.0") BigDecimal precioComercial,
    @NotNull @Min(0) Integer stock,
    @NotBlank String imagen
) {
    public Producto convertir() {
        return new Producto(codigo.trim(), categoria.trim(), nombre.trim(),
            descripcion.trim(), unidad.trim(), precio, precioComercial, stock, imagen.trim());
    }
}
