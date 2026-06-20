/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Factura, Inventario, Cuenta, Contacto } from "./types";

export const FALLBACK_FACTURAS: Factura[] = [
  {
    ID_Factura: "FAC-2026-001",
    Fecha: "2026-06-01",
    Cliente_ID: "CLI-001",
    RNC_Facturado: "131234567",
    NCF: "B0100000125",
    Terminos_Pago: "Crédito 30 días",
    Vencimiento: "2026-07-01",
    Vendedor: "José Almonte",
    Asunto: "Suministro de Botellas PET 500ml",
    Total_Neto_DOP: 150000,
    Cargos_Envio: 3500,
    Ajustes: 0,
    Total_ITBIS_DOP: 27000,
    Total_General_DOP: 180500,
    Estado_Pago: "Pagada"
  },
  {
    ID_Factura: "FAC-2026-002",
    Fecha: "2026-06-12",
    Cliente_ID: "CLI-002",
    RNC_Facturado: "101987654",
    NCF: "B0100000126",
    Terminos_Pago: "Crédito 15 días",
    Vencimiento: "2026-06-27",
    Vendedor: "Laura Medina",
    Asunto: "Pedido Especial Envases HDPE 1 Galón",
    Total_Neto_DOP: 85200,
    Cargos_Envio: 1500,
    Ajustes: -200,
    Total_ITBIS_DOP: 15336,
    Total_General_DOP: 101836,
    Estado_Pago: "Pendiente"
  },
  {
    ID_Factura: "FAC-2026-003",
    Fecha: "2026-06-15",
    Cliente_ID: "CLI-001",
    RNC_Facturado: "131234567",
    NCF: "B0100000127",
    Terminos_Pago: "Contado",
    Vencimiento: "2026-06-15",
    Vendedor: "José Almonte",
    Asunto: "Tapas Selladoras de Seguridad 28mm",
    Total_Neto_DOP: 35000,
    Cargos_Envio: 800,
    Ajustes: 0,
    Total_ITBIS_DOP: 6300,
    Total_General_DOP: 42100,
    Estado_Pago: "Pagada"
  },
  {
    ID_Factura: "FAC-2026-004",
    Fecha: "2026-06-18",
    Cliente_ID: "CLI-003",
    RNC_Facturado: "101444555",
    NCF: "B0100000128",
    Terminos_Pago: "Crédito 60 días",
    Vencimiento: "2026-08-18",
    Vendedor: "Laura Medina",
    Asunto: "Granulado Polietileno Corriente",
    Total_Neto_DOP: 240000,
    Cargos_Envio: 6000,
    Ajustes: 0,
    Total_ITBIS_DOP: 43200,
    Total_General_DOP: 289200,
    Estado_Pago: "Pendiente"
  },
  {
    ID_Factura: "FAC-2026-005",
    Fecha: "2026-06-19",
    Cliente_ID: "CLI-002",
    RNC_Facturado: "101987654",
    NCF: "B0100000129",
    Terminos_Pago: "Crédito 15 días",
    Vencimiento: "2026-07-04",
    Vendedor: "Laura Medina",
    Asunto: "Moldes Plásticos Inyección Customizado",
    Total_Neto_DOP: 110000,
    Cargos_Envio: 0,
    Ajustes: 0,
    Total_ITBIS_DOP: 19800,
    Total_General_DOP: 129800,
    Estado_Pago: "Anulada"
  }
];

export const FALLBACK_INVENTARIO: Inventario[] = [
  {
    SKU: "PE-HD-001",
    Nombre_Articulo: "Polietileno de Alta Densidad (HDPE) - Gránulos",
    Tipo: "Materia Prima",
    Categoria: "Materia Prima",
    Unidad_Medida: "kg",
    Price_Venta: 120,
    Precio_Compra: 85,
    Stock_Actual: 15400,
    Stock_Minimo: 5000,
    Cuenta_Contable: "1.1.3.01 - Inventario de Materia Prima"
  },
  {
    SKU: "BOT-PL-500",
    Nombre_Articulo: "Botella PET Cristal 500ml",
    Tipo: "Producto Terminado",
    Categoria: "Envases Líquidos",
    Unidad_Medida: "Unidades",
    Price_Venta: 4.5,
    Precio_Compra: 1.8,
    Stock_Actual: 45000,
    Stock_Minimo: 10000,
    Cuenta_Contable: "1.1.3.02 - Inventario de Productos Terminados"
  },
  {
    SKU: "TAP-PL-28M",
    Nombre_Articulo: "Tapa Selladora Plástica 28mm Azul",
    Tipo: "Producto Terminado",
    Categoria: "Accesorios",
    Unidad_Medida: "Unidades",
    Price_Venta: 1.2,
    Precio_Compra: 0.4,
    Stock_Actual: 98000,
    Stock_Minimo: 20000,
    Cuenta_Contable: "1.1.3.02 - Inventario de Productos Terminados"
  },
  {
    SKU: "PP-CO-002",
    Nombre_Articulo: "Polipropileno Copolímero (PP) - Azul Industrial",
    Tipo: "Materia Prima",
    Categoria: "Materia Prima",
    Unidad_Medida: "kg",
    Price_Venta: 165,
    Precio_Compra: 110,
    Stock_Actual: 2400,
    Stock_Minimo: 4000,
    Cuenta_Contable: "1.1.3.01 - Inventario de Materia Prima"
  },
  {
    SKU: "CAJ-PL-X30",
    Nombre_Articulo: "Huacal Plástico Reforzado 30kg",
    Tipo: "Producto Terminado",
    Categoria: "Logística",
    Unidad_Medida: "Unidades",
    Price_Venta: 350,
    Precio_Compra: 190,
    Stock_Actual: 1200,
    Stock_Minimo: 1500,
    Cuenta_Contable: "1.1.3.02 - Inventario de Productos Terminados"
  },
  {
    SKU: "PE-LD-F900",
    Nombre_Articulo: "Polietileno de Baja Densidad (LDPE) - Film Térmico",
    Tipo: "Materia Prima",
    Categoria: "Materia Prima",
    Unidad_Medida: "Rollos",
    Price_Venta: 2200,
    Precio_Compra: 1450,
    Stock_Actual: 450,
    Stock_Minimo: 100,
    Cuenta_Contable: "1.1.3.01 - Inventario de Materia Prima"
  }
];

