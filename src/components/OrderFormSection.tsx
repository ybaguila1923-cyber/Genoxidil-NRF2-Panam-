import React, { useState, useEffect } from 'react';
import { PRODUCTS, PANAMA_PROVINCES, Product } from '../data/content';
import { 
  ShoppingBag, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare, 
  Printer, 
  Sparkles,
  AlertCircle,
  Truck
} from 'lucide-react';

interface OrderFormSectionProps {
  preselectedProduct?: Product;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({ preselectedProduct }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct ? preselectedProduct.id : PRODUCTS[1].id
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [nombre, setNombre] = useState<string>('');
  const [apellidos, setApellidos] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [provincia, setProvincia] = useState<string>(PANAMA_PROVINCES[0]);
  const [correo, setCorreo] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');
  const [consulta, setConsulta] = useState<string>('');
  const [isCaptchaChecked, setIsCaptchaChecked] = useState<boolean>(false);
  const [captchaVerifying, setCaptchaVerifying] = useState<boolean>(false);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (preselectedProduct) {
      setSelectedProductId(preselectedProduct.id);
    }
  }, [preselectedProduct]);

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const unitPrice = currentProduct.salePrice;
  const subtotal = unitPrice * quantity;
  const estimatedSavings = currentProduct.savings * quantity;

  const handleCaptchaClick = () => {
    if (isCaptchaChecked) {
      setIsCaptchaChecked(false);
      return;
    }
    setCaptchaVerifying(true);
    setTimeout(() => {
      setCaptchaVerifying(false);
      setIsCaptchaChecked(true);
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!nombre.trim() || !apellidos.trim() || !telefono.trim()) {
      setErrorMsg('Por favor completa tu Nombre, Apellidos y Teléfono de contacto.');
      return;
    }

    if (!direccion.trim()) {
      setErrorMsg('Por favor ingresa la dirección detallada o punto de entrega.');
      return;
    }

    if (!isCaptchaChecked) {
      setErrorMsg('Por favor confirma la casilla de verificación de seguridad ("No soy un robot").');
      return;
    }

    const randomId = 'NBN-PA-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomId);
    setFormSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*NUEVO PEDIDO DE GENOXIDIL NRF2*\n` +
      `*Orden:* ${orderNumber || 'PENDIENTE'}\n` +
      `*Cliente:* ${nombre} ${apellidos}\n` +
      `*Teléfono:* ${telefono}\n` +
      `*Provincia:* ${provincia}\n` +
      `*Dirección:* ${direccion}\n` +
      `*Paquete:* ${currentProduct.name} (x${quantity})\n` +
      `*Total a Pagar:* $${subtotal.toFixed(2)} USD\n` +
      (correo ? `*Correo:* ${correo}\n` : '') +
      (consulta ? `*Notas:* ${consulta}\n` : '') +
      `\nSolicito confirmación de entrega por parte de NBN Living Panamá.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="pedido" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-amber-400/20">
            Atención Inmediata NBN Living Panamá
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Formulario de Pedido y Cotización
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Completa los datos de envío para procesar tu orden de Genoxidil NRF2 con entrega en cualquier punto de Panamá o coordinación internacional.
          </p>
        </div>

        {/* Form and Summary Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Order Form (matching Wireframe Page 13) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-md">
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Product package selector row */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Selecciona tu Paquete de Genoxidil *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {PRODUCTS.map((prod) => {
                      const isSelected = prod.id === selectedProductId;
                      return (
                        <button
                          type="button"
                          key={prod.id}
                          onClick={() => setSelectedProductId(prod.id)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                              : 'bg-slate-700/60 text-slate-200 border-slate-600 hover:bg-slate-700'
                          }`}
                        >
                          <div>
                            <span className="text-xs block leading-tight">{prod.name}</span>
                            <span className="text-[10px] block opacity-80 mt-0.5">{prod.bottles} {prod.bottles === 1 ? 'frasco' : 'frascos'}</span>
                          </div>
                          <span className="text-base font-extrabold mt-2">${prod.salePrice.toFixed(2)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center gap-4 py-2 border-y border-slate-700">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Cantidad de Paquetes:
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-lg text-amber-400">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-400 ml-auto">
                    Total: <strong className="text-amber-400">${subtotal.toFixed(2)} USD</strong>
                  </span>
                </div>

                {/* Wireframe Page 13: Nombre, Apellidos, Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nombre <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Apellidos <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Morales Castillo"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                {/* Teléfono & Provincia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Teléfono WhatsApp <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+507 6123-4567"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">Para confirmar despacho por WhatsApp</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Provincia / Región <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={provincia}
                      onChange={(e) => setProvincia(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-amber-400 text-sm cursor-pointer"
                    >
                      {PANAMA_PROVINCES.map((prov) => (
                        <option key={prov} value={prov} className="bg-slate-900 text-white">
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Correo (opcional) & Dirección */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Dirección detallada de entrega <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Calle, corregimiento, edificio / casa, punto de referencia o retiro en Villa Lucre"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Correo Electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="tuemail@ejemplo.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                {/* Wireframe Page 13: Escriba su consulta * */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Escriba su consulta o notas especiales de entrega <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="¿Alguna condición médica particular, horario preferido de entrega o método de pago deseado?"
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm resize-none"
                  />
                </div>

                {/* Wireframe Page 13: reCAPTCHA "No soy un robot" checkbox */}
                <div className="bg-slate-900/90 border border-slate-700 p-4 rounded-xl flex items-center justify-between max-w-sm">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCaptchaClick}
                      className={`w-7 h-7 rounded border flex items-center justify-center cursor-pointer transition-all ${
                        isCaptchaChecked 
                          ? 'bg-emerald-500 border-emerald-400 text-white' 
                          : 'bg-slate-800 border-slate-500 hover:border-amber-400'
                      }`}
                      aria-label="Casilla de verificación de no soy un robot"
                    >
                      {captchaVerifying ? (
                        <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                      ) : isCaptchaChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : null}
                    </button>
                    <span className="text-sm font-medium text-slate-200">No soy un robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    <span className="text-[9px] text-slate-400 leading-tight">reCAPTCHA</span>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-5 h-5" />
                    <span>Confirmar y Enviar Pedido</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Al confirmar, recibirás soporte personalizado y podrás coordinar pago contra entrega o transferencia.
                  </p>
                </div>

              </form>
            ) : (
              /* Success / Receipt Screen */
              <div className="space-y-6 text-center py-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">¡Solicitud Registrada Exitosamente!</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Orden #{orderNumber}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Gracias, <strong>{nombre} {apellidos}</strong>. Nuestro equipo de NBN Living Panamá ha recibido tu pedido y se pondrá en contacto al <strong>{telefono}</strong>.
                  </p>
                </div>

                {/* Order Summary box */}
                <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Paquete:</span>
                    <span className="text-white font-bold">{currentProduct.name} (x{quantity})</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Entrega en:</span>
                    <span className="text-white font-medium">{provincia}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Dirección:</span>
                    <span className="text-white font-medium truncate max-w-xs">{direccion}</span>
                  </div>
                  <div className="flex justify-between pt-1 text-base font-bold text-amber-400">
                    <span>Total a Pagar:</span>
                    <span>${subtotal.toFixed(2)} USD</span>
                  </div>
                </div>

                {/* Instant WhatsApp dispatch */}
                <div className="space-y-3 pt-2 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/50769747685?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Finalizar Pedido en WhatsApp Ahora (+507 6974 7685)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Imprimir Comprobante de Orden</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setOrderNumber('');
                    }}
                    className="text-xs text-amber-400 hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Hacer otro pedido
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Order Summary & Panama Delivery Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Pricing Breakdown Card */}
            <div className="bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span>Resumen de tu Selección</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-slate-300">{currentProduct.name}</span>
                  <span className="text-white font-semibold">${currentProduct.salePrice.toFixed(2)} USD</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-slate-300">Cantidad seleccionada</span>
                  <span className="text-white font-semibold">{quantity} {quantity === 1 ? 'paquete' : 'paquetes'}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-slate-300">Tabletas totales</span>
                  <span className="text-emerald-400 font-semibold">{currentProduct.tablets * quantity} tabletas (1200 mg)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-emerald-400 font-medium">
                  <span>Ahorro aplicado:</span>
                  <span>-${estimatedSavings.toFixed(2)} USD</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-xl font-extrabold text-white">
                  <span>Total estimado:</span>
                  <span className="text-amber-400">${subtotal.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Envíos rápidos a las 10 provincias y comarcas de Panamá</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Producto 100% auténtico con sello de seguridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Asesoría personalizada de consumo incluida</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp assistance box */}
            <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-700/40 rounded-3xl p-6 text-center">
              <h4 className="text-base font-bold text-white mb-1">
                ¿Prefieres ordenar directamente por teléfono?
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Comunícate con nuestro asesor oficial de NBN Living Panamá vía WhatsApp o llamada telefónica.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href="https://wa.me/50769747685?text=Hola%2C%20deseo%20ordenar%20Genoxidil%20por%20este%20medio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: (+507) 6974 7685</span>
                </a>
                <a
                  href="tel:+5073745265"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  <span>Llamar: (+507) 374 5265</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
