import React, { useState } from "react";
import { Terminal, X, CheckCircle2, AlertTriangle, Database } from "lucide-react";

interface DebugConsoleProps {
  sheetId: string;
  isUsingFallback: boolean;
  facturasCount: number;
  inventarioCount: number;
  cuentasCount: number;
  contactosCount: number;
  rawLogs: string[];
}

export default function DebugConsole({
  sheetId,
  isUsingFallback,
  facturasCount,
  inventarioCount,
  cuentasCount,
  contactosCount,
  rawLogs
}: DebugConsoleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50 font-mono">
      {/* Botón Flotante para abrir la consola */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-full shadow-2xl flex items-center justify-center gap-2 border border-amber-400 animate-pulse text-xs font-bold cursor-pointer transition"
        >
          <Terminal className="w-4 h-4" />
          <span>Consola ERP Debug</span>
        </button>
      )}

      {/* Ventana de la Consola de Depuración */}
      {isOpen && (
        <div className="bg-[#0b0c14] border-2 border-amber-500/80 w-80 md:w-[450px] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[400px]">
          {/* Header */}
          <div className="bg-[#121422] p-3 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
              <Database className="w-4 h-4" />
              <span>DIAGNÓSTICO DEL PUENTE GOOGLE SHEETS</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white bg-zinc-900 p-1 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cuerpo del Debug */}
          <div className="p-4 overflow-y-auto space-y-4 text-xs text-gray-300">
            {/* Estado General */}
            <div className="p-2.5 rounded-lg bg-zinc-900 flex items-center justify-between border border-zinc-800">
              <span>Estado del Motor:</span>
              {isUsingFallback ? (
                <span className="px-2 py-0.5 bg-amber-950 text-amber-400 border border-amber-800 font-bold rounded text-[10px] uppercase">
                  ⚠️ Contingencia Activa
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold rounded text-[10px] uppercase">
                  ✓ Conectado en Vivo
                </span>
              )}
            </div>

            {/* Auditoría por Pestaña */}
            <div className="space-y-1.5">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Lectura de Filas por Tabla:</p>
              
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className={`p-2 rounded border ${facturasCount > 0 ? "bg-emerald-950/20 border-emerald-900 text-emerald-400" : "bg-red-950/20 border-red-900 text-red-400"}`}>
                  📄 Facturas: <strong>{facturasCount} uds</strong>
                </div>
                <div className={`p-2 rounded border ${inventarioCount > 0 ? "bg-emerald-950/20 border-emerald-900 text-emerald-400" : "bg-red-950/20 border-red-900 text-red-400"}`}>
                  📦 Inventario: <strong>{inventarioCount} uds</strong>
                </div>
                <div className={`p-2 rounded border ${cuentasCount > 0 ? "bg-emerald-950/20 border-emerald-900 text-emerald-400" : "bg-red-950/20 border-red-900 text-red-400"}`}>
                  🏦 Cuentas: <strong>{cuentasCount} uds</strong>
                </div>
                <div className={`p-2 rounded border ${contactosCount > 0 ? "bg-emerald-950/20 border-emerald-900 text-emerald-400" : "bg-red-950/20 border-red-900 text-red-400"}`}>
                  👥 Contactos: <strong>{contactosCount} uds</strong>
                </div>
              </div>
            </div>

            {/* Historial de Eventos (Logs) */}
            <div className="space-y-1">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Historial de Eventos del Sistema:</p>
              <div className="bg-black p-2.5 rounded-lg border border-zinc-900 h-32 overflow-y-auto text-[10px] space-y-1 text-zinc-400">
                {rawLogs.map((log, index) => (
                  <p key={index} className="leading-normal break-all border-b border-zinc-950 pb-1 last:border-0">
                    <span className="text-amber-500 font-bold">&gt;</span> {log}
                  </p>
                ))}
              </div>
            </div>

            <p className="text-[9px] text-zinc-500 text-center italic">
              ID Hoja: {sheetId.slice(0, 8)}...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}