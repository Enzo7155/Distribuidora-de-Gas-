package cl.gaselvolcan.backend.config;

import cl.gaselvolcan.backend.producto.Producto;
import cl.gaselvolcan.backend.producto.ProductoRepositorio;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatosIniciales {
    @Bean
    CommandLineRunner cargarProductos(ProductoRepositorio repositorio) {
        return args -> {
            // Solo se importa el catálogo cuando la base está vacía.
            if (repositorio.count() != 0) return;
            repositorio.saveAll(List.of(
            new Producto("CL001", "Cilindros de Gas", "Cilindro GLP 5 kg",
                "Cilindro de gas licuado de petróleo 5 kg. Para uso residencial, cocina y calefacción pequeña.", "Unidad",
                new BigDecimal("6500"), new BigDecimal("6000"), 80, "assets/cilindro.svg"),
            new Producto("CL002", "Cilindros de Gas", "Cilindro GLP 11 kg",
                "Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible con reguladores estándar.", "Unidad",
                new BigDecimal("12000"), new BigDecimal("11000"), 200, "assets/cilindro.svg"),
            new Producto("CL003", "Cilindros de Gas", "Cilindro GLP 15 kg",
                "Cilindro de mayor capacidad para hogares de alto consumo o locales pequeños.", "Unidad",
                new BigDecimal("16000"), new BigDecimal("14500"), 90, "assets/cilindro.svg"),
            new Producto("CL004", "Cilindros de Gas", "Cilindro GLP 45 kg",
                "Cilindro industrial para restaurantes, talleres y calefacción de locales.", "Unidad",
                new BigDecimal("45000"), new BigDecimal("40000"), 30, "assets/cilindro.svg"),
            new Producto("RG001", "Reguladores", "Regulador doméstico estándar",
                "Regulador de 1 etapa para cilindros 5, 11 y 15 kg. Presión de salida 28 mbar.", "Unidad",
                new BigDecimal("8990"), new BigDecimal("8200"), 45, "assets/regulador.svg"),
            new Producto("RG002", "Reguladores", "Regulador de alta presión",
                "Regulador para cocinas industriales o equipos de mayor consumo. Presión regulable.", "Unidad",
                new BigDecimal("18990"), new BigDecimal("17000"), 12, "assets/regulador.svg"),
            new Producto("RG003", "Reguladores", "Regulador dual (2 salidas)",
                "Permite conectar dos artefactos simultáneamente al mismo cilindro.", "Unidad",
                new BigDecimal("14990"), new BigDecimal("13500"), 18, "assets/regulador.svg"),
            new Producto("MG001", "Mangueras y Conexiones", "Manguera gas 1.5 m",
                "Manguera flexible homologada. Diámetro interior 9 mm. Compatible con reguladores estándar.", "Unidad",
                new BigDecimal("3990"), new BigDecimal("3500"), 80, "assets/manguera.svg"),
            new Producto("MG002", "Mangueras y Conexiones", "Manguera gas 3 m",
                "Manguera larga para instalaciones donde el artefacto está alejado del cilindro.", "Unidad",
                new BigDecimal("6990"), new BigDecimal("6200"), 50, "assets/manguera.svg"),
            new Producto("MG003", "Mangueras y Conexiones", "Abrazadera metálica",
                "Abrazadera de acero para asegurar la conexión manguera-regulador y manguera-artefacto.", "Unidad",
                new BigDecimal("990"), new BigDecimal("800"), 200, "assets/manguera.svg"),
            new Producto("MG004", "Mangueras y Conexiones", "Kit conexión completo",
                "Regulador, manguera de 1.5 m y abrazaderas. Todo lo necesario para instalar un cilindro nuevo.", "Kit",
                new BigDecimal("12990"), new BigDecimal("11500"), 25, "assets/manguera.svg"),
            new Producto("AC001", "Accesorios", "Carro porta cilindro 11/15 kg",
                "Carro metálico con ruedas para transportar cilindros dentro del hogar con seguridad.", "Unidad",
                new BigDecimal("12990"), new BigDecimal("11000"), 20, "assets/accesorio.svg"),
            new Producto("AC002", "Accesorios", "Tapa protectora para válvula",
                "Tapa de plástico ABS para proteger la válvula del cilindro durante el transporte.", "Unidad",
                new BigDecimal("1490"), new BigDecimal("1200"), 60, "assets/accesorio.svg"),
            new Producto("AC003", "Accesorios", "Detector de gas a batería",
                "Sensor electroquímico con alarma sonora y visual ante fuga de gas GLP o metano.", "Unidad",
                new BigDecimal("19990"), new BigDecimal("17000"), 8, "assets/accesorio.svg"),
            new Producto("AC004", "Accesorios", "Detector de gas a batería",
                "Sensor electroquímico con alarma sonora y visual ante fuga de gas GLP o metano.", "Unidad",
                new BigDecimal("19990"), new BigDecimal("17000"), 8, "assets/accesorio.svg")
            ));
        };
    }
}