export const FALLBACK_CUENTAS: Cuenta[] = [
  {
    ID_Cuenta: "CTA-001",
    Nombre_Cuenta: "Banreservas Corriente Empresarial",
    Tipo_Cuenta: "Corriente",
    Numero_Cuenta: "9601423456",
    Banco: "Banreservas",
    Balance_Actual: 4520900.50,
    Divisa: "DOP",
    Estado: "Activa"
  },
  {
    ID_Cuenta: "CTA-002",
    Nombre_Cuenta: "Popular USS Corriente",
    Tipo_Cuenta: "Corriente",
    Numero_Cuenta: "721409841",
    Banco: "Banco Popular",
    Balance_Actual: 82400.00,
    Divisa: "USD",
    Estado: "Activa"
  },
  {
    ID_Cuenta: "CTA-003",
    Nombre_Cuenta: "BHD Caja de Flujo Operativo",
    Tipo_Cuenta: "Efectivo",
    Numero_Cuenta: "104930121",
    Banco: "Banco BHD",
    Balance_Actual: 150000.00,
    Divisa: "DOP",
    Estado: "Activa"
  },
  {
    ID_Cuenta: "CTA-004",
    Nombre_Cuenta: "Caja Chica General",
    Tipo_Cuenta: "Efectivo (Caja)",
    Numero_Cuenta: "Caja-01",
    Banco: "Caja Fuerte Oficina Principal",
    Balance_Actual: 25000.00,
    Divisa: "DOP",
    Estado: "Activa"
  }
];

export const FALLBACK_CONTACTOS: Contacto[] = [
  {
    ID_Contacto: "CLI-001",
    Nombre_Empresa: "Envases del Caribe, SRL",
    Nombre_Contacto: "Juan Meléndez",
    RNC_Cedula: "131234567",
    Tipo_NCF_Defecto: "Crédito Fiscal (B01)",
    Correo: "jmelendez@envasescaribe.com",
    Telefono: "809-555-0192",
    Direccion: "Av. Luperón No. 45, Santo Domingo",
    Tipo_Contacto: "Cliente"
  },
  {
    ID_Contacto: "CLI-002",
    Nombre_Empresa: "Plástidom, SA",
    Nombre_Contacto: "Milagros Ortiz",
    RNC_Cedula: "101987654",
    Tipo_NCF_Defecto: "Crédito Fiscal (B01)",
    Correo: "mortiz@plastidom.com.do",
    Telefono: "809-333-8821",
    Direccion: "Zona Industrial de Haina, San Cristóbal",
    Tipo_Contacto: "Cliente"
  },
  {
    ID_Contacto: "CLI-003",
    Nombre_Empresa: "Distribuidora Ramírez, SAS",
    Nombre_Contacto: "Ramón Ramírez",
    RNC_Cedula: "101444555",
    Tipo_NCF_Defecto: "Consumo final (B02)",
    Correo: "compras@ramirezdiaz.com",
    Telefono: "809-777-6210",
    Direccion: "Calle Duarte No. 12, Santiago",
    Tipo_Contacto: "Cliente"
  },
  {
    ID_Contacto: "PRO-001",
    Nombre_Empresa: "Petroquímica de Resinas Dominicana",
    Nombre_Contacto: "Carlos Sosa",
    RNC_Cedula: "102456789",
    Tipo_NCF_Defecto: "Gubernamental (B15)",
    Correo: "csosa@petroresinas.com",
    Telefono: "809-444-9000",
    Direccion: "Av. Máximo Gómez, Santo Domingo",
    Tipo_Contacto: "Proveedor"
  }
];
