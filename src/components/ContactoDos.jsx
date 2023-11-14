import { useState } from 'react';


export default function Example() {

  return (
    <div className="bg-white p-3">
      <div >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              No esperes mas, consultanos.{' '}
              <a href="#" className="font-semibold text-black-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Enviar Mail <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl  tracking-tight text-gray-900 sm:text-6xl t-c">
              Si tenes dudas, charla con nosotros
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 t-p-c">
              Si queres saber mas acerca de servicios, turnos o precios, escribinos via email o whatsapp y responderemos a tu consulta.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Enviar mail <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
