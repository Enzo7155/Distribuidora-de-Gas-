package cl.gaselvolcan.backend.producto;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "productos", uniqueConstraints = @UniqueConstraint(columnNames = "codigo"))
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String codigo;

    @Column(nullable = false, length = 100)
    private String categoria;

    @Column(nullable = false, length = 150)
    private String nombre;

    @Column(nullable = false, length = 1000)
    private String descripcion;

    @Column(nullable = false, length = 30)
    private String unidad;

    @Column(nullable = false, precision = 14, scale = 2)
    private BigDecimal precio;

    @Column(nullable = false, precision = 14, scale = 2)
    private BigDecimal precioComercial;

    @Column(nullable = false)
    private Integer stock;

    @Column(nullable = false, length = 255)
    private String imagen;

    protected Producto() {}

    public Producto(String codigo, String categoria, String nombre, String descripcion,
                    String unidad, BigDecimal precio, BigDecimal precioComercial,
                    Integer stock, String imagen) {
        this.codigo = codigo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.unidad = unidad;
        this.precio = precio;
        this.precioComercial = precioComercial;
        this.stock = stock;
        this.imagen = imagen;
    }

    public Long getId() { return id; }
    public String getCodigo() { return codigo; }
    public String getCategoria() { return categoria; }
    public String getNombre() { return nombre; }
    public String getDescripcion() { return descripcion; }
    public String getUnidad() { return unidad; }
    public BigDecimal getPrecio() { return precio; }
    public BigDecimal getPrecioComercial() { return precioComercial; }
    public Integer getStock() { return stock; }
    public String getImagen() { return imagen; }

    public void actualizar(ProductoSolicitud datos) {
        codigo = datos.codigo().trim();
        categoria = datos.categoria().trim();
        nombre = datos.nombre().trim();
        descripcion = datos.descripcion().trim();
        unidad = datos.unidad().trim();
        precio = datos.precio();
        precioComercial = datos.precioComercial();
        stock = datos.stock();
        imagen = datos.imagen().trim();
    }
}
