import React from "react";
import girls_banner from "./assets/girls_banner.png";
import holaMundo from "./assets/holamundo.webp";
import "./App.css";
// Si alguna imagen no se reconoce, puedes ver el archivo index.d.ts para ver si configuraste
// bien las extensiones o tipo de archivo que es (el archivo esta a nivel de la carpeta src)
const App: React.FC = () => {
  const preContent = `My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.`;
  return (
    <div>
      <title>Pagina de alan</title>
      <h1>Encabezado h1</h1>
      <p>Esto es un parrafo</p>
      <h2>Encabezado H2</h2>
      <h3>Encabezado H3</h3>
      <p>
        Parrafo con link <a href="http://localhost:5173/">Esto es un link</a>{" "}
      </p>
      <img src={holaMundo} alt="image" width="104" height="142" />
      <p style={{ color: "red" }}>Párrafo rojo.</p>
      <p title="doy información adicional">Deja el cursor encima de mi</p>
      <br/>
      <a href="https://www.github.com">Enlace a github</a>

      <br/>

      <img src={girls_banner} alt="gochiusa girls" width="500" height="600" />

      <p style={{ color: "blue" }}>Párrafo azul.</p>
      <h1 style={{ fontSize: "60px" }}>Encabezado con letras modificadas</h1>
      
      <h1>This is heading 1</h1>
      <p>This is some text.</p>
      <hr />
      <h2>This is heading 2</h2>
      <p>This is some other text.</p>
      <hr></hr>

      <p>En este<br/>parrafo hay<br/>saltos de linea</p>

      <pre>{preContent}</pre>
      
      <h1 style={{ backgroundColor: "powderblue" }}>This is a heading</h1>
      <p style={{ backgroundColor: "tomato" }}>This is a paragraph.</p>

      <h1 style={{ fontFamily: "verdana" }}>This is a heading</h1>
      <p  style={{ fontFamily: "courier" }}>This is a paragraph.</p>

      <h1 style={{ fontSize: "300%" }}>This is a heading</h1>
      <p  style={{ fontSize: "160%" }}>This is a paragraph.</p>

      <h1 style={{textAlign:"center" }}>Centered Heading</h1>
      <p  style={{textAlign:"center" }}>Centered paragraph.</p>
      <b>Este texto esta en negritas</b>

      <strong>Este texto al estar dentro de la etiqueta strong lo hace importante.</strong>
      <br/>
      <i>El texto en italic se utiliza para citas, palabras extranjeras o un termino tecnico.</i>
      <br/>
      <em>This text is emphasized</em>
      <br/>
      <small>This is some smaller text.</small>
      <br/> 
      <p>Do not forget to buy <mark>milk</mark> today.</p>
      <p>My favorite color is <del>blue</del> red.</p>
      <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
      <p>This is <sub>subscripted</sub> text.</p>
      <p>This is <sup>superscripted</sup> text.</p>
      <p>Here is a quote from WWF's website:</p>
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
      For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
      </blockquote>

      <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

      <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

      <address>
      Written by John Doe.<br />
      Visit us at:<br />
      Example.com<br />
      Box 564, Disneyland<br />
      USA
      </address>

      <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>

      <bdo dir="rtl">This text will be written from right to left</bdo>

      // Este es un comentario en JSX

      /*
      Este es un comentario de varias líneas en JSX.
      Puedes usarlo para hacer anotaciones más largas.
      */


    </div>
  );
};

export default App;
