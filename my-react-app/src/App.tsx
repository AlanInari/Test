import React from "react";
import img_m27 from "./assets/img_m27.png";
import "./App.css";

const App: React.FC = () => {
  
  
  return (
    <body>
      <title>Fusiles de Asalto mas emblematicos</title>

      <h1 style={{color: 'red' }}>Historia del fusil de asalto</h1>
      <p>Un fusil de asalto es un fusil diseñado para el combate, de fuego selectivo (capaz de disparar tanto en modo automático como en modo semiautomático).1234 El primer rifle de asalto que tuvo un uso importante fue el StG 44 alemán, un desarrollo del anterior Mkb 42.567 Los fusiles de asalto son el arma de infantería estándar en la mayoría de los ejércitos modernos y han reemplazado o complementado ampliamente a los más grandes y potentes fusiles de batalla como el M14 estadounidense, el FN FAL belga y el Heckler & Koch G3 alemán.7 Como ejemplos de fusiles de asalto tenemos el fusil M16 y la carabina M4 estadounidenses, el AK-47 soviético, el Indumil Galil ACE colombiano, el L85A2 británico, el FA-MAS francés, el FX-05 Xiuhcóatl mexicano, los HK G36 y HK 416 alemanes o el Steyr AUG austriaco.</p>
      <h2>Historia</h2>
      <p>Desde comienzos del siglo XX se experimentó con munición intermedia y diseños de fusiles semiautomáticos o automáticos como medios para aumentar la potencia de fuego del infante. Entre ellos, se destacarían:

      Fusil Mondragón, El primer fusil semiautomático y automático de la historia diseñado en 1884, es el primero en ser empleado en un ejército desde 1901 por el Ejército Mexicano, fue empleado en la Primera Guerra Mundial por el Imperio Alemán, Imperio Austrohúngaro, Imperio del Japón, República de Weimar, después en la Segunda Guerra Mundial en Francia de Vichy, República española, Unión Soviética, Filipinas también fue usado por países como Corea del Sur, China, Brasil, República de China y Chile.
      Winchester Modelo M1907, en calibre 9x35SR. Precursor directo en concepto de la Carabina M1, fue empleado por los franceses en la Primera Guerra Mundial como eficaz arma de trinchera.
      Avtomat Fiódorova.17 Adoptado en 1916, es el primer fusil de asalto operativo adoptado oficialmente. Por la premura de la guerra, se empleó en calibre 6,5x50 arisaka en lugar del 6,5 mm Fiódorov previsto por su creador. La derrota rusa y la Revolución de Octubre impidieron la adopción definitiva de este modelo tan adelantado a su tiempo.
      Ribeyrolles M1918. De una concepción similar al Winchester Modelo M1907, lo más destacado de esta arma es su munición 8 x 35mm, de una concepción muy cercana a lo que acabaría siendo la munición intermedia adoptada tres décadas más tarde por alemanes o rusos
      </p>
      <h3>Elementos del fusil de asalto</h3>
      <p>Las siguientes características son comúnmente encontradas en los fusiles de asalto, aunque no sean compartidas por todos los diseños, pero no son exclusivas de estos, pudiendo encontrarse también en subfusiles, fusiles de combate, ametralladoras y fusiles semiautomáticos.
      </p>
      <ul>
      <li>Pistolete.</li>
      <li>Dispositivos para la boca del cañón, como frenos de boca o bocachas apagallamas.</li>
      <li>Guardamanos</li>
      <li>Toma de gases (pistón / tubo)</li>
      <li>Cañón</li>
      <li>Cajón de mecanismos</li>
      <li>Cierre</li>
      <li>Tolva del cargador</li>
      <li>Guardamonte</li>
      <li>Ventana de expulsión</li>
      <li>Culata</li>
      </ul>

      <img src="img_m27.png" alt="m27 IAR es un fusil de asalto de nueva generacion" width="500" height="300"></img>

      <a href="https://es.wikipedia.org/wiki/Fusil_de_asalto" target="link a wikipedia">informacion recabada de wikipedia</a>

      <h2>Formulario de Contacto</h2>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

    </body>
  );
};

export default App;
