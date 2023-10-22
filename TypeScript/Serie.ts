


class Serie
{
    constructor(private id:number,
        private nombre:string, 
        private compañia: string,
        private temporadas: number,
        private descripcion: string,
        private link: string,
        private imagen: string){
        
    }
     // Getter para la propiedad 'id'
  getId(): number {
    return this.id;
  }

  // Setter para la propiedad 'id'
  setId(value: number) {
    this.id = value;
  }

  // Getter para la propiedad 'nombre'
  getNombre(): string {
    return this.nombre;
  }

  // Setter para la propiedad 'nombre'
  setNombre(value: string) {
    this.nombre = value;
  }

  // Getter para la propiedad 'compañia'
  getCompañia(): string {
    return this.compañia;
  }

  // Setter para la propiedad 'compañia'
  setCompañia(value: string) {
    this.compañia = value;
  }

  // Getter para la propiedad 'temporadas'
  getTemporadas(): number {
    return this.temporadas;
  }

  // Setter para la propiedad 'temporadas'
  setTemporadas(value: number) {
    this.temporadas = value;
  }

  // Getter para la propiedad 'descripcion'
  getDescripcion(): string {
    return this.descripcion;
  }

  // Setter para la propiedad 'descripcion'
  setDescripcion(value: string) {
    this.descripcion = value;
  }

  // Getter para la propiedad 'link'
  getLink(): string {
    return this.link;
  }

  // Setter para la propiedad 'link'
  setLink(value: string) {
    this.link = value;
  }

  // Getter para la propiedad 'imagen'
  getImagen(): string {
    return this.imagen;
  }

  // Setter para la propiedad 'imagen'
  setImagen(value: string) {
    this.imagen = value;
  }

    }

const series = [
        new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
        "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
        
        new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
        "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
        
        new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
          "https://i.imgur.com/TDCEV1S.jpg"),
    
        new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
            "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
        
        new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
            "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    
        new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
            "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
      ];

    // Obtén una referencia al elemento donde deseas agregar la tabla
document.addEventListener("DOMContentLoaded", function() {
    var tabla = document.getElementById("tabla") as HTMLTableElement;

    // Verifica si la tabla se encontró
    if (tabla) {
    let totalTemporadas = 0; // Inicializa el contador en 0

      // Itera a través de las series y agrega filas a la tabla
      for (const serie of series) {
        // Crea una nueva fila (tr) en la tabla
        var fila = tabla.insertRow();
    // Crea celdas (HTMLTableCellElement) para cada propiedad de la Serie y establece su contenido
        var idCell = fila.insertCell(0);
        idCell.textContent = serie.getId().toString();
  
        var nombreCell = fila.insertCell(1);
        nombreCell.textContent = serie.getNombre();
  
        var compañiaCell = fila.insertCell(2);
        compañiaCell.textContent = serie.getCompañia();
  
        var temporadasCell = fila.insertCell(3);
        totalTemporadas += serie.getTemporadas();

        temporadasCell.textContent = serie.getTemporadas().toString();
}
    totalTemporadas = totalTemporadas/series.length;
    var fila = tabla.insertRow();
    const celdaVacia = fila.insertCell(0);
    const celdaVacia2 = fila.insertCell(1);
    const celdaPromedio = fila.insertCell(2);
    celdaVacia.textContent = "";
    celdaVacia2.textContent = "Promedio de Temporadas:";
    celdaPromedio.textContent = totalTemporadas.toFixed(2);

}}
);

