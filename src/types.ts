/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Factura {
  ID_Factura: string;
  Fecha: string;
  Cliente_ID: string;
  RNC_Facturado: string;
  NCF: string;
  Terminos_Pago: string;
  Vencimiento: string;
  Vendedor: string;
  Asunto: string;
  Total_Neto_DOP: number;
  Cargos_Envio: number;
  Ajustes: number;
  Total_ITBIS_DOP: number;
  Total_General_DOP: number;
  Estado_Pago: string; // 'Pagada', 'Pendiente', 'Anulada'
}

export interface Inventario {
  SKU: string;
  Nombre_Articulo: string;
  Tipo: string;
  Categoria: string;
  Unidad_Medida: string;
  Price_Venta: number;
  Precio_Compra: number;
  Stock_Actual: number;
  Stock_Minimo: number;
  Cuenta_Contable: string;
}

export interface Cuenta {
  ID_Cuenta: string;
  Nombre_Cuenta: string;
  Tipo_Cuenta: string;
  Numero_Cuenta: string;
  Banco: string;
  Balance_Actual: number;
  Divisa: string;
  Estado: string; // 'Activa', 'Inactiva'
}

export interface Contacto {
  ID_Contacto: string;
  Nombre_Empresa: string;
  Nombre_Contacto: string;
  RNC_Cedula: string;
  Tipo_NCF_Defecto: string;
  Correo: string;
  Telefono: string;
  Direccion: string;
  Tipo_Contacto: string; // 'Cliente', 'Proveedor', etc.
}

export interface MockDataState {
  facturas: Factura[];
  inventario: Inventario[];
  cuentas: Cuenta[];
  contactos: Contacto[];
}
